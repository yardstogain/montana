import React from "react";
import { StyleProp, View, ViewStyle, Image } from "react-native";
import { useTheme } from "react-native-elements";
import { Logo, Text } from "../../primitives";
import { round } from "../../../utils";
import { TeamSeasonStats, WeeklyScore } from "../../../types/sports-data";

type FraudPickProps = {
  team: TeamSeasonStats;
  teamPower: number;
  opposingTeam: TeamSeasonStats;
  opposingTeamPower: number;
  gameDetails: WeeklyScore;
  rank: number;
  selected?: boolean;
  isHomeTeam?: boolean;
};

function FraudPick({
  rank,
  team,
  teamPower,
  opposingTeam,
  opposingTeamPower,
  gameDetails,
  isHomeTeam,
  selected,
}: FraudPickProps) {
  const { theme } = useTheme();

  const powerScoreColor = (score: number) => {
    switch (true) {
      case score <= -7.5:
        return theme.colors?.error;
      case score <= 1:
        return theme.colors?.warning;
      case score <= 5:
        return theme.colors?.mutedSuccess;
      default:
        return theme.colors?.success;
    }
  };

  return (
    <View
      style={{
        backgroundColor: selected
          ? theme.colors?.selectedCard
          : theme.colors?.card,
        marginHorizontal: 16,
        marginBottom: 16,
        padding: 8,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ marginRight: 16 }}>
        <Logo team={team.Team} size={64} />
      </View>
      <View style={{ marginRight: "auto" }}>
        <Text
          style={{
            fontFamily: "Lato Black",
            fontSize: 28,
            color: theme.colors?.text,
          }}
        >
          {team.Team}
        </Text>
        <Text
          style={{
            fontFamily: "Lato Black",
            fontSize: 18,
            color: theme.colors?.mutedText,
          }}
        >
          {isHomeTeam ? "VS. " : "@ "}
          {opposingTeam?.Team}{" "}
          <Text
            style={{
              fontFamily: "Lato Black",
              color: powerScoreColor(opposingTeamPower),
            }}
          >
            {round(opposingTeamPower)}
          </Text>
        </Text>
      </View>
      <View style={{ width: 110, marginRight: 8 }}>
        <Text
          h1
          style={{ color: powerScoreColor(teamPower), textAlign: "right" }}
        >
          {round(teamPower)}
        </Text>
      </View>
    </View>
  );
}

export { FraudPick };
