import React from "react";
import { Image } from "react-native";
import { Team } from "../../../types";

const imageBucket =
  "https://meshmujhotcuowdzbiup.supabase.in/storage/v1/object/public/images";

type LogoProps = {
  team: Team;
  size?: number;
};

function Logo({ team = "nfl", size = 48 }: LogoProps) {
  const style = {
    width: size,
    height: size,
  };

  return (
    <Image
      source={{
        uri: `${imageBucket}/logos/${team}.png`,
      }}
      style={style}
      resizeMode="contain"
    />
  );
}

export { Logo };
