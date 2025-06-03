"use client";

import { useParams } from "next/navigation";
import Search from "../ui/search/search";

export default function Page() {
    const params = useParams<{ user: string }>();

    return (
        <div>
            <Search user={params.user} />
        </div>
    );
}
