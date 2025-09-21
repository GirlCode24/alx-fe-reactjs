// src/components/Search.jsx
import { useState } from "react";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch additional details for a single user
  const fetchUserData = async (username) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}`);
      return data;
    } catch (err) {
      console.error("Failed to fetch user data:", err);
      return null;
    }
  };

  // Handle search submit
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      // Build query string
      let q = query.trim();
      if (location.trim()) q += `+location:${location.trim()}`;

      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${q}`
      );

      if (data?.items?.length) {
        // Get detailed info for each user
        const detailedUsers = await Promise.all(
          data.items.map(async (user) => {
            const details = await fetchUserData(user.login);
            return { ...user, ...details };
          })
        );
        setUsers(detailedUsers);
      } else {
        setError("No users found.");
      }
    } catch (err) {
      console.error("GitHub API error:", err);
      if (err.response) {
        setError(`GitHub Error: ${err.response.status} - ${err.response.data.message}`);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl p-6 bg-gray-800 rounded-lg shadow-lg mx-auto mt-8">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Search by username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Filter by location (optional)..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="mt-4 text-red-400 font-semibold text-center">{error}</p>}

      {/* Results */}
      {users.length > 0 && (
        <ul className="mt-6 space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-bold hover:underline"
                >
                  {user.login}
                </a>
                {user.location && (
                  <p className="text-gray-300 text-sm">📍 {user.location}</p>
                )}
                <p className="text-gray-400 text-sm">
                  Repos: {user.public_repos ?? "N/A"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
