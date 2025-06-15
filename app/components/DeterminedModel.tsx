"use client";

import {
    GitCommit,
    GitCommitHorizontal,
    GitCommitVertical,
} from "lucide-react";
import { useModel } from "../context/modelProvider";
import { useUserData } from "../context/UserDataContext";
import { Graph } from "./model";
import Heatmap from "./three-heatmap-test";
import { Card, CardTitle } from "./ui/card";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import Stats from "./stats";

export default function DeterminedModel({ username }: { username: String }) {
    const { model, setModel } = useModel();
    const { userData, fetchData } = useUserData();
    const [infoClick, setInfoClick] = useState(false);

    return (
        <div className="w-full h-full relative">
            <div className="absolute bottom-0 left-0">
                {!isMobile ? <Stats /> : null}
            </div>
            {model == "3d" ? <Graph username={username} /> : <Heatmap />}
        </div>
    );
}
