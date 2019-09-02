import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Login from "./containers/Login";
import ChatWindow from "./containers/ChatWindow";
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
  }
});

const mapStateToProps = state => {
  const {
    auth: { username }
  } = state;
  return { username };
};

export default connect(mapStateToProps)(ChatApp);
