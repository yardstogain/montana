import React from "react";
import { Image } from "react-native";
import { TeamName } from "../../../types";

const imageBucket =
  "https://meshmujhotcuowdzbiup.supabase.in/storage/v1/object/public/images";

type LogoProps = {
  team: TeamName;
  size?: number;
};

function Logo({ team = "NFL", size = 48 }: LogoProps) {
  const style = {
    width: size,
    height: size,
  };

  return (
    <Image
      source={{
        uri: `${imageBucket}/logos/${team.toLowerCase()}.png`,
      }}
      style={style}
      resizeMode="contain"
    />
  );
}

export { Logo };
