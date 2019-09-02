import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { colors, margin } from "../../styles/base";
import PropTypes from "prop-types";

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

StyledInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  onChangeText: PropTypes.func
};

export default StyledInput;
