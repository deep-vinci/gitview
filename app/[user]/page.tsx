import Search from "../ui/search/search";
import BoxScene from "../ui/threeDemo/box-scene";

export default async function Page({ params }: { params: { user: string } }) {
    const data = await fetch("https://api.vercel.app/blog");
    const posts = await data.json();
    console.log(posts);

    return (
        <div className="flex justify-center items-center flex-col h-[100vh] ">
            <div className="w-min mb-10 mt-[-10rem]">
                <Search user={params.user} />
            </div>
            <div className="flex justify-center">
                <BoxScene />
            </div>
        </div>
    );
}
