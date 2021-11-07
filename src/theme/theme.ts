import {
  green,
  sage,
  teal,
  greenDark,
  sageDark,
  tealDark,
  red,
  amber,
  amberDark,
  redDark,
  blue,
  blueDark,
} from "./colors";
import { FullTheme } from "react-native-elements";
// www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
// 1 App background
// 2 Subtle background
// 3 UI element background
// 4 Hovered UI element background
// 5 Active / Selected UI element background
// 6 Subtle borders and separators
// 7 UI element border and focus rings
// 8 Hovered UI element border
// 9 Solid backgrounds
// 10 Hovered solid backgrounds
// 11 Low-contrast text
// 12 High-contrast text

export const Theme: Partial<FullTheme> = {};

export const DarkTheme: Partial<FullTheme> = {
  colors: {
    primary: tealDark.teal9,
    white: sageDark.sage12,
    greyOutline: sageDark.sage6,
    info: blueDark.blue11,
    success: tealDark.teal9,
    error: redDark.red9,
    warning: amberDark.amber9,
    card: sageDark.sage4,
    selectedCard: blueDark.blue5,
    gold: amberDark.amber9,
    silver: sageDark.sage10,
    bronze: amberDark.amber6,
    grey0: sageDark.sage1,
    grey1: sageDark.sage1,
    grey2: sageDark.sage2,
    grey3: sageDark.sage3,
    grey4: sageDark.sage4,
    grey5: sageDark.sage10,
    text: sageDark.sage12,
    mutedText: sageDark.sage11,
  },
  Button: {
    titleStyle: {
      fontFamily: "Lato Black",
      textTransform: "uppercase",
      fontSize: 14,
    },
    buttonStyle: {
      backgroundColor: tealDark.teal9,
      borderRadius: 8,
      paddingVertical: 12,
    },
  },
  Card: {
    containerStyle: {
      backgroundColor: sageDark.sage2,
      borderWidth: 0,
      borderRadius: 8,
    },
  },
  Input: {
    placeholderTextColor: sageDark.sage10,
    inputStyle: {
      color: sageDark.sage12,
      padding: 16,
      paddingLeft: 8,
      fontFamily: "Lato Regular",
    },
    inputContainerStyle: {
      backgroundColor: sageDark.sage3,
      borderRadius: 8,
      borderBottomWidth: 0,
      paddingLeft: 16,
      marginHorizontal: 0,
    },
    leftIcon: {
      color: sageDark.sage11,
    },
    labelStyle: {
      fontFamily: "Lato Bold",
      color: sageDark.sage11,
      marginBottom: 8,
    },
    containerStyle: {
      paddingHorizontal: 0,
    },
  },
  Text: {
    h1Style: {
      fontFamily: "Lato Black",
      fontSize: 36,
    },
    h2Style: {
      fontFamily: "Lato Black",
      fontSize: 32,
    },
    h3Style: {
      fontFamily: "Lato Black",
      fontSize: 28,
    },
    h4Style: {
      fontFamily: "Lato Black",
      fontSize: 24,
    },
  },
  FAB: {
    color: blueDark.blue9,
  },
};
