import Search from "../ui/search/search";

export default async function Page({ params }: { params: { user: string } }) {
    const data = await fetch("https://api.vercel.app/blog");
    const posts = await data.json();
    console.log(posts);

    return (
        <div>
            <Search user={params.user} />
        </div>
    );
}
