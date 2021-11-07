import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Ladder from "../screens/Ladder";
import Picks from "../screens/Picks";
import Profile from "../screens/Profile";
import { View } from "react-native";

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { theme } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors?.primary,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: theme.colors?.grey0,
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              borderTopColor: "red",
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarAccessibilityLabel: "Profile Tab",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              color={focused ? theme.colors?.primary : theme.colors?.grey5}
              name="person"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarAccessibilityLabel: "Home Tab",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              color={focused ? theme.colors?.primary : theme.colors?.grey5}
              name="newspaper"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Picks"
        component={Picks}
        options={{
          tabBarLabel: "Picks",
          tabBarAccessibilityLabel: "Picks Tab",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              color={focused ? theme.colors?.primary : theme.colors?.grey5}
              name="american-football"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Ladder"
        component={Ladder}
        options={{
          tabBarLabel: "Ladder",
          tabBarAccessibilityLabel: "Ladder Tab",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              color={focused ? theme.colors?.primary : theme.colors?.grey5}
              name="md-list"
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
