import React from "react";
import { View } from "react-native";
import { MainStackParamList } from "../../types/navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { Layout, MutedText, Text } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../components";
import { FAB, useTheme } from "react-native-elements";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "FraudListInfoModal">) {
  const { theme } = useTheme();
  return (
    <Layout>
      <View style={{ marginHorizontal: 16 }}>
        <Text
          h2
          style={{
            textAlign: "center",
            color: theme.colors?.text,
            marginBottom: 24,
          }}
        >
          What's in a Fraud?
        </Text>
        <View style={{ marginBottom: 24 }}>
          <Text h4>
            <Ionicons name="thumbs-down" size={20} color={theme.colors?.info} />{" "}
            Focus on the negatives
          </Text>
          <Text
            style={{
              color: theme.colors?.mutedText,
              fontSize: 18,
              fontFamily: "Lato Regular",
            }}
          >
            Pick three losers each weeks. The better they are, the more points
            you'll get.
          </Text>
        </View>
        <View style={{ marginBottom: 24 }}>
          <Text h4>
            <Ionicons name="sad" size={20} color={theme.colors?.info} /> Pick
            frauds
          </Text>
          <Text
            style={{
              color: theme.colors?.mutedText,
              fontSize: 18,
              fontFamily: "Lato Regular",
            }}
          >
            Teams are ranked based on how well they've done and how hard their
            season has been. Frauds are good teams you think will lose anyway.
          </Text>
        </View>
        <View style={{ marginBottom: 24 }}>
          <Text h4>
            <Ionicons
              name="checkmark-circle"
              size={20}
              color={theme.colors?.info}
            />{" "}
            Be right
          </Text>
          <Text
            style={{
              color: theme.colors?.mutedText,
              fontSize: 18,
              fontFamily: "Lato Regular",
            }}
          >
            You'll get more points the more frauds you're right about. Going
            0-fer will get you zero.
          </Text>
        </View>
        <View style={{ marginBottom: 24 }}>
          <Text h4>
            <Ionicons name="wine" size={20} color={theme.colors?.info} /> Don't
            be stingy
          </Text>
          <Text
            style={{
              color: theme.colors?.mutedText,
              fontSize: 18,
              fontFamily: "Lato Regular",
            }}
          >
            The higher your wager, the more points you stand to earn.
          </Text>
        </View>
      </View>
      <FAB
        placement="right"
        icon={{ type: "ionicons", name: "close", color: theme.colors?.text }}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Layout>
  );
}
