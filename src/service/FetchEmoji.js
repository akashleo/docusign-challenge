import axios from "axios";
import { selector } from "recoil";
import { atom } from "recoil";
const apiConfig = axios.create({
  baseURL: `https://emojihub.yurace.pro/api/all/`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
// recoil/atoms.js

export const emojiDataState = atom({
  key: "emojiDataState",
  default: [],
});
export const emojiCategory = atom({
  key: "emojiCategory",
  default: [],
});

export const emojiGroup = atom({
  key: "emojiGroup",
  default: [],
});

export const fetchEmojiData = selector({
  key: "fetchEmojiData",
  get: async () => {
    try {
      const response = await apiConfig.get("/");
      return response.data; // Assuming the response is an array of emoji data
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
});

