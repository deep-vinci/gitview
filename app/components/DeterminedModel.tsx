"use client";

import { useModel } from "../context/modelProvider";
import { Graph } from "./model";
import Heatmap from "./three-heatmap-test";

export default function DeterminedModel({ username }: { username: String }) {
    const { model, setModel } = useModel();

    return <>{model == "3d" ? <Graph username={username} /> : <Heatmap />}</>;
}
