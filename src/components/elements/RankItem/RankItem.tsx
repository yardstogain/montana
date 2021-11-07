import React from "react";
import { View, ImageSourcePropType } from "react-native";
import { Avatar, useTheme } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { Card, Text } from "../../primitives";

type RankItemProps = {
  rank: number;
  name: string;
  points: number;
  image: ImageSourcePropType;
};

function RankItem({ rank, name, points, image }: RankItemProps) {
  const { theme } = useTheme();

  const medalColor = (rank: number) => {
    switch (rank) {
      case 1:
        return theme.colors?.gold;
      case 2:
        return theme.colors?.silver;
      case 3:
        return theme.colors?.bronze;
      default:
        return theme.colors?.info;
    }
  };
  return (
    <Card>
      <View style={{ flexDirection: "row", padding: 16, alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Lato Black",
            fontSize: 36,
            color: theme.colors?.text,
            marginRight: 8,
          }}
        >
          {rank}
        </Text>
        <Ionicons name="medal-outline" color={medalColor(rank)} size={36} />
        <View style={{ marginRight: "auto", marginLeft: 8 }}>
          <Text
            style={{
              fontFamily: "Lato Black",
              color: theme.colors?.text,
              fontSize: 24,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontFamily: "Lato Black",
              color: theme.colors?.success,
              fontSize: 18,
            }}
          >
            {points}
          </Text>
        </View>
        <Avatar
          rounded
          source={image}
          size={56}
          containerStyle={{ backgroundColor: theme.colors?.grey2 }}
        />
      </View>
    </Card>
  );
}

export { RankItem };
