
import { useState } from "react";

function SearchBar() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
      />
      <input
        type="number"
        placeholder="Min Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
