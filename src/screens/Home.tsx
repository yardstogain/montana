import React from "react";
import { View, Linking } from "react-native";
import { MainTabsParamList } from "../types/navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { supabase } from "../initSupabase";
import { Layout, Button, Text } from "../components";
import { Ionicons } from "@expo/vector-icons";

export default function ({
  navigation,
}: StackScreenProps<MainTabsParamList, "Home">) {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>This is the Home tab</Text>
        <Button
          title="open modal"
          onPress={() => {
            navigation.navigate("FraudListInfoModal");
          }}
        />
      </View>
    </Layout>
  );
}
