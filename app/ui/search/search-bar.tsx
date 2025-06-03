export default function SearchBar({ user }: { user: string }) {
    return (
        <div>
            <input placeholder="Enter your username" defaultValue={user} />
        </div>
    );
}
