"use client";

import { useState } from "react";
import { Button } from "./ui/button";
// import { Card, CardDescription } from "./ui/card";
import { Input } from "./ui/input";
import { ModeToggle } from "./ui/modeToggle";
import Link from "next/link";
import Form from "next/form";
import { Share } from "./share";
import { useModel } from "../context/modelProvider";
import Repositories from "./repositories";
import Image from "next/image";
import { Card, CardDescription, CardHeader } from "./ui/card";
import { useUserData } from "../context/UserDataContext";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage, Fallback } from "@radix-ui/react-avatar";
import { Search } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export default function SideBar() {
    const [userInput, setUserInput] = useState("");
    const { model, setModel } = useModel();
    const { userData, fetchData } = useUserData();

    const isLoading = !userData;

    // w-100 h-[100vh] flex flex-col
    return (
        <div className="h-full flex flex-col dark:bg-black">
            {/* topbar */}
            <div className="p-3 flex items-center w-full dark:text-white">
                <ModeToggle />
                {/* <Button className="ml-auto mr-0">Share</Button> */}
                <div className="ml-auto mr-0 ">
                    <Share username={userData?.login} />
                </div>
            </div>

            <div className="w-full p-3 flex flex-col gap-3">
                <Form action="" className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <Avatar>
                            {isLoading ? (
                                <Skeleton className="w-10 h-10 rounded-full" />
                            ) : (
                                <Link
                                    target="_blank"
                                    href={`https://github.com/${userData.login}`}
                                >
                                    <AvatarImage src={userData.avatarUrl} />
                                </Link>
                            )}
                            {/* <AvatarFallback>    </AvatarFallback> */}
                        </Avatar>
                        <Input
                            type="text"
                            placeholder={userData?.login}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                    </div>
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
            <p className="pl-3 text-sm font-bold dark:text-white">
                Repositories
            </p>
            <div className="mask-b-from-70% w-full h-200 gap-3 scroll-my-1.5 p-3 flex flex-col md:overflow-auto md:relative">
                {isLoading ? (
                    <div className="flex flex-col gap-3 dark:text-white">
                        <Skeleton className="w-full h-20 rounded-lg" />
                        <Skeleton className="w-full h-15 rounded-lg" />
                        <Skeleton className="w-full h-20 rounded-lg" />
                        <Skeleton className="w-full h-20 rounded-lg" />
                    </div>
                ) : (
                    <Repositories username={userData?.login} />
                )}
            </div>

            <div className="w-full p-3 flex flex-col  gap-3 mt-auto">
                <p className="text-sm font-bold dark:text-white">
                    Github Widget
                </p>
                <Card className="p-0 relative">
                    <CardHeader>
                        {/* <CardDescription>Github</CardDescription> */}
                        <div className="flex justify-center items-center mr-10  p-0">
                            {" "}
                            <Image
                                className="m-0"
                                src={"/widget.png"}
                                height={40}
                                width={140}
                                alt="sad"
                            />
                        </div>
                        <Button
                            variant={"secondary"}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            Coming soon
                        </Button>
                    </CardHeader>
                </Card>
            </div>

            {/* export */}
            <div className="w-full p-3">
                <Button className="w-full">Export</Button>
            </div>
        </div>
    );
}
