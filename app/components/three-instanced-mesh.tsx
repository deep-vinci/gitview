"use client";

import { useRef, useMemo } from "react";
import { InstancedMesh, Color, Object3D, Matrix4 } from "three";
import { useFrame } from "@react-three/fiber";

type ContributionDay = {
    x: number;
    y: number;
    z: number;
    height: number;
    commits: number;
    date: string;
};

type ContributionGridProps = {
    data: ContributionDay[];
};

const NUM_DAYS = 365;

export default function ContributionGrid({ data }: ContributionGridProps) {
    const meshRef = useRef<InstancedMesh | null>(null);
    const tempObject = useMemo(() => new Object3D(), []);

    const colors = useMemo(() => {
        return data.map((d) => new Color(getColorFromCommits(d.commits)));
    }, [data]);

    useMemo(() => {
        if (!meshRef.current) return;

        data.forEach((day, i) => {
            tempObject.position.set(day.x, day.y, day.z);
            tempObject.scale.set(1, day.height, 1);
            tempObject.updateMatrix();
            meshRef.current!.setMatrixAt(i, tempObject.matrix);
            meshRef.current!.setColorAt(i, colors[i]);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor) {
            meshRef.current.instanceColor.needsUpdate = true;
        }
    }, [data, colors, tempObject]);

    return (
        <instancedMesh
            ref={meshRef}
            args={[undefined, undefined, NUM_DAYS]}
            castShadow
            receiveShadow
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial vertexColors />
        </instancedMesh>
    );
}

function getColorFromCommits(count: number): string {
    if (count === 0) return "#e5e5e5";
    if (count < 5) return "#c6e48b";
    if (count < 10) return "#7bc96f";
    if (count < 20) return "#239a3b";
    return "#196127";
}
