import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

export const colors = {
  primaryBackground: "#F5FCFF",
  secondaryBackground: "#ffd5d5",
  tertiaryBackground: "#ff4893",
  primaryFontColor: "#F5FCFF",
  secondaryFontColor: "#340068"
};

export const padding = {
  sm: 10,
  md: 15,
  lg: 20,
  xl: 30
};

export const margin = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const fontSize = {
  sm: 12,
  md: 18,
  lg: 28
};
