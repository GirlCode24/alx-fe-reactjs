import { useState } from "react";
import axios from "axios";

export default function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query) return;

    try {
      // fetch user info
      const userRes = await axios.get(`https://api.github.com/users/${query}`);
      setUser(userRes.data);

      // fetch repos
      const repoRes = await axios.get(`https://api.github.com/users/${query}/repos`);
      setRepos(repoRes.data);
    } catch (err) {
      console.error(err);
      setUser(null);
      setRepos([]);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub user..."
          className="border rounded px-3 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {/* Conditional rendering with && */}
      {user && (
        <div className="mt-6 p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{user.login}</h2>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full my-2"
          />
          <p>{user.bio}</p>
        </div>
      )}

      {/* Using .map() */}
      {repos.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Repositories:</h3>
          <ul className="list-disc pl-6">
            {repos.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
