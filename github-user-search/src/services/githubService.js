import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const res = await axios.get(https://api.github.com/users/${username});
    return res.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchAdvancedUsers = async (query) => {
  try {
    const url = https://api.github.com/search/users?q=${query};
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("Error fetching advanced users:", error);
    throw error;
  }
};