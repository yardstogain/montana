import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";

const AuthStack = createStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default Auth;
