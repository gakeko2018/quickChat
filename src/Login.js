import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { setUsername } from "./redux/actionCreators";
import { connect } from "react-redux";
import { colors, margin } from "./styles/base";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      displayError: "none"
    };
  }

  handleButtonPress = () => {
    const {
      state: { displayError, nickname },
      props: { setUsername }
    } = this;

    if (nickname.length < 2) {
      this.setState({ displayError: "flex" });
    } else setUsername(nickname);
  };

  handleChangeText = nickname => {
    if (nickname.length >= 2) {
      this.setState({ displayError: "none" });
    }
    this.setState({ nickname });
  };

  render() {
    const {
      state: { displayError, nickname },
      props: { username }
    } = this;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput
          style={styles.textInput}
          placeholder="Nickname"
          onChangeText={this.handleChangeText}
          value={nickname}
        />
        <Text style={[styles.error, { display: displayError }]}>
          {" "}
          Nickname must be longer than 2 characters!
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={this.handleButtonPress}
        >
          <Text style={styles.loginButtonText}> Continue </Text>
        </TouchableOpacity>
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
  textInput: {
    fontSize: 20,
    textAlign: "center",
    margin: margin.sm,
    borderWidth: 1,
    borderColor: colors.secondaryFontColor,
    backgroundColor: colors.primaryBackground,
    color: colors.secondaryFontColor,
    borderRadius: 10,
    borderStyle: "solid",
    minWidth: "80%"
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    margin: margin.sm,
    backgroundColor: colors.tertiaryBackground,
    borderRadius: 10,
    minWidth: "80%",
    minHeight: 30
  },
  loginButtonText: {
    fontSize: 20,
    color: colors.primaryFontColor
  },
  error: {
    color: "red",
    fontSize: 10
  }
});

const mapDispatchToProps = dispatch => {
  return {
    setUsername: payload => {
      dispatch(setUsername(payload));
    }
  };
};

const mapStateToProps = state => {
  const {
    auth: { username }
  } = state;
  return { username };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
