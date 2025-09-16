import axios from "axios";

export const fetchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = username || "";
    if (location) query += +location:${location};
    if (minRepos) query += +repos:>=${minRepos};

    const url = https://api.github.com/search/users?q=${query};
    const response = await axios.get(url);
    return response.data.items; 
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};