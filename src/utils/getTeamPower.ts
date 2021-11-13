import { TeamSeasonStats } from "../types/sports-data";

function getTeamPower(team: TeamSeasonStats): number {
  const {
    Score,
    OpponentScore,
    PointSpread,
    RedZonePercentage,
    OpponentRedZonePercentage,
    TurnoverDifferential,
    FirstDowns,
    OpponentFirstDowns,
    Touchdowns,
    OpponentTouchdowns,
    Games,
  } = team;
  // Differentials per game
  const pointDifferential = (Score - OpponentScore) / Games;
  const redZonePercentageDifferential =
    (RedZonePercentage - OpponentRedZonePercentage) / Games;
  const firstDownDifferential = (FirstDowns - OpponentFirstDowns) / Games;
  const touchdownDifferential = (Touchdowns - OpponentTouchdowns) / Games;

  return (
    1 * pointDifferential +
    0.6 * redZonePercentageDifferential +
    0.5 * firstDownDifferential +
    0.4 * touchdownDifferential +
    0.5 * PointSpread +
    0.5 * TurnoverDifferential
  );
}

export { getTeamPower };
