import axios from "axios";

const SEARCH_USERS_URL = "https://api.github.com/search/users?q=";

export async function searchUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  try {
    const response = await axios.get(
      `${SEARCH_USERS_URL}${encodeURIComponent(query)}`
    );
    return response.data.items;
  } catch (error) {
    console.error("searchUsers failed:", error);
    return [];
  }
}
