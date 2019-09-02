import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { colors, margin } from "../../styles/base";

const StyledInput = ({ style, placeholder, onChangeText, value }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    textAlign: "center",
    margin: margin.sm,
    borderRadius: 10,
    backgroundColor: colors.primaryBackground,
    color: colors.secondaryFontColor,
    minHeight: 30,
    borderWidth: 1,
    borderColor: colors.tertiaryBackground,
    borderStyle: "solid"
  }
});

export default StyledInput;
