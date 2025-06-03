export default function SearchBar({ user }: { user: string }) {
    return (
        <div>
            <input
                className="px-5 py-2 bg-gray-100 outline-0"
                placeholder="Enter your username"
                defaultValue={user}
            />
        </div>
    );
}
