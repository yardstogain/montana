import React from "react";
import { useTheme, Text as BaseText, TextProps } from "react-native-elements";

function Text(props: TextProps) {
  return <BaseText {...props} />;
}

function TextLink(props: TextProps) {
  const { theme } = useTheme();
  return (
    <BaseText
      style={{ color: theme.colors?.primary, fontFamily: "Lato Bold" }}
      {...props}
    />
  );
}

export { Text, TextLink };
