import React from "react";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { useTheme } from "react-native-elements";

interface Props extends SafeAreaViewProps {
  backgroundColor?: string;
}

function Layout(props: Props) {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      {...props}
      style={[
        props.style,
        {
          flex: 1,
          backgroundColor: theme.colors?.grey0,
        },
      ]}
    >
      {props.children}
    </SafeAreaView>
  );
}

export { Layout };
