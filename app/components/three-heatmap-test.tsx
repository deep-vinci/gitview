"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import * as THREE from "three";
import { useUserData } from "../context/UserDataContext";
import contributionCounter from "../utils/contributionCounter";

const peaks = [
    { x: -10, y: -10, z: 8 },
    { x: 5, y: 5, z: 15 },
    { x: 10, y: -5, z: 12 },
    { x: -7, y: 8, z: 10 },
];

// Gaussian function for soft peaks
function gaussian(
    x: number,
    y: number,
    peak: { x: number; y: number; z: number }
) {
    const dx = x - peak.x;
    const dy = y - peak.y;
    const d = dx * dx + dy * dy;
    const sigma = 30; // controls sharpness
    return peak.z * Math.exp(-d / (2 * sigma * sigma));
}

function HeatmapMesh({ username }: any) {
    const { userData, fetchData } = useUserData();
    const meshRef = useRef<THREE.Mesh>(null);

    // Trigger data fetch once
    // useEffect(() => {
    //     if (username) {
    //         fetchData(username);
    //     }
    // }, [username]);

    // Grab weeks safely
    const contributionWeeks =
        userData?.contributionsCollection?.contributionCalendar?.weeks;

    // Guard: wait for data to arrive
    if (!contributionWeeks || contributionWeeks.length === 0) {
        return null; // or return a loading spinner/placeholder
    }

    // Compute lowest and highest contributions
    const { lowestContributionCount, highestContributionCount } =
        useMemo(() => {
            return contributionCounter(contributionWeeks);
        }, [contributionWeeks]);

    const geometry = useMemo(() => {
        const weeks = contributionWeeks;

        const cellSize = 4;
        const rows = 12;
        const cols = weeks.length;

        if (cols === 0) return null;
        const paddingCells = 2; // add 2 cells worth of padding on each side

        const paddedCols = cols + 2 * 3;
        const paddedRows = rows + 2 * 2;

        const geo = new THREE.PlaneGeometry(
            paddedCols * cellSize,
            paddedRows * cellSize,
            paddedCols * 2,
            paddedRows * 2
        );
        geo.rotateX(-Math.PI / 2);

        const pos = geo.attributes.position;
        const heights: number[] = [];

        const offsetX = (cols * cellSize) / 2;
        const offsetY = (rows * cellSize) / 4;

        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getZ(i);

            let z = 0;
            for (let ix = 0; ix < cols; ix++) {
                const week = weeks[ix];
                for (let jx = 0; jx < week.contributionDays.length; jx++) {
                    const day = week.contributionDays[jx];
                    const normalized =
                        (day.contributionCount - lowestContributionCount) /
                        Math.max(
                            1,
                            highestContributionCount - lowestContributionCount
                        );
                    const height = Math.sqrt(normalized) * 5;

                    const px = ix * cellSize - offsetX;
                    const py = jx * cellSize - offsetY;

                    const dx = x - px;
                    const dy = y - py;
                    const distSq = dx * dx + dy * dy;
                    const sigma = 5;

                    z += height * Math.exp(-distSq / (2 * sigma * sigma));
                }
            }

            pos.setY(i, z);
            heights.push(z);
        }

        geo.computeVertexNormals();

        const min = Math.min(...heights);
        const max = Math.max(...heights);
        const colors: number[] = [];

        for (let i = 0; i < heights.length; i++) {
            const t = Math.pow(
                (heights[i] - min) / Math.max(1e-5, max - min),
                0.5
            );
            const color = new THREE.Color();
            color.setHSL(0.7 - t * 0.7, 1.0, 0.5);
            colors.push(color.r, color.g, color.b);
        }

        geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
        return geo;
    }, [contributionWeeks, lowestContributionCount, highestContributionCount]);

    // Guard: don't render mesh if geometry is null
    if (!geometry) return null;

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh geometry={geometry} ref={meshRef}>
            <meshLambertMaterial vertexColors={true} side={THREE.DoubleSide} />
        </mesh>
    );
}

export default function Heatmap() {
    return (
        <div className="h-full rounded-2xl ">
            <Canvas
                gl={{
                    powerPreference: "low-power",
                    preserveDrawingBuffer: false,
                    failIfMajorPerformanceCaveat: false,
                }}
                camera={{ position: [100, 200, 200], fov: 50 }}
            >
                <ambientLight intensity={0.3} />
                <directionalLight position={[0, 0, 50]} intensity={1} />
                <HeatmapMesh />
                <OrbitControls target={[0, 0, 0]} /> <Stats />
            </Canvas>
        </div>
    );
}
