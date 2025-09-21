import { useState } from "react";

export default function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100 rounded-lg shadow-md"
    >
      {/* Username */}
      <input
        type="text"
        placeholder="Search by username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border rounded p-2 flex-1"
      />

      {/* Location */}
      <input
        type="text"
        placeholder="Location (e.g., Ghana)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border rounded p-2 flex-1"
      />

      {/* Minimum Repos */}
      <input
        type="number"
        placeholder="Min Repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border rounded p-2 w-32"
      />

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}
