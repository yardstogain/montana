import React from "react";
import { View, Image, Animated, Easing } from "react-native";
import { useTheme } from "react-native-elements";
import { Layout } from "../../components";

type LoaderProps = {
  size?: number;
};
function Loader({ size = 64 }: LoaderProps) {
  const { theme } = useTheme();
  const [rotateAnimation, setRotateAnimated] = React.useState(
    new Animated.Value(0)
  );

  Animated.loop(
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: false,
    })
  ).start();

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={{
        width: size,
        height: size,
        borderRadius: size,
        borderWidth: 4,
        borderColor: theme.colors?.primary,
        borderRightColor: "transparent",
        transform: [{ rotate: interpolateRotating }],
      }}
    />
  );
}

export default function () {
  return (
    <Layout>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 24,
          flex: 1,
        }}
      >
        <Image
          style={{ resizeMode: "contain", width: "100%" }}
          source={require("../../../assets/images/logo-with-text.png")}
        />
        <Loader />
      </View>
    </Layout>
  );
}
