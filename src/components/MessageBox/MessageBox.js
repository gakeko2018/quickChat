import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors, margin, padding } from "../../styles/base";
import PropTypes from "prop-types";

const MessageBox = ({ username, message }) => {
  const {
    id,
    text,
    user: { avatarUrl, name }
  } = message;
  return (
    <View style={username === name ? styles.userChatBox : styles.chatBox}>
      <View style={styles.avatarBox}>
        <Image source={{ uri: avatarUrl }} style={styles.avatarImage} />
      </View>
      <Text
        style={
          username === name
            ? styles.userMessageBodyText
            : styles.messageBodyText
        }
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userChatBox: {
    minWidth: "100%",
    flexDirection: "row-reverse",
    marginBottom: margin.md
  },
  chatBox: {
    minWidth: "100%",
    flexDirection: "row",
    marginBottom: margin.md
  },
  avatarBox: {
    height: 40,
    width: 40
  },
  avatarImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 20
  },
  messageBodyText: {
    backgroundColor: colors.tertiaryBackground,
    borderRadius: 10,
    margin: margin.sm,
    padding: padding.sm,
    maxWidth: "60%",
    overflow: "hidden",
    color: colors.primaryFontColor
  },
  userMessageBodyText: {
    backgroundColor: colors.secondaryFontColor,
    color: colors.primaryFontColor,
    borderRadius: 10,
    margin: margin.sm,
    padding: padding.sm,
    maxWidth: "60%",
    overflow: "hidden"
  }
});

MessageBox.propTypes = {
  username: PropTypes.string,
  message: PropTypes.object
};

export default MessageBox;
