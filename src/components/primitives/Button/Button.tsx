import React from "react";
import {
  useTheme,
  Button as BaseButton,
  ButtonProps,
} from "react-native-elements";

function Button(props: ButtonProps) {
  return <BaseButton {...props} />;
}

export { Button };
