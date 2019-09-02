import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { setUsername } from "../redux/actionCreators";
import { connect } from "react-redux";
import { colors } from "../styles/base";
import StyledButton from "../components/Button/StyledButton";
import StyledInput from "../components/TextInput/StyledInput";

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
      state: { nickname },
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
      state: { displayError, nickname }
    } = this;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StyledInput
          style={styles.textInput}
          placeholder="Nickname"
          onChangeText={this.handleChangeText}
          value={nickname}
        />
        <Text style={[styles.error, { display: displayError }]}>
          Nickname must be longer than 2 characters!
        </Text>
        <StyledButton
          style={styles.loginButton}
          text="Continue"
          onPress={this.handleButtonPress}
        />
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
    minWidth: "80%"
  },
  loginButton: {
    minWidth: "80%"
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
