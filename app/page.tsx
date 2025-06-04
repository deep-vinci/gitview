"use client";

import Search from "./ui/search/search";
import { motion } from "motion/react";
import { geist, instrument_Serif } from "./ui/fonts";

export default function Home() {
    return (
        <div className="box-border p-3">
            <div className="bg-gradient-to-t from-gray-300 to-gray-100 w-full h-[90vh] rounded-2xl flex  items-center flex-col">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`${geist.className} text-center mt-30`}
                >
                    <p className=" text-7xl font-bold p-5">
                        Your{" "}
                        <span className={`${instrument_Serif.className}`}>
                            Github
                        </span>
                    </p>
                    <p className=" text-7xl font-bold">
                        Contribution in{" "}
                        <span className="bg-gradient-to-tr from-blue-600 to-violet-500 text-transparent bg-clip-text">
                            3d
                        </span>
                    </p>
                </motion.div>

                <div className="mt-10">
                    <Search user="" />
                </div>
            </div>
        </div>
    );
}
