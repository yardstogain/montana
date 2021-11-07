import React from "react";
import { useTheme, Text as BaseText, TextProps } from "react-native-elements";

function Text(props: TextProps) {
  const { theme } = useTheme();

  const baseStyles = {
    color: theme.colors?.text,
    fontFamily: "Lato Regular",
    fontSize: 18,
  };

  return <BaseText style={baseStyles} {...props} />;
}

function TextLink(props: TextProps) {
  const { theme } = useTheme();

  const baseStyles = {
    color: theme.colors?.primary,
    fontFamily: "Lato Bold",
  };

  return <BaseText style={baseStyles} {...props} />;
}

function MutedText(props: TextProps) {
  const { theme } = useTheme();

  const baseStyles = {
    fontFamily: "Lato Regular",
    color: theme.colors?.mutedText,
    fontSize: 20,
    textAlign: "center",
  };

  return <BaseText style={baseStyles} {...props} />;
}

export { Text, TextLink, MutedText };
