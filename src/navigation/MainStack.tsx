import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FraudListInfo from "../screens/modals/FraudListInfo";
import MainTabs from "./MainTabs";

const MainStack = createStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Group screenOptions={{ presentation: "modal" }}>
        <MainStack.Screen name="FraudListInfoModal" component={FraudListInfo} />
      </MainStack.Group>
    </MainStack.Navigator>
  );
};

export default Main;
