"use client";

import { useModel } from "../context/modelProvider";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function SwitchModel() {
    const { model, setModel } = useModel();

    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-5 z-10">
            <Tabs defaultValue="account" className="">
                <TabsList>
                    <TabsTrigger onClick={() => setModel("3d")} value="account">
                        3d map
                    </TabsTrigger>
                    <TabsTrigger
                        onClick={() => setModel("heat")}
                        value="password"
                    >
                        Heat map
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
}
