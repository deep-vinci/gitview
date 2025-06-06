"use client";

import { Environment, OrbitControls, SoftShadows } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BoxGeometry, Color, Mesh } from "three";

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
                            // onClick={() => console.log(1)}
                            onPointerDown={(e) => console.log(i)}
                        >
                            <meshStandardMaterial color={color} />
                        </mesh>
                    );
                })}
            </group>
            <mesh position={[-0.17, 0, 0]}>
                <boxGeometry args={[2.5, 0.22, 14.5]} />
                <meshBasicMaterial color="#242424" />
            </mesh>
        </group>
    );
}

const data = [
    {
        contributionDays: [
            {
                contributionCount: 6,
                date: "2024-06-02",
                weekday: 0,
                color: "#40c463",
            },
            {
                contributionCount: 16,
                date: "2024-06-03",
                weekday: 1,
                color: "#216e39",
            },
            {
                contributionCount: 16,
                date: "2024-06-04",
                weekday: 2,
                color: "#216e39",
            },
            {
                contributionCount: 10,
                date: "2024-06-05",
                weekday: 3,
                color: "#30a14e",
            },
            {
                contributionCount: 4,
                date: "2024-06-06",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 12,
                date: "2024-06-07",
                weekday: 5,
                color: "#30a14e",
            },
            {
                contributionCount: 6,
                date: "2024-06-08",
                weekday: 6,
                color: "#40c463",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 5,
                date: "2024-06-09",
                weekday: 0,
                color: "#40c463",
            },
            {
                contributionCount: 5,
                date: "2024-06-10",
                weekday: 1,
                color: "#40c463",
            },
            {
                contributionCount: 4,
                date: "2024-06-11",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 9,
                date: "2024-06-12",
                weekday: 3,
                color: "#40c463",
            },
            {
                contributionCount: 21,
                date: "2024-06-13",
                weekday: 4,
                color: "#216e39",
            },
            {
                contributionCount: 10,
                date: "2024-06-14",
                weekday: 5,
                color: "#30a14e",
            },
            {
                contributionCount: 1,
                date: "2024-06-15",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 14,
                date: "2024-06-16",
                weekday: 0,
                color: "#30a14e",
            },
            {
                contributionCount: 7,
                date: "2024-06-17",
                weekday: 1,
                color: "#40c463",
            },
            {
                contributionCount: 8,
                date: "2024-06-18",
                weekday: 2,
                color: "#40c463",
            },
            {
                contributionCount: 6,
                date: "2024-06-19",
                weekday: 3,
                color: "#40c463",
            },
            {
                contributionCount: 9,
                date: "2024-06-20",
                weekday: 4,
                color: "#40c463",
            },
            {
                contributionCount: 6,
                date: "2024-06-21",
                weekday: 5,
                color: "#40c463",
            },
            {
                contributionCount: 1,
                date: "2024-06-22",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 1,
                date: "2024-06-23",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 2,
                date: "2024-06-24",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-06-25",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-06-26",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-06-27",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-06-28",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-06-29",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-06-30",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 16,
                date: "2024-07-01",
                weekday: 1,
                color: "#216e39",
            },
            {
                contributionCount: 21,
                date: "2024-07-02",
                weekday: 2,
                color: "#216e39",
            },
            {
                contributionCount: 18,
                date: "2024-07-03",
                weekday: 3,
                color: "#216e39",
            },
            {
                contributionCount: 21,
                date: "2024-07-04",
                weekday: 4,
                color: "#216e39",
            },
            {
                contributionCount: 13,
                date: "2024-07-05",
                weekday: 5,
                color: "#30a14e",
            },
            {
                contributionCount: 6,
                date: "2024-07-06",
                weekday: 6,
                color: "#40c463",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 6,
                date: "2024-07-07",
                weekday: 0,
                color: "#40c463",
            },
            {
                contributionCount: 10,
                date: "2024-07-08",
                weekday: 1,
                color: "#30a14e",
            },
            {
                contributionCount: 10,
                date: "2024-07-09",
                weekday: 2,
                color: "#30a14e",
            },
            {
                contributionCount: 6,
                date: "2024-07-10",
                weekday: 3,
                color: "#40c463",
            },
            {
                contributionCount: 5,
                date: "2024-07-11",
                weekday: 4,
                color: "#40c463",
            },
            {
                contributionCount: 5,
                date: "2024-07-12",
                weekday: 5,
                color: "#40c463",
            },
            {
                contributionCount: 2,
                date: "2024-07-13",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 1,
                date: "2024-07-14",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 5,
                date: "2024-07-15",
                weekday: 1,
                color: "#40c463",
            },
            {
                contributionCount: 10,
                date: "2024-07-16",
                weekday: 2,
                color: "#30a14e",
            },
            {
                contributionCount: 10,
                date: "2024-07-17",
                weekday: 3,
                color: "#30a14e",
            },
            {
                contributionCount: 4,
                date: "2024-07-18",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 6,
                date: "2024-07-19",
                weekday: 5,
                color: "#40c463",
            },
            {
                contributionCount: 0,
                date: "2024-07-20",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-07-21",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2024-07-22",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-07-23",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-07-24",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-07-25",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-07-26",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 5,
                date: "2024-07-27",
                weekday: 6,
                color: "#40c463",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 14,
                date: "2024-07-28",
                weekday: 0,
                color: "#30a14e",
            },
            {
                contributionCount: 3,
                date: "2024-07-29",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-07-30",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-07-31",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2024-08-01",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-08-02",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 3,
                date: "2024-08-03",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-08-04",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-08-05",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2024-08-06",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 5,
                date: "2024-08-07",
                weekday: 3,
                color: "#40c463",
            },
            {
                contributionCount: 3,
                date: "2024-08-08",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-08-09",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-08-10",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 5,
                date: "2024-08-11",
                weekday: 0,
                color: "#40c463",
            },
            {
                contributionCount: 0,
                date: "2024-08-12",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 2,
                date: "2024-08-13",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 4,
                date: "2024-08-14",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-08-15",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-08-16",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 5,
                date: "2024-08-17",
                weekday: 6,
                color: "#40c463",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-08-18",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-08-19",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2024-08-20",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-08-21",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2024-08-22",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-08-23",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 2,
                date: "2024-08-24",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 6,
                date: "2024-08-25",
                weekday: 0,
                color: "#40c463",
            },
            {
                contributionCount: 2,
                date: "2024-08-26",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 2,
                date: "2024-08-27",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 8,
                date: "2024-08-28",
                weekday: 3,
                color: "#40c463",
            },
            {
                contributionCount: 2,
                date: "2024-08-29",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-08-30",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-08-31",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-09-01",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2024-09-02",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 6,
                date: "2024-09-03",
                weekday: 2,
                color: "#40c463",
            },
            {
                contributionCount: 1,
                date: "2024-09-04",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-09-05",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-09-06",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 3,
                date: "2024-09-07",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 3,
                date: "2024-09-08",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 4,
                date: "2024-09-09",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-09-10",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 5,
                date: "2024-09-11",
                weekday: 3,
                color: "#40c463",
            },
            {
                contributionCount: 5,
                date: "2024-09-12",
                weekday: 4,
                color: "#40c463",
            },
            {
                contributionCount: 1,
                date: "2024-09-13",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-09-14",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 1,
                date: "2024-09-15",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-09-16",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-09-17",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-09-18",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-09-19",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-09-20",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-09-21",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-09-22",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-09-23",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-09-24",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2024-09-25",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-09-26",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2024-09-27",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-09-28",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-09-29",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2024-09-30",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-10-01",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-10-02",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-10-03",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 7,
                date: "2024-10-04",
                weekday: 5,
                color: "#40c463",
            },
            {
                contributionCount: 0,
                date: "2024-10-05",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-10-06",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-10-07",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-10-08",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-10-09",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-10-10",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2024-10-11",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-10-12",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-10-13",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-10-14",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 2,
                date: "2024-10-15",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-10-16",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-10-17",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 8,
                date: "2024-10-18",
                weekday: 5,
                color: "#40c463",
            },
            {
                contributionCount: 0,
                date: "2024-10-19",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-10-20",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-10-21",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 8,
                date: "2024-10-22",
                weekday: 2,
                color: "#40c463",
            },
            {
                contributionCount: 5,
                date: "2024-10-23",
                weekday: 3,
                color: "#40c463",
            },
            {
                contributionCount: 0,
                date: "2024-10-24",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 6,
                date: "2024-10-25",
                weekday: 5,
                color: "#40c463",
            },
            {
                contributionCount: 3,
                date: "2024-10-26",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-10-27",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 3,
                date: "2024-10-28",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 11,
                date: "2024-10-29",
                weekday: 2,
                color: "#30a14e",
            },
            {
                contributionCount: 1,
                date: "2024-10-30",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-10-31",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-11-01",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-11-02",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-11-03",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2024-11-04",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 3,
                date: "2024-11-05",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-11-06",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2024-11-07",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-11-08",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-11-09",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-11-10",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 2,
                date: "2024-11-11",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 6,
                date: "2024-11-12",
                weekday: 2,
                color: "#40c463",
            },
            {
                contributionCount: 4,
                date: "2024-11-13",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-11-14",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 9,
                date: "2024-11-15",
                weekday: 5,
                color: "#40c463",
            },
            {
                contributionCount: 1,
                date: "2024-11-16",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 17,
                date: "2024-11-17",
                weekday: 0,
                color: "#216e39",
            },
            {
                contributionCount: 6,
                date: "2024-11-18",
                weekday: 1,
                color: "#40c463",
            },
            {
                contributionCount: 7,
                date: "2024-11-19",
                weekday: 2,
                color: "#40c463",
            },
            {
                contributionCount: 12,
                date: "2024-11-20",
                weekday: 3,
                color: "#30a14e",
            },
            {
                contributionCount: 2,
                date: "2024-11-21",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 8,
                date: "2024-11-22",
                weekday: 5,
                color: "#40c463",
            },
            {
                contributionCount: 2,
                date: "2024-11-23",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 3,
                date: "2024-11-24",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-11-25",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 6,
                date: "2024-11-26",
                weekday: 2,
                color: "#40c463",
            },
            {
                contributionCount: 0,
                date: "2024-11-27",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-11-28",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-11-29",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-11-30",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-12-01",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-12-02",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-12-03",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-12-04",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 3,
                date: "2024-12-05",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 2,
                date: "2024-12-06",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-12-07",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 2,
                date: "2024-12-08",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2024-12-09",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 5,
                date: "2024-12-10",
                weekday: 2,
                color: "#40c463",
            },
            {
                contributionCount: 0,
                date: "2024-12-11",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-12-12",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-12-13",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2024-12-14",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2024-12-15",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 2,
                date: "2024-12-16",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 11,
                date: "2024-12-17",
                weekday: 2,
                color: "#30a14e",
            },
            {
                contributionCount: 30,
                date: "2024-12-18",
                weekday: 3,
                color: "#216e39",
            },
            {
                contributionCount: 1,
                date: "2024-12-19",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-12-20",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-12-21",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 1,
                date: "2024-12-22",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-12-23",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-12-24",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-12-25",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 3,
                date: "2024-12-26",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-12-27",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2024-12-28",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 1,
                date: "2024-12-29",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 13,
                date: "2024-12-30",
                weekday: 1,
                color: "#30a14e",
            },
            {
                contributionCount: 6,
                date: "2024-12-31",
                weekday: 2,
                color: "#40c463",
            },
            {
                contributionCount: 1,
                date: "2025-01-01",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 8,
                date: "2025-01-02",
                weekday: 4,
                color: "#40c463",
            },
            {
                contributionCount: 5,
                date: "2025-01-03",
                weekday: 5,
                color: "#40c463",
            },
            {
                contributionCount: 2,
                date: "2025-01-04",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 1,
                date: "2025-01-05",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2025-01-06",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2025-01-07",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2025-01-08",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2025-01-09",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2025-01-10",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 8,
                date: "2025-01-11",
                weekday: 6,
                color: "#40c463",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 13,
                date: "2025-01-12",
                weekday: 0,
                color: "#30a14e",
            },
            {
                contributionCount: 9,
                date: "2025-01-13",
                weekday: 1,
                color: "#40c463",
            },
            {
                contributionCount: 12,
                date: "2025-01-14",
                weekday: 2,
                color: "#30a14e",
            },
            {
                contributionCount: 10,
                date: "2025-01-15",
                weekday: 3,
                color: "#30a14e",
            },
            {
                contributionCount: 1,
                date: "2025-01-16",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 4,
                date: "2025-01-17",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 4,
                date: "2025-01-18",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 11,
                date: "2025-01-19",
                weekday: 0,
                color: "#30a14e",
            },
            {
                contributionCount: 1,
                date: "2025-01-20",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 2,
                date: "2025-01-21",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 6,
                date: "2025-01-22",
                weekday: 3,
                color: "#40c463",
            },
            {
                contributionCount: 0,
                date: "2025-01-23",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-01-24",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-01-25",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2025-01-26",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 2,
                date: "2025-01-27",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 5,
                date: "2025-01-28",
                weekday: 2,
                color: "#40c463",
            },
            {
                contributionCount: 1,
                date: "2025-01-29",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 6,
                date: "2025-01-30",
                weekday: 4,
                color: "#40c463",
            },
            {
                contributionCount: 4,
                date: "2025-01-31",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 17,
                date: "2025-02-01",
                weekday: 6,
                color: "#216e39",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 4,
                date: "2025-02-02",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2025-02-03",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-02-04",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-02-05",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2025-02-06",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-02-07",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 8,
                date: "2025-02-08",
                weekday: 6,
                color: "#40c463",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2025-02-09",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2025-02-10",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-02-11",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2025-02-12",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 4,
                date: "2025-02-13",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 9,
                date: "2025-02-14",
                weekday: 5,
                color: "#40c463",
            },
            {
                contributionCount: 0,
                date: "2025-02-15",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2025-02-16",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-02-17",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-02-18",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-02-19",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-02-20",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-02-21",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-02-22",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2025-02-23",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-02-24",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-02-25",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-02-26",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-02-27",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2025-02-28",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-03-01",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 1,
                date: "2025-03-02",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2025-03-03",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 8,
                date: "2025-03-04",
                weekday: 2,
                color: "#40c463",
            },
            {
                contributionCount: 1,
                date: "2025-03-05",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 3,
                date: "2025-03-06",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-03-07",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 5,
                date: "2025-03-08",
                weekday: 6,
                color: "#40c463",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 1,
                date: "2025-03-09",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 2,
                date: "2025-03-10",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 4,
                date: "2025-03-11",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 6,
                date: "2025-03-12",
                weekday: 3,
                color: "#40c463",
            },
            {
                contributionCount: 1,
                date: "2025-03-13",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-03-14",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 6,
                date: "2025-03-15",
                weekday: 6,
                color: "#40c463",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 8,
                date: "2025-03-16",
                weekday: 0,
                color: "#40c463",
            },
            {
                contributionCount: 1,
                date: "2025-03-17",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 13,
                date: "2025-03-18",
                weekday: 2,
                color: "#30a14e",
            },
            {
                contributionCount: 8,
                date: "2025-03-19",
                weekday: 3,
                color: "#40c463",
            },
            {
                contributionCount: 1,
                date: "2025-03-20",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 4,
                date: "2025-03-21",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 5,
                date: "2025-03-22",
                weekday: 6,
                color: "#40c463",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 3,
                date: "2025-03-23",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 2,
                date: "2025-03-24",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2025-03-25",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-03-26",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 4,
                date: "2025-03-27",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-03-28",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 8,
                date: "2025-03-29",
                weekday: 6,
                color: "#40c463",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 18,
                date: "2025-03-30",
                weekday: 0,
                color: "#216e39",
            },
            {
                contributionCount: 8,
                date: "2025-03-31",
                weekday: 1,
                color: "#40c463",
            },
            {
                contributionCount: 15,
                date: "2025-04-01",
                weekday: 2,
                color: "#216e39",
            },
            {
                contributionCount: 1,
                date: "2025-04-02",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 3,
                date: "2025-04-03",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 5,
                date: "2025-04-04",
                weekday: 5,
                color: "#40c463",
            },
            {
                contributionCount: 2,
                date: "2025-04-05",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 8,
                date: "2025-04-06",
                weekday: 0,
                color: "#40c463",
            },
            {
                contributionCount: 7,
                date: "2025-04-07",
                weekday: 1,
                color: "#40c463",
            },
            {
                contributionCount: 5,
                date: "2025-04-08",
                weekday: 2,
                color: "#40c463",
            },
            {
                contributionCount: 1,
                date: "2025-04-09",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 4,
                date: "2025-04-10",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2025-04-11",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 4,
                date: "2025-04-12",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 5,
                date: "2025-04-13",
                weekday: 0,
                color: "#40c463",
            },
            {
                contributionCount: 14,
                date: "2025-04-14",
                weekday: 1,
                color: "#30a14e",
            },
            {
                contributionCount: 0,
                date: "2025-04-15",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 19,
                date: "2025-04-16",
                weekday: 3,
                color: "#216e39",
            },
            {
                contributionCount: 1,
                date: "2025-04-17",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2025-04-18",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-04-19",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2025-04-20",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-04-21",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-04-22",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2025-04-23",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-04-24",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2025-04-25",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2025-04-26",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 7,
                date: "2025-04-27",
                weekday: 0,
                color: "#40c463",
            },
            {
                contributionCount: 3,
                date: "2025-04-28",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 7,
                date: "2025-04-29",
                weekday: 2,
                color: "#40c463",
            },
            {
                contributionCount: 8,
                date: "2025-04-30",
                weekday: 3,
                color: "#40c463",
            },
            {
                contributionCount: 2,
                date: "2025-05-01",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 5,
                date: "2025-05-02",
                weekday: 5,
                color: "#40c463",
            },
            {
                contributionCount: 2,
                date: "2025-05-03",
                weekday: 6,
                color: "#9be9a8",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 1,
                date: "2025-05-04",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 6,
                date: "2025-05-05",
                weekday: 1,
                color: "#40c463",
            },
            {
                contributionCount: 0,
                date: "2025-05-06",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 3,
                date: "2025-05-07",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-05-08",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 1,
                date: "2025-05-09",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-05-10",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 0,
                date: "2025-05-11",
                weekday: 0,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-05-12",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-05-13",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-05-14",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-05-15",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-05-16",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-05-17",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 1,
                date: "2025-05-18",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 0,
                date: "2025-05-19",
                weekday: 1,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-05-20",
                weekday: 2,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-05-21",
                weekday: 3,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-05-22",
                weekday: 4,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-05-23",
                weekday: 5,
                color: "#ebedf0",
            },
            {
                contributionCount: 0,
                date: "2025-05-24",
                weekday: 6,
                color: "#ebedf0",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 1,
                date: "2025-05-25",
                weekday: 0,
                color: "#9be9a8",
            },
            {
                contributionCount: 6,
                date: "2025-05-26",
                weekday: 1,
                color: "#40c463",
            },
            {
                contributionCount: 4,
                date: "2025-05-27",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 2,
                date: "2025-05-28",
                weekday: 3,
                color: "#9be9a8",
            },
            {
                contributionCount: 1,
                date: "2025-05-29",
                weekday: 4,
                color: "#9be9a8",
            },
            {
                contributionCount: 2,
                date: "2025-05-30",
                weekday: 5,
                color: "#9be9a8",
            },
            {
                contributionCount: 6,
                date: "2025-05-31",
                weekday: 6,
                color: "#40c463",
            },
        ],
    },
    {
        contributionDays: [
            {
                contributionCount: 6,
                date: "2025-06-01",
                weekday: 0,
                color: "#40c463",
            },
            {
                contributionCount: 3,
                date: "2025-06-02",
                weekday: 1,
                color: "#9be9a8",
            },
            {
                contributionCount: 4,
                date: "2025-06-03",
                weekday: 2,
                color: "#9be9a8",
            },
            {
                contributionCount: 18,
                date: "2025-06-04",
                weekday: 3,
                color: "#216e39",
            },
            {
                contributionCount: 1,
                date: "2025-06-05",
                weekday: 4,
                color: "#9be9a8",
            },
        ],
    },
];

