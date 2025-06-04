"use client";

import { motion } from "motion/react";

import { useState } from "react";

export default function Search({ user }: { user: string }) {
    const [isOn, setIsOn] = useState(false);

    function showSearch() {
        setIsOn(!isOn);
    }

    const searchBarStyle = {
        width: 0,
    };

    return (
        <motion.div className="flex bg-white rounded-2xl p-2">
            {isOn ? (
                <div>
                    <input
                        className="px-5 py-2 bg-transparent outline-0"
                        placeholder="Enter your username"
                        defaultValue={user}
                    />
                </div>
            ) : (
                ""
            )}
            <button
                onClick={showSearch}
                className="bg-radial rounded-2xl shadow-[0px_6px_5px__rgba(0,0,0,0.3)] from-black to-gray-500 text-white px-5 py-2"
            >
                Search
            </button>{" "}
        </motion.div>
    );
}
