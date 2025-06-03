"use client";

import { useParams } from "next/navigation";

export default function Page() {
    const params = useParams<{ user: string }>();

    return <div>{params.user}</div>;
}
