import { configureStore } from "@reduxjs/toolkit";
import ReducerModal from "./modal-slice";
import ReducerSheet from "./sheet-slice";

export const store = configureStore({
  reducer: {
    modal: ReducerModal,
    sheet: ReducerSheet,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
