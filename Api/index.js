import axios from "axios";

const BASE_URL = "https://next-app-edu.vercel.app/api";

const getDashboardData = async (url) => {
  try {
    const res = await axios.get(`${BASE_URL}/${url}`, {});
    return res.data;
  } catch (error) {
    return [];
  }
};

const getTeamData = async (team) => {
  try {
    const res = await axios.get(`${BASE_URL}/teams/${team}`, {});
    return res.data;
  } catch (error) {
    return [];
  }
};

export { getDashboardData, getTeamData };
