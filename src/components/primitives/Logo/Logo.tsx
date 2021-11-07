import React from "react";
import { Image } from "react-native";
const imageBucket =
  "https://meshmujhotcuowdzbiup.supabase.in/storage/v1/object/public/images";

type Team =
  | "ari"
  | "atl"
  | "bal"
  | "buf"
  | "car"
  | "chi"
  | "cin"
  | "cle"
  | "dal"
  | "den"
  | "det"
  | "gb"
  | "hou"
  | "ind"
  | "jax"
  | "kc"
  | "lac"
  | "lar"
  | "lv"
  | "mia"
  | "min"
  | "ne"
  | "no"
  | "nyg"
  | "nyj"
  | "phi"
  | "pit"
  | "sea"
  | "sf"
  | "tb"
  | "ten"
  | "was";

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
