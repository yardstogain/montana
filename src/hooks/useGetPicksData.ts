import { useSelector } from "react-redux";
import { RootState } from "../state";
import {
  useGetWeeklyScoresQuery,
  useGetTeamSeasonStatsQuery,
} from "../state/services/teams";
import { TeamName } from "../types";
import { Standings, TeamSeasonStats, WeeklyScore } from "../types/sports-data";
import { getTeamPower } from "../utils";

function useGetPicksData() {
  const currentWeek = useSelector((state: RootState) => state.ui.currentWeek);

  const { data: weeklyScores, isLoading: weeklyScoresLoading } =
    useGetWeeklyScoresQuery(currentWeek);
  const { data: seasonStats, isLoading: seasonStatsLoading } =
    useGetTeamSeasonStatsQuery();

  const weeklyMap: Partial<Record<TeamName, WeeklyScore>> = {};
  weeklyScores?.forEach((game) => {
    weeklyMap[game.AwayTeam] = game;
    weeklyMap[game.HomeTeam] = game;
  });

  const seasonStatsMap: Partial<Record<TeamName, TeamSeasonStats>> = {};
  seasonStats?.forEach((team) => {
    seasonStatsMap[team.Team] = team;
  });

  const teams = seasonStats
    // filter for Byes
    ?.filter((team) => weeklyMap[team.Team])
    ?.map((team) => {
      const gameDetails = weeklyMap[team.Team] as WeeklyScore;
      const isHomeTeam = gameDetails.HomeTeam === team.Team;
      const opposingTeam = isHomeTeam
        ? seasonStatsMap[gameDetails.AwayTeam]
        : seasonStatsMap[gameDetails.HomeTeam];

      const teamPower = getTeamPower(team);
      const opposingTeamPower = getTeamPower(opposingTeam);

      return {
        isHomeTeam,
        team,
        teamPower,
        gameDetails,
        opposingTeam,
        opposingTeamPower,
      };
    })
    .sort((a, b) => b.teamPower - a.teamPower);

  return {
    data: teams,
    loading: weeklyScoresLoading || seasonStatsLoading,
  };
}

export { useGetPicksData };
