"use client";

import Form from "next/form";
import Link from "next/link";
import { useState } from "react";

export default function Search({ user }: { user: string }) {
    const [userInput, setUserInput] = useState("");

    return (
        <div className="flex bg-white dark:bg-black rounded-3xl p-2 shadow-sm">
            <Form action="" className="flex">
                <div>
                    <input
                        className="outline-0 p-2 text-black "
                        spellCheck="false"
                        placeholder="Enter your username"
                        onChange={(e) => setUserInput(e.target.value)}
                        defaultValue={user}
                    />
                </div>
                <Link href={`/${userInput}`}>
                    <button className="bg-radial rounded-2xl shadow-[0px_6px_5px__rgba(0,0,0,0.3)] dark:shadow-white/20 bg-black text-white dark:bg-white dark:text-black px-5 py-2 w-30 active:scale-[96%]">
                        Search
                    </button>
                </Link>
            </Form>
        </div>
    );
}
