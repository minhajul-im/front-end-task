import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalType {
  isOpen: "REGISTER" | "LOGIN" | "";
}

const initialState: ModalType = {
  isOpen: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state: ModalType,
      action: PayloadAction<"REGISTER" | "LOGIN">
    ) => {
      state.isOpen = action.payload;
    },
    closeModal: (state: ModalType) => {
      state.isOpen = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
