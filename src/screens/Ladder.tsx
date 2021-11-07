import React, { useRef } from "react";
import { View } from "react-native";
import { MainTabsParamList } from "../types/navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { Card, Layout, Text } from "../components";
import { Tab, TabView, useTheme } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { RankItem } from "../components/elements";

const image = {
  uri: "https://meshmujhotcuowdzbiup.supabase.in/storage/v1/object/public/images/logos/nfl.png",
};

const mockTeams = [
  {
    name: "Regin of Error",
    points: 412,
    image,
  },
  {
    name: "Regin of Errsor",
    points: 1242.82,
    image,
  },
  {
    name: "Redgin of Error",
    points: 782.1,
    image,
  },
  {
    name: "Regin of Error",
    points: 412,
    image,
  },
  {
    name: "Regin of Errsor",
    points: 1242.82,
    image,
  },
  {
    name: "Redgin of Error",
    points: 782.1,
    image,
  },
];

export default function ({
  navigation,
}: StackScreenProps<MainTabsParamList, "Ladder">) {
  const { theme } = useTheme();
  const [index, setIndex] = React.useState(0);
  const svRef = useRef();

  const tabStyles = {
    containerStyle: { backgroundColor: "transparent" },
    titleStyle: {
      fontFamily: "Lato Black",
      color: theme.colors?.text,
      textTransform: "none",
    },
  };

  return (
    <Layout>
      <Tab
        value={index}
        onChange={(index) => {
          setIndex(index);
          svRef.current?.scrollTo({ y: 0, animated: false });
        }}
        style={{ marginBottom: 16 }}
        indicatorStyle={{
          backgroundColor: theme.colors?.info,
          height: 3,
          borderRadius: 8,
        }}
      >
        <Tab.Item title="Standings" {...tabStyles} />
        <Tab.Item title="Weekly" {...tabStyles} />
      </Tab>

      <ScrollView ref={svRef}>
        <TabView value={index} onChange={setIndex}>
          <TabView.Item style={{ width: "100%" }}>
            <View style={{ marginVertical: 16 }}>
              {mockTeams
                .sort((a, b) => b.points - a.points)
                .map(({ name, points, image }, index) => (
                  <RankItem
                    key={name}
                    rank={index + 1}
                    name={name}
                    points={points}
                    image={image}
                  />
                ))}
            </View>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <View>
              <Text>Heyp</Text>
            </View>
          </TabView.Item>
        </TabView>
      </ScrollView>
    </Layout>
  );
}
