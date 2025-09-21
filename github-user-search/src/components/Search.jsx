import { useState } from "react";
import axios from "axios";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    // Build GitHub search query
    let query = username ? `${username} in:login` : "";
    if (location) {
      query += ` location:${location}`;
    }

    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );
      setResults(res.data.items || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        {/* Username */}
        <input
          type="text"
          placeholder="Search by username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white focus:outline-none"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Filter by location (e.g. Ghana)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white focus:outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6">
        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((user) => (
              <li key={user.id} className="flex items-center gap-4 bg-gray-700 p-4 rounded">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full"
                />
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {user.login}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No results yet.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
