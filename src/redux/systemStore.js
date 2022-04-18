import { createSlice } from "@reduxjs/toolkit";
import { defaultLanguage } from "src/utils/const";
import { saveSessionStorage } from "src/utils/common";

export const systemStoreSlice = createSlice({
  name: "systemStore",
  initialState: {
    language: defaultLanguage,
    isScreenFull: false,
    componentSize: "default",
  },
  reducers: {
    switchLanguage: (state, action) => {
      saveSessionStorage("template_locale", action.payload);
      state.language = action.payload;
    },
    toggleScreen: (state, action) => {
      state.isScreenFull = action.payload;
    },
    switchComponentSize: (state, action) => {
      state.componentSize = action.payload;
    },
  },
});

export const { switchLanguage, toggleScreen } = systemStoreSlice.actions;

export default systemStoreSlice.reducer;
