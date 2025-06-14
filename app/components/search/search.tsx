"use client";

import Link from "next/link";
import { useState } from "react";

export default function Search({ user }: { user: string }) {
    const [userInput, setUserInput] = useState("");

    return (
        <div className="flex bg-white rounded-3xl p-2 shadow-sm">
            <div>
                <input
                    className="outline-0 p-2"
                    spellCheck="false"
                    placeholder="Enter your username"
                    onChange={(e) => setUserInput(e.target.value)}
                    defaultValue={user}
                />
            </div>
            <Link href={`/${userInput}`}>
                <button className="bg-radial rounded-2xl shadow-[0px_6px_5px__rgba(0,0,0,0.3)] from-black to-gray-500 text-white px-5 py-2 w-30 active:scale-[96%]">
                    Search
                </button>
            </Link>
        </div>
    );
}
