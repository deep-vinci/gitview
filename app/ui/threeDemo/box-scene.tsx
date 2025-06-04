"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Box() {
    const myMesh = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (myMesh.current) {
            myMesh.current.rotation.y += 0.01;
            myMesh.current.rotation.x += 0.01;
        }
    });
    return (
        <mesh ref={myMesh}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="green" />
        </mesh>
    );
}

export default function BoxScene() {
    return (
        <div className="w-[600px] h-[300px] rounded-2xl canvasbg">
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    decay={0}
                    intensity={Math.PI}
                />
                <pointLight
                    position={[-10, -10, -10]}
                    decay={0}
                    intensity={Math.PI}
                />
                <Box />
            </Canvas>
        </div>
    );
}
