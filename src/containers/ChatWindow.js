import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import {
  getMessages,
  sendMessage,
  logMessage,
  setUsername
} from "../redux/actionCreators";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { colors, padding, margin } from "../styles/base";
import ArrowButton from "../components/Button/ArrowButton";
import StyledButton from "../components/Button/StyledButton";
import StyledInput from "../components/TextInput/StyledInput";
import MessageBox from "../components/MessageBox/MessageBox";

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

  render() {
    const {
      state: { newMessageText },
      props: { username, messageList }
    } = this;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.header}>
          <ArrowButton text="Leave" onPress={this.handleLeavePress} />
          <Text style={styles.welcomeText}>Welcome {username}</Text>
        </View>
        <View style={styles.content}>
          <ScrollView
            ref="scrollView"
            onContentSizeChange={(width, height) =>
              this.refs.scrollView.scrollTo({ y: height })
            }
            onLayout={e => {
              const height = e.nativeEvent.layout.height;
              this.refs.scrollView.scrollTo({ y: height });
            }}
          >
            {messageList &&
              messageList.map(item => (
                <MessageBox key={item.id} username={username} message={item} />
              ))}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerInput}>
            <StyledInput
              style={styles.textInput}
              placeholder="Message"
              onChangeText={this.handleChangeText}
              value={newMessageText}
            />
          </View>
          <View style={styles.footerInput}>
            <StyledButton
              style={styles.sendButton}
              text="Send"
              onPress={this.handleButtonPress}
            />
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
  footer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondaryBackground,
    minWidth: "100%"
  },
  textInput: {
    minWidth: "60%"
  },
  sendButton: {
    minWidth: "30%"
  }
});

ChatWindow.propTypes = {
  username: PropTypes.string,
  messageList: PropTypes.array,
  auth: PropTypes.object,
  chat: PropTypes.object,
  getMessages: PropTypes.func,
  sendMessage: PropTypes.func,
  logMessage: PropTypes.func,
  setUsername: PropTypes.func
};

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
