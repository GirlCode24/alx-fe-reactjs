import { useEffect, useState } from "react";

export default function Results({ users }) {
  const [detailedUsers, setDetailedUsers] = useState([]);

  useEffect(() => {
    async function fetchDetails() {
      const details = await Promise.all(
        users.map(async (user) => {
          const res = await fetch(user.url); // e.g. https://api.github.com/users/username
          return await res.json();
        })
      );
      setDetailedUsers(details);
    }
    if (users.length > 0) fetchDetails();
  }, [users]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {detailedUsers.map((user) => (
        <div key={user.id} className="p-4 border rounded shadow hover:shadow-lg">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-16 h-16 rounded-full mb-2"
          />
          <h2 className="text-lg font-semibold">{user.login}</h2>
          <p>📍 {user.location || "No location"}</p>
          <p>📦 {user.public_repos} repos</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
}
