import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  ListView
} from "react-native";

import {
  getMessages,
  sendMessage,
  logMessage,
  setUsername
} from "./redux/actionCreators";
import { connect } from "react-redux";
import { colors, padding, margin } from "./styles/base";
class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessageText: ""
    };
  }

  componentDidMount() {
    const {
      props: { getMessages }
    } = this;
    getMessages();
  }

  handleButtonPress = () => {
    const {
      state: { newMessageText },
      props: { sendMessage, logMessage, messageList, username }
    } = this;
    const message = {
      id: messageList.length,
      text: newMessageText,
      timestamp: new Date(),
      user: {
        avatarUrl: "https://i.ibb.co/87DD1L0/user.png",
        id: 3,
        name: username
      }
    };
    if (newMessageText) {
      sendMessage(message);
      logMessage(message);
      this.setState({ newMessageText: "" });
    }
  };

  handleLeavePress = () => {
    const {
      props: { setUsername }
    } = this;
    setUsername("");
  };

  handleChangeText = newMessageText => {
    this.setState({ newMessageText });
  };

  renderChatBox = message => {
    const {
      props: { username }
    } = this;
    const {
      id,
      text,
      user: { avatarUrl, name }
    } = message;
    return (
      <View
        key={id}
        style={username === name ? styles.userChatBox : styles.chatBox}
      >
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

  render() {
    const {
      state: { newMessageText },
      props: { username, messageList }
    } = this;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.header}>
          <View style={styles.leaveButton}>
            <View style={styles.leaveButtonLeft} />
            <View style={styles.leaveButtonRight}>
              <TouchableOpacity onPress={this.handleLeavePress}>
                <Text style={styles.leaveButtonText}> Leave </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.welcomeText}>Welcome {username}</Text>
        </View>
        <View style={styles.content}>
          <ScrollView
            style={styles.scroll}
            ref="scrollView"
            onContentSizeChange={(width, height) =>
              this.refs.scrollView.scrollTo({ y: height })
            }
            onLayout={e => {
              const height = e.nativeEvent.layout.height;
              this.refs.scrollView.scrollTo({ y: height });
            }}
          >
            {messageList && messageList.map(item => this.renderChatBox(item))}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Message"
              onChangeText={this.handleChangeText}
              value={newMessageText}
            />
          </View>
          <View style={styles.footerInput}>
            <TouchableOpacity
              style={styles.sendButton}
              onPress={this.handleButtonPress}
            >
              <Text style={styles.sendButtonText}> Send </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryBackground
  },
  header: {
    marginTop: margin.md,
    paddingLeft: padding.md,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.secondaryBackground,
    minWidth: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
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
  },
  welcomeText: {
    marginLeft: margin.sm,
    color: colors.secondaryFontColor,
    fontSize: 20
  },
  content: {
    minWidth: "100%",
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: colors.primaryBackground,
    borderWidth: 2,
    borderColor: colors.secondaryBackground,
    borderStyle: "solid"
  },
  scroll: {},
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
  },
  footer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondaryBackground,
    minWidth: "100%"
  },
  textInput: {
    fontSize: 20,
    textAlign: "center",
    margin: margin.sm,
    borderRadius: 10,
    minWidth: "60%",
    backgroundColor: colors.primaryBackground,
    color: colors.secondaryFontColor,
    minHeight: 30
  },
  sendButton: {
    justifyContent: "center",
    alignItems: "center",
    margin: margin.sm,
    backgroundColor: colors.tertiaryBackground,
    borderRadius: 10,
    minWidth: "30%",
    minHeight: 30
  },
  sendButtonText: {
    fontSize: 20,
    color: colors.primaryFontColor
  }
});

const mapDispatchToProps = dispatch => {
  return {
    getMessages: payload => {
      dispatch(getMessages(payload));
    },
    sendMessage: payload => {
      dispatch(sendMessage(payload));
    },
    logMessage: payload => {
      dispatch(logMessage(payload));
    },
    setUsername: payload => {
      dispatch(setUsername(payload));
    }
  };
};

const mapStateToProps = state => {
  const {
    auth: { username },
    chat: { messageList },
    auth,
    chat
  } = state;
  return { username, messageList, auth, chat };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);
