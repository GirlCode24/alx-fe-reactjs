import axios from "axios";

const BASE_URL = "https://api.github.com";

// Fetch a single user's details
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("fetchUserData failed:", error);
    return null; // ⬅️ safely return null
  }
}

// Search users by username, location, and min repos
export async function searchUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  try {
    const response = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`
    );
    return response.data.items;
  } catch (error) {
    console.error("searchUsers failed:", error);
    return []; 
  }
}
