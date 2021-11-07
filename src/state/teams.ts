import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type SportsDataTeam = {
  SeasonType: number;
  Season: number;
  Conference: string;
  Division: string;
  Team: string;
  Name: string;
  Wins: number;
  Losses: number;
  Ties: number;
  Percentage: number;
  PointsFor: number;
  PointsAgainst: number;
  NetPoints: number;
  Touchdowns: number;
  DivisionWins: number;
  DivisionLosses: number;
  ConferenceWins: number;
  ConferenceLosses: number;
  TeamID: number;
  DivisionTies: number;
  ConferenceTies: number;
  GlobalTeamID: number;
  DivisionRank: number;
  ConferenceRank: number;
};
// https://api.sportsdata.io/v3/nfl/scores/json/Standings/
export const teamsApi = createApi({
  reducerPath: "teamsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.sportsdata.io/v3/nfl/scores/json",
    prepareHeaders: (headers) => {
      headers.set(
        "Ocp-Apim-Subscription-Key",
        "1d9918cbd0f544668d48c3045735c308"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTeams: builder.query<SportsDataTeam[], void>({
      query: () => "/ScoresByWeek/2021/9",
    }),
    getStandings: builder.query<SportsDataTeam[], void>({
      query: () => "/Standings/2021",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTeamsQuery, useGetStandingsQuery } = teamsApi;