function Scene2() {
    // const meshRef = useRef<Mesh>(null!);

    // useFrame(() => {
    // meshRef.current.rotation.x = 0.01;
    // meshx.current.rotation.y += 0.005;
    // });

    // useEffect(() => {
    // for (const week of data) {
    //     for (const day of week.contributionDays ?? []) {
    //         console.log(day);
    //     }
    // }
    // }, []);

    return (
        // <group ref={meshRef}>
        <group>
            <group>
                {Array.from({ length: data.length }).map((_, i) => {
                    return Array.from({
                        length: data[i].contributionDays.length,
                    }).map((e, j) => {
                        // console.log(data[i].contributionDays[j].color);
                        // let e = data;
                        return (
                            <mesh
                                key={data[i].contributionDays[j].date}
                                position={[
                                    i,
                                    data[i].contributionDays[j]
                                        .contributionCount / 2,
                                    -3.5 + j,
                                ]}
                                onPointerDown={(e) =>
                                    console.log(
                                        data[i].contributionDays[j]
                                            .contributionCount
                                    )
                                }
                            >
                                <boxGeometry
                                    args={[
                                        1,
                                        data[i].contributionDays[j]
                                            .contributionCount,
                                        1,
                                    ]}
                                />
                                <meshStandardMaterial
                                    color={data[i].contributionDays[j].color}
                                />
                            </mesh>
                        );
                    });
                })}
            </group>
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
                <SoftShadows size={10} samples={30} focus={0.5} />
                {/* <Scene /> */}
                <Scene2 />
                {/* <mesh>
                    <sphereGeometry args={[1, 10, 10]} />
                    <meshBasicMaterial color="red" />
                </mesh> */}
                <points>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={1}
                            array={new Float32Array([0, 0, 0])}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <pointsMaterial color="red" size={1} sizeAttenuation />
                </points>
                <OrbitControls
                    enablePan={true}
                    enableRotate={true}
                    enableDamping={true}
                />
            </Canvas>
        </div>
    );
}
