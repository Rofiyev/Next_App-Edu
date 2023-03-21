import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

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
    const res = await axios.get(`${BASE_URL}/employees/${team}`, {});
    console.log(res);
    return res.data;
  } catch (error) {
    return [];
  }
};

export { getDashboardData, getTeamData };
