import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { MainTabsParamList } from "../types/navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { Layout, Text, MutedText, Button, Logo } from "../components";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, Header } from "react-native-elements";
import { FraudPick } from "../components/elements";
import { round } from "../utils";
import { TouchableOpacity } from "react-native-gesture-handler";

const mockData = [
  {
    team: {
      name: "ari",
      wins: 7,
      losses: 0,
      power: 24.73,
    },
    against: {
      name: "sf",
      wins: 5,
      losses: 2,
      power: 8.2,
    },
  },
  {
    against: {
      name: "jax",
      wins: 7,
      losses: 0,
      power: 32.2,
    },
    team: {
      name: "buf",
      wins: 5,
      losses: 2,
      power: 8.2,
    },
  },
  {
    team: {
      name: "dal",
      wins: 0,
      losses: 99,
      power: -5.4,
    },
    against: {
      name: "den",
      wins: 2,
      losses: 5,
      power: 10,
    },
  },
  {
    team: {
      name: "lar",
      wins: 7,
      losses: 0,
      power: 32.2,
    },
    against: {
      name: "ten",
      wins: 5,
      losses: 2,
      power: 8.2,
    },
  },
  {
    against: {
      name: "atl",
      wins: 7,
      losses: 0,
      power: 32.2,
    },
    team: {
      name: "no",
      wins: 5,
      losses: 2,
      power: 8.2,
    },
  },
];

export default function ({
  navigation,
}: StackScreenProps<MainTabsParamList, "Picks">) {
  const { theme } = useTheme();
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [wager, setWager] = useState(0);

  const addSelectedTeam = (team) => {
    if (selectedTeams.length < 3) {
      setSelectedTeams([...selectedTeams, team.name]);
      setWager(wager + team.power);
    }
  };

  const removeFromSelected = (team) => {
    const newTeams = selectedTeams.filter((name) => name !== team.name);
    setSelectedTeams(newTeams);
    setWager(wager - team.power);
  };

  return (
    <Layout>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginTop: 16,
            marginBottom: 32,
          }}
        >
          <Text h4>Select your Fraud List</Text>
          <MutedText>
            Pick three teams that are going to lose this week. Your wager must
            be above zero.
          </MutedText>
        </View>
        <View>
          {mockData
            .sort((a, b) => b.team.power - a.team.power)
            .map(({ team, against }, index) => (
              <TouchableOpacity
                onPress={() => {
                  selectedTeams.includes(team.name)
                    ? removeFromSelected(team)
                    : addSelectedTeam(team);
                }}
              >
                <FraudPick
                  key={team.name}
                  team={team}
                  against={against}
                  rank={index + 1}
                  selected={selectedTeams.includes(team.name)}
                />
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
      {selectedTeams.length > 0 && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: theme.colors?.card,
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ marginRight: "auto" }}>
            <Text
              style={{
                fontFamily: "Lato Black",
                textTransform: "uppercase",
                fontSize: 14,
                color: theme.colors?.text,
              }}
            >
              Wager
            </Text>
            <Text
              style={{
                color: wager > 0 ? theme.colors?.success : theme.colors?.error,
                fontFamily: "Lato Black",
                fontSize: 36,
              }}
            >
              {round(wager)}
            </Text>
          </View>
          {selectedTeams.map((team) => (
            <Logo key={team} team={team} size={48} />
          ))}
          <Button
            title="Lock In"
            disabled={wager < 0}
            buttonStyle={{
              backgroundColor: theme.colors?.error,
              marginLeft: 16,
            }}
            titleStyle={{
              fontSize: 20,
            }}
          />
        </View>
      )}
    </Layout>
  );
}
