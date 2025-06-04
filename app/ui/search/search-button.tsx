export default function SearchButton() {
    function showSearch() {}

    return (
        <div>
            <div>
                <input
                    className="px-5 py-2 bg-gray-100 outline-0"
                    placeholder="Enter your username"
                    defaultValue={""}
                />
            </div>
            <button
                onClick={showSearch}
                className="bg-radial rounded-2xl shadow-[0px_6px_5px__rgba(0,0,0,0.3)] from-black to-gray-500 text-white px-5 py-2"
            >
                Search
            </button>
        </div>
    );
}
