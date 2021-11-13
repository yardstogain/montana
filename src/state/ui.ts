import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
  currentWeek: number;
}

const initialState: UIState = {
  currentWeek: 7,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setCurrentWeek: (state, action: PayloadAction<number>) => {
      state.currentWeek = action.payload;
    },
  },
});

export const { setCurrentWeek } = uiSlice.actions;

export default uiSlice.reducer;
