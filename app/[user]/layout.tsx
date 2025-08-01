import Image from "next/image"; // ✅ Correct import for Next.js
import { UserDataProvider } from "../context/UserDataContext";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import SideBar from "../components/sidebar";
import { ThemeProvider } from "../context/themeProvider";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Analytics } from "@vercel/analytics/next";
export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <UserDataProvider>
                <div className="flex flex-col md:flex-row ">
                    <div className="w-full h-[50dvh] md:h-[100dvh]">
                        {children}
                    </div>
                    <div className="w-full h-[50dvh] overflow-y-auto md:w-100 md:h-[100dvh] text-black`">
                        <SideBar />
                    </div>
                </div>
            </UserDataProvider>
        </ThemeProvider>
    );
}
