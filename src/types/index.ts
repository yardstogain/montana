export type Team =
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

export type FraudTeam = {
  name: Team;
  wins: number;
  losses: number;
  power: number;
};
