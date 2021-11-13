import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { MainTabsParamList } from "../types/navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { Layout, Text, MutedText, Button, Logo } from "../components";
import { useTheme, Header } from "react-native-elements";
import { FraudPick } from "../components/elements";
import { round } from "../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state";
import { addTeam, removeTeam } from "../state/fraudPicks";
import { useGetPicksData } from "../hooks/useGetPicksData";

export default function ({
  navigation,
}: StackScreenProps<MainTabsParamList, "Picks">) {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  const wager = useSelector((state: RootState) => state.fraudPicks.wager);
  const selectedTeams = useSelector(
    (state: RootState) => state.fraudPicks.selectedTeams
  );
  const currentWeek = useSelector((state: RootState) => state.ui.currentWeek);

  const { data, loading } = useGetPicksData();

  const submitPicks = () => {
    console.log({ week: 9, teams: selectedTeams, totalWager: wager });
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
        {loading && <Text>Loading?</Text>}
        <View>
          {data
            // return {
            // 	team,
            // 	teamPower,
            // 	gameDetails,
            // 	opposingTeam,
            // 	opposingTeamPower,
            //   };
            ?.map(
              (
                {
                  team,
                  teamPower,
                  gameDetails,
                  opposingTeam,
                  opposingTeamPower,
                  isHomeTeam,
                },
                index
              ) => (
                <TouchableOpacity
                  key={team.Team}
                  onPress={() => {
                    selectedTeams.includes(team.Team)
                      ? dispatch(
                          removeTeam({
                            name: team.Team,
                            power: teamPower,
                          })
                        )
                      : dispatch(
                          addTeam({
                            name: team.Team,
                            power: teamPower,
                          })
                        );
                  }}
                >
                  <FraudPick
                    team={team}
                    teamPower={teamPower}
                    opposingTeam={opposingTeam}
                    opposingTeamPower={opposingTeamPower}
                    isHomeTeam={isHomeTeam}
                    gameDetails={gameDetails}
                    rank={index + 1}
                    selected={selectedTeams.includes(team.Team)}
                  />
                </TouchableOpacity>
              )
            )}
        </View>
      </ScrollView>
      {selectedTeams.length > 0 && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: theme.colors?.grey2,
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
            disabled={wager < 0 || selectedTeams.length !== 3}
            onPress={submitPicks}
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
