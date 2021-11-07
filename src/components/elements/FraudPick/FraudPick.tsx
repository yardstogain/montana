import React from "react";
import { StyleProp, View, ViewStyle, Image } from "react-native";
import { useTheme } from "react-native-elements";
import { Logo, Text } from "../../primitives";
import { round } from "../../../utils";

type Team = {
  name: string;
  wins: number;
  losses: number;
  power: number;
};

type FraudPickProps = {
  rank: number;
  team: Team;
  against: Team;
  selected?: boolean;
};

function FraudPick({ rank, team, against, selected }: FraudPickProps) {
  const { theme } = useTheme();

  const powerScoreColor = (score: number) => {
    if (score < -10) {
      return theme.colors?.error;
    } else if (score < 0) {
      return theme.colors?.warning;
    }
    return theme.colors?.success;
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
        <Logo team={team.name} size={64} />
      </View>
      <View style={{ marginRight: "auto" }}>
        <Text
          style={{
            fontFamily: "Lato Black",
            fontSize: 22,
            color: theme.colors?.text,
          }}
        >
          {team.name.toUpperCase()} ({team.wins}-{team.losses})
        </Text>
        <Text
          style={{
            fontFamily: "Lato Black",
            fontSize: 14,
            color: theme.colors?.mutedText,
          }}
        >
          VS. {against.name.toUpperCase()} ({against.wins}-{against.losses})
        </Text>
      </View>
      <View style={{ width: 100, marginRight: 8 }}>
        <Text
          h1
          style={{ color: powerScoreColor(team.power), textAlign: "right" }}
        >
          {round(team.power)}
        </Text>
      </View>
    </View>
  );
}

export { FraudPick };
