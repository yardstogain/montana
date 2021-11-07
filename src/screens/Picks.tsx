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
import { useGetStandingsQuery, useGetTeamsQuery } from "../state/teams";

export default function ({
  navigation,
}: StackScreenProps<MainTabsParamList, "Picks">) {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  const wager = useSelector((state: RootState) => state.fraudPicks.wager);
  const selectedTeams = useSelector(
    (state: RootState) => state.fraudPicks.selectedTeams
  );

  const { data: detailedData, isLoading: detailedLoading } = useGetTeamsQuery();
  const { data: teamsData, isLoading: teamsLoading } = useGetStandingsQuery();

  const teams = teamsData?.map((team) => ({
    ...team,
    ...detailedData?.find(
      (search) =>
        search.GlobalAwayTeamID === team.GlobalTeamID ||
        search.GlobalHomeTeamID === team.GlobalTeamID
    ),
  }));

  console.log("teamsData", teamsData);

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
        {(teamsLoading || detailedLoading) && <Text>Loading?</Text>}
        <View>
          {teams
            // ?.sort((a, b) => b.team.power - a.team.power)
            ?.map((current, index) => {
              const { Team, Touchdowns, Wins, Losses } = current;
              const power = Touchdowns;
              const team = {
                name: Team.toLowerCase(),
                wins: Wins,
                losses: Losses,
                power,
              };

              const againstName =
                current.GlobalTeamID === current.GlobalHomeTeamID
                  ? current.AwayTeam?.toLowerCase()
                  : current.HomeTeam?.toLowerCase();

              const againstTeam = teamsData?.find(
                (search) => search.Team.toLowerCase() === againstName
              );

              const against = {
                name: againstName || "",
                wins: againstTeam?.Wins || 22,
                losses: againstTeam?.Losses || 22,
                power: 32,
              };

              return (
                <TouchableOpacity
                  key={Team.toLowerCase()}
                  onPress={() => {
                    selectedTeams.includes(Team.toLowerCase())
                      ? dispatch(
                          removeTeam({ name: Team.toLowerCase(), power })
                        )
                      : dispatch(addTeam({ name: Team.toLowerCase(), power }));
                  }}
                >
                  <FraudPick
                    team={team}
                    against={against}
                    rank={index + 1}
                    selected={selectedTeams.includes(Team.toLowerCase())}
                  />
                </TouchableOpacity>
              );
            })}
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
