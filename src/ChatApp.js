import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from "react-native";
import Login from "./Login";
import ChatWindow from "./ChatWindow";
import { connect } from "react-redux";

class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      props: { username }
    } = this;
    return (
      <View style={styles.container}>
        {username ? <ChatWindow /> : <Login />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  textInput: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    borderWidth: 1,
    borderColor: "skyblue",
    borderRadius: 10,
    borderStyle: "solid",
    minWidth: "80%"
  },
  button: {
    textAlign: "center",
    color: "purple",
    marginBottom: 5,
    minWidth: "80%",
    borderWidth: 1,
    borderColor: "red",
    borderStyle: "solid"
  },
  error: {
    color: "red",
    fontSize: 10
  }
});

const mapStateToProps = state => {
  const {
    auth: { username }
  } = state;
  return { username };
};

export default connect(mapStateToProps)(ChatApp);
