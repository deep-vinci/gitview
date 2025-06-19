"use client";

import {
    Environment,
    OrbitControls,
    SoftShadows,
    Stats,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { BoxGeometry, Color, Mesh } from "three";
import { useUserData } from "../context/UserDataContext";
import contributionCounter from "../utils/contributionCounter";
import { UserData } from "../types/userData";

function Scene2({ username }: any) {
    const meshRef = useRef<Mesh>(null!);
    const { userData, fetchData } = useUserData();
    // const [hovered, setHovered] = useState(false);

    // animation
    useFrame(() => {
        // meshRef.current.rotation.x = 0.6;
        meshRef.current.rotation.y = -0.8;
    });

    // data
    useEffect(() => {
        fetchData(username);
    }, [username]);

    const contributionWeeks =
        userData?.contributionsCollection?.contributionCalendar?.weeks;

    let { lowestContributionCount, highestContributionCount } = useMemo(() => {
        if (!contributionWeeks)
            return { lowestContributionCount: 0, highestContributionCount: 0 };

        return contributionCounter(contributionWeeks);
    }, [contributionWeeks]);

    const contributionDataForRender =
        userData?.contributionsCollection?.contributionCalendar?.weeks || [];

    return (
        <group ref={meshRef}>
            <group>
                {contributionDataForRender.map((week, i) =>
                    week.contributionDays.map((day, j) => {
                        // Calculate the height for this mesh
                        const height =
                            ((day.contributionCount - lowestContributionCount) /
                                (highestContributionCount -
                                    lowestContributionCount)) *
                            15;

                        // Inline component for per-mesh hover state
                        function ContributionMesh() {
                            const meshRef = useRef<Mesh>(null);
                            const [hovered, setHovered] = useState(false);

                            useFrame(() => {
                                if (meshRef.current) {
                                    meshRef.current.scale.y +=
                                        ((hovered ? 1.3 : 1) -
                                            meshRef.current.scale.y) *
                                        0.5;
                                    meshRef.current.position.y +=
                                        ((hovered
                                            ? height / 2 + 1
                                            : height / 2) -
                                            meshRef.current.position.y) *
                                        0.5;
                                }
                            });

                            if (height === 0) return;
                            return (
                                <mesh
                                    ref={meshRef}
                                    key={day.date}
                                    position={[
                                        25 - i * 1.1,
                                        height / 2,
                                        -3 + j * 1.1,
                                    ]}
                                    onPointerOver={(e) => {
                                        e.stopPropagation();
                                        setHovered(true);
                                        console.log(day);
                                    }}
                                    onPointerOut={(e) => {
                                        e.stopPropagation();
                                        setHovered(false);
                                    }}
                                >
                                    <boxGeometry args={[1, height, 1]} />
                                    <meshStandardMaterial color={day.color} />
                                </mesh>
                            );
                        }

                        return <ContributionMesh key={day.date} />;
                    })
                )}
            </group>
        </group>
    );
}

export function Graph({ username }: any) {
    return (
        <div className="h-full rounded-2xl ">
            <Canvas camera={{ position: [10, 30, 50], fov: 50 }}>
                <ambientLight intensity={0.3} />

                <directionalLight
                    castShadow
                    position={[10, 10, 5]}
                    intensity={1}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />

                <Environment preset="forest" />
                <SoftShadows size={10} samples={30} focus={0.5} />
                {/* <Scene /> */}
                <Scene2 username={username} />
                <mesh>
                    <sphereGeometry args={[1, 10, 10]} />
                    <meshBasicMaterial color="red" />
                </mesh>
                <OrbitControls
                    enablePan={true}
                    enableRotate={true}
                    enableDamping={true}
                />
                {/* <Stats  showPanel={0} /> */}
            </Canvas>
        </div>
    );
}

export function ShareableGraph({ username }: any) {
    return (
        <div className="w-full h-100">
            <Canvas camera={{ position: [10, 30, 50], fov: 40 }}>
                <ambientLight intensity={0.3} />

                <directionalLight
                    castShadow
                    position={[10, 10, 5]}
                    intensity={1}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />

                <Environment preset="forest" />
                <SoftShadows size={10} samples={30} focus={0.5} />
                {/* <Scene /> */}
                <Scene2 username={username} />
                <mesh>
                    <sphereGeometry args={[1, 10, 10]} />
                    <meshBasicMaterial color="red" />
                </mesh>
                {/* <OrbitControls
                    enablePan={true}
                    enableRotate={true}
                    enableDamping={true}
                /> */}
            </Canvas>
        </div>
    );
}
