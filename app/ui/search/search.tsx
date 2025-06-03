import SearchBar from "./search-bar";
import SearchButton from "./search-button";

export default function Search({ user }: { user: string }) {
    return (
        <div className="flex gap-2">
            <SearchBar user={user} />
            <SearchButton />
        </div>
    );
}
