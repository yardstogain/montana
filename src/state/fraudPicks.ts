import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeamName } from "../types";

export interface FraudPicksState {
  wager: number;
  selectedTeams: TeamName[];
}

const initialState: FraudPicksState = {
  wager: 0,
  selectedTeams: [],
};

const selectionCap = 3;

export const fraudPicksSlice = createSlice({
  name: "fraudPicks",
  initialState,
  reducers: {
    addTeam: (
      state,
      action: PayloadAction<{ name: TeamName; power: number }>
    ) => {
      if (state.selectedTeams.length < selectionCap) {
        state.selectedTeams.push(action.payload.name);
        state.wager += action.payload.power;
      }
    },
    removeTeam: (
      state,
      action: PayloadAction<{ name: TeamName; power: number }>
    ) => {
      state.selectedTeams = state.selectedTeams.filter(
        (name) => name !== action.payload.name
      );
      state.wager -= action.payload.power;
    },
  },
});

export const { addTeam, removeTeam } = fraudPicksSlice.actions;

export default fraudPicksSlice.reducer;
