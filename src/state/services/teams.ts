import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Standings,
  CurrentWeek,
  WeeklyScore,
  TeamSeasonStats,
} from "../../types/sports-data";

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
    getWeeklyScores: builder.query<WeeklyScore[], CurrentWeek>({
      query: (week) => `/ScoresByWeek/2021/${week}`,
    }),
    getTeamSeasonStats: builder.query<TeamSeasonStats[], void>({
      query: () => "/TeamSeasonStats/2021",
    }),
    getCurrentWeek: builder.query<CurrentWeek, void>({
      query: () => "/CurrentWeek",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetWeeklyScoresQuery,
  useGetTeamSeasonStatsQuery,
  useGetCurrentWeekQuery,
} = teamsApi;
