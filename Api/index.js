import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const getDashboardData = async (url) => {
  try {
    const res = await axios.get(`${BASE_URL}/${url}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return { status: "error" };
  }
};

const getTeamData = async (team) => {
  try {
    const res = await axios.get(`${BASE_URL}/teams/${team}`);
    return res.data;
  } catch (error) {
    return { status: "error" };
  }
};

export { getDashboardData, getTeamData };
