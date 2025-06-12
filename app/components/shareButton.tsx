"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Check, CopyCheck } from "lucide-react";

export default function ShareButton({ username }: any) {
    const [copied, setCopied] = useState(false);
    const textToCopy = `${process.env.NEXT_PUBLIC_URL}/${username}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <div className="flex gap-3">
            <Input
                disabled
                value={`${process.env.NEXT_PUBLIC_URL}/${username}`}
            />
            <Button onClick={handleCopy}>
                {copied ? (
                    <span className="flex gap-1 items-center">
                        <Check /> copied!
                    </span>
                ) : (
                    "Copy"
                )}
            </Button>
        </div>
    );
}
