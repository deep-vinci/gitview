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

export default function DeterminedModel({ username }: { username: String }) {
    const { model, setModel } = useModel();
    const { userData, fetchData } = useUserData();
    const [infoClick, setInfoClick] = useState(false);

    return (
        <div className="w-full h-full relative">
            <div className="absolute bottom-0 left-0">
                {!isMobile ? (
                    <Card className="p-5 m-5">
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">
                                Commit Streak
                            </h4>
                            <div className="flex gap-1 items-center ">
                                <Image
                                    src={"/streak.png"}
                                    alt="streaks"
                                    height={20}
                                    width={25}
                                />
                                <p className="text-sm">
                                    Current streak 12 days
                                </p>
                            </div>
                            <div className="flex gap-1 items-center ">
                                <Image
                                    src={"/best.png"}
                                    alt="streaks"
                                    height={20}
                                    width={25}
                                />
                                <p className="text-sm">
                                    Highest streak 12 days
                                </p>
                            </div>

                            <div className="text-muted-foreground text-xs">
                                Joined December 2021
                            </div>
                        </div>{" "}
                    </Card>
                ) : null}
            </div>
            {model == "3d" ? <Graph username={username} /> : <Heatmap />}
        </div>
    );
}
