"use client";

import { useMemo } from "react";
import { BoxGeometry, MeshStandardMaterial, Mesh, Color } from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, SoftShadows } from "@react-three/drei";
import { useRef } from "react";
import { div } from "motion/react-client";
import { useThree } from "@react-three/fiber";

function BarChart(props: any) {
    const mesh = useMemo(() => {
        const total = 365;
        const columns = 7;
        const rows = Math.ceil(total / columns);
        const width = 0.2;
        const depth = 0.2;
        const gap = 0.06;

        const geometries = [];

        for (let i = 0; i < total; i++) {
            const height = Math.random() * 2 + 0.1;
            const geom = new BoxGeometry(width, height, depth, 10, 10, 10);

            // Grid position
            const x = (i % columns) * (width + gap);
            const z = Math.floor(i / columns) * (depth + gap);
            geom.translate(x, height / 2, z); // move Y by half height

            geometries.push(geom);
        }

        const mergedGeometry = mergeGeometries(geometries);
        const material = new MeshStandardMaterial({
            color: new Color("green"),
        });

        const mesh = new Mesh(mergedGeometry, material);

        // Center the mesh on X and Z
        const totalWidth = columns * (width + gap);
        const totalDepth = rows * (depth + gap);
        mesh.position.x = -totalWidth / 2;
        mesh.position.z = -totalDepth / 2;

        return mesh;
    }, []);

    return <primitive object={mesh} {...props} />;
}

function Scene() {
    const meshx = useRef<Mesh>(null!);
    const total = 365;
    const columns = 7;
    const rows = Math.ceil(total / columns);
    const width = 0.2;
    const depth = 0.2;
    const gap = 0.06;

    useFrame(() => {
        meshx.current.rotation.x = 0.01;
        // meshx.current.rotation.y += 0.005;
    });
    // position={[-0.8, 1, -6.5]}
    //
    return (
        <group ref={meshx}>
            <group>
                {Array.from({ length: total }).map((_, i) => {
                    const height = Math.random() * 2 + 0.1;
                    const x =
                        (i % columns) * (width + gap) -
                        (columns * (width + gap)) / 2;
                    const z =
                        Math.floor(i / columns) * (depth + gap) -
                        (Math.ceil(total / columns) * (depth + gap)) / 2;
                    const color = new Color().setHSL(i / total, 1, 0.5);

                    return (
                        <mesh
                            key={i}
                            position={[x, height / 2, z]}
                            geometry={new BoxGeometry(width, height, depth)}
                        >
                            <meshStandardMaterial color={color} />
                        </mesh>
                    );
                })}
            </group>
            <mesh position={[-0.17, 0, 0]}>
                <boxGeometry args={[2.5, 0.22, 14.5]} />
                {/* <meshBasicMaterial color="#f0f0f0d" /> */}
                <meshBasicMaterial color="#242424" />
            </mesh>
        </group>
    );
}

export default function Graph() {
    return (
        <div className="w-full h-[90vh] rounded-2xl canvasbg ">
            <Canvas camera={{ position: [0, 8, 12], fov: 50 }}>
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

                {/* Optional: Adds better shadow softness (experimental, use only if needed) */}
                <SoftShadows size={10} samples={30} focus={0.5} />

                {/* Your objects here */}
                {/* <mesh castShadow receiveShadow>...</mesh> */}

                <Scene />
                {/* <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[1, 20, 20]} />
                    <meshBasicMaterial color="blue" />
                </mesh> */}
                <OrbitControls
                    enablePan={true}
                    enableRotate={true}
                    enableDamping={true}
                />
            </Canvas>
        </div>
    );
}
