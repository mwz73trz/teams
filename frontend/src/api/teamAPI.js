import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const teamAPI = {};

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    console.log("RESPONSE:", response);
    console.log("RESPONSE DATA:", response.data);
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

teamAPI.getTeams = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}teams/`));
};

teamAPI.getTeamById = async (teamId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}teams/${teamId}/`));
};

export default teamAPI;
