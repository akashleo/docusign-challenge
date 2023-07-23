import axios from "axios";
const apiConfig = axios.create({
  baseURL: `https://emojihub.yurace.pro/api/all/`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchEmojiDataByCategory = async (categoryType) => {
  try {
    const response = await apiConfig.get(`category/${categoryType}`);
    return response.data; // Assuming the response is an array of emoji data
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const fetchEmojiDataByGroup = async (groupType) => {
  try {
    const response = await apiConfig.get(`group/${groupType}`);
    return response.data; // Assuming the response is an array of emoji data
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const fetchEmojiData = async () => {
  try {
    const response = await apiConfig.get("/");
    return response.data; // Assuming the response is an array of emoji data
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
