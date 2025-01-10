import { createSlice } from "@reduxjs/toolkit";

interface SheetStateType {
  isOpen: boolean;
}

const initialState: SheetStateType = {
  isOpen: false,
};

const sheetSlice = createSlice({
  name: "sheet",
  initialState,
  reducers: {
    openSheet: (state: SheetStateType) => {
      state.isOpen = true;
    },
    closeSheet: (state: SheetStateType) => {
      state.isOpen = false;
    },
  },
});

export const { openSheet, closeSheet } = sheetSlice.actions;
export default sheetSlice.reducer;
