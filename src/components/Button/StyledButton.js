import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, margin } from "../../styles/base";

const StyledButton = ({ text, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}> {text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: margin.sm,
    backgroundColor: colors.tertiaryBackground,
    borderRadius: 10,
    minHeight: 30
  },
  buttonText: {
    fontSize: 20,
    color: colors.primaryFontColor
  }
});

export default StyledButton;
