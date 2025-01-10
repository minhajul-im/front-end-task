import { configureStore } from "@reduxjs/toolkit";
import ReducerMOdal from "./modal-slice";

export const store = configureStore({
  reducer: {
    modal: ReducerMOdal,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
