import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function SideBar() {
    return (
        <div className="bg-gray-800 w-100 h-[100vh] flex flex-col">
            {/* topbar */}
            <div className="p-3 flex items-center">
                <Avatar className="w-12 h-12">
                    <AvatarImage src="https://github.com/deep-vinci.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Button className="ml-auto mr-0" variant={"secondary"}>
                    Share
                </Button>
            </div>

            {/* repo */}

            {/* export */}
            <div className="w-full p-3 mb-0 mt-auto">
                <Button variant={"default"} className=" w-full">
                    Export
                </Button>
            </div>
        </div>
    );
}
