import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  View
} from "react-native";
import { colors, margin } from "../../styles/base";

const ArrowButton = ({ text, style, onPress }) => {
  return (
    <View style={[styles.leaveButton, style]}>
      <View style={styles.leaveButtonLeft} />
      <View style={styles.leaveButtonRight}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.leaveButtonText}> {text} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leaveButton: {
    flexDirection: "row"
  },
  leaveButtonLeft: {
    borderRightWidth: 10,
    borderRightColor: colors.tertiaryBackground,
    borderTopWidth: 15,
    borderTopColor: "transparent",
    borderBottomWidth: 15,
    borderBottomColor: "transparent",
    height: 0,
    width: 0,
    left: -10,
    top: 0,
    position: "absolute"
  },
  leaveButtonRight: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.tertiaryBackground,
    height: 30,
    width: 100,
    borderWidth: 1,
    borderColor: colors.tertiaryBackground,
    borderStyle: "solid"
  },
  leaveButtonText: {
    color: colors.primaryFontColor,
    fontSize: 20
  }
});

export default ArrowButton;
