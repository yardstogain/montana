import { StyleProp, TextStyle } from "react-native";

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module "react-native-elements/dist/config/colors" {
  export interface Colors {
    mutedText: string;
    mutedSuccess: string;
    text: string;
    info: string;
    card: string;
    selectedCard: string;
    gold: string;
    silver: string;
    bronze: string;
  }

  export interface FullTheme {
    colors: RecursivePartial<Colors>;
  }
}

// declare module "react-native-elements/dist/text" {
//   export interface TextProps {
//     mutedStyle: StyleProp<TextStyle>;
//   }

//   export interface FullTheme {
//     Text: Partial<TextProps>;
//   }
// }
