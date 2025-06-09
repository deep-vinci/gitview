import Image from "next/image"; // ✅ Correct import for Next.js
import { UserDataProvider } from "../context/UserDataContext";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import SideBar from "../components/sidebar";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <UserDataProvider>
            <div className="flex">
                <div className="w-full">{children}</div>
                <SideBar />
            </div>
        </UserDataProvider>
    );
}
