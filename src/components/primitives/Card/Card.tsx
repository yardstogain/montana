import React, { ReactChild } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-elements";

type CardProps = {
  children: ReactChild;
};

function Card({ children }: CardProps) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors?.card,
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 8,
      }}
    >
      {children}
    </View>
  );
}

export { Card };
