import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "./systemStore";

export default configureStore({
  reducer: {
    systemStore: systemReducer,
  },
});
