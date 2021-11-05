import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";

import Home from "../screens/Home";
import Ladder from "../screens/Ladder";
import Picks from "../screens/Picks";

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 1,
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#fff",
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon="md-home" />
          ),
        }}
      />
      <Tabs.Screen
        name="Picks"
        component={Picks}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Picks" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon="american-football" />
          ),
        }}
      />
      <Tabs.Screen
        name="Ladder"
        component={Ladder}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Ladder" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon="md-list" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
