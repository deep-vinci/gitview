"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { ModeToggle } from "./ui/modeToggle";
import Link from "next/link";
import Form from "next/form";
import { GitBranch } from "lucide-react";
import { Share } from "./share";

export default function SideBar({ username }: { username: String }) {
    const [userInput, setUserInput] = useState("");

    return (
        <div className="w-100 h-[100vh] flex flex-col">
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
                        <Button className="w-full">Search</Button>
                    </Link>
                </Form>
            </div>

            {/* repo */}
            <div className="w-full h-200 scroll-my-1.5 p-3 flex flex-col gap-3">
                <p className="text-sm font-bold">Repositories</p>
                <Card>
                    <CardHeader>
                        <CardTitle>ViperTown</CardTitle>
                        <CardDescription>
                            Modernized xenzia for web
                        </CardDescription>
                        <CardAction>
                            <div className="h-5 w-5">
                                <svg
                                    className="fill-white"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>GitHub</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </div>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <CardAction>
                            <div className="h-5 w-5">
                                <svg
                                    className="fill-white"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>GitHub</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </div>
                        </CardAction>{" "}
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
            </div>

            <div className="w-full p-3 flex flex-col gap-3">
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
            <div className="w-full p-3 mb-0 mt-auto">
                <Button className="w-full">Export</Button>
            </div>
        </div>
    );
}
