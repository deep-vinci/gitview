import SearchBar from "./search-bar";
import SearchButton from "./search-button";

export default function Search({ user }: { user: string }) {
    return (
        <div>
            <SearchBar user={user} />
            <SearchButton />
        </div>
    );
}
