"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { ModeToggle } from "./ui/modeToggle";
import Link from "next/link";
import Form from "next/form";
import { Share } from "./share";
import { useModel } from "../context/modelProvider";
import Repositories from "./repositories";

export default function SideBar({ username }: { username: String }) {
    const [userInput, setUserInput] = useState("");
    const { model, setModel } = useModel();
    // w-100 h-[100vh] flex flex-col
    return (
        <div className="h-full flex flex-col">
            {/* topbar */}
            <div className="p-3 flex items-center w-full">
                <ModeToggle />
                {/* <Button className="ml-auto mr-0">Share</Button> */}
                <div className="ml-auto mr-0">
                    <Share username={username} />
                </div>
            </div>

            <div className="w-full p-3 flex flex-col gap-3">
                <Form action="" className="flex flex-col gap-3">
                    <Input
                        type="text"
                        placeholder="Search username"
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <Link href={`/${userInput}`}>
                        <Button
                            className="w-full"
                            onClick={() => setModel("3d")}
                        >
                            Search
                        </Button>
                    </Link>
                </Form>
            </div>

            {/* repo */}
            <p className="pl-3 text-sm font-bold">Repositories</p>
            <div className="mask-b-from-70% w-full h-200 gap-3 scroll-my-1.5 p-3 flex flex-col md:overflow-auto md:relative">
                <Repositories />
            </div>

            <div className="w-full p-3 flex flex-col gap-3 mt-auto">
                <p className="text-sm font-bold">Widget</p>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
            </div>

            {/* export */}
            <div className="w-full p-3">
                <Button className="w-full">Export</Button>
            </div>
        </div>
    );
}
