import { createSlice } from "@reduxjs/toolkit";

// 브라우저 설정따라 자동으로 변경되는 하는 기능 잠시 보류됨됨
// const userLang = navigator.language || navigator.languages[0];
// const translate = {
//   en: "ENG",
//   ko: "KOR",
//   ja: "JPN",
//   vi: "VNM",
// };

// 현재 기본 설정 영어
const initialState = {
  ver: sessionStorage.getItem("lang") || "ENG",
};

const lanSlice = createSlice({
  name: "lan",
  initialState,
  reducers: {
    updateLan: (state, action) => {
      state.ver = action.payload;
      sessionStorage.setItem("lang", state.ver);
    },
  },
});

export const { updateLan } = lanSlice.actions;
export default lanSlice.reducer;
