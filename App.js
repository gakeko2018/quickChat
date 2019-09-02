import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ChatApp from "./src/ChatApp";
import { Provider } from "react-redux";
import { configureStore } from "./src/config/store.config";
import { PersistGate } from "redux-persist/integration/react";

const config = configureStore();
const { store, persistor } = config;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <ChatApp />
          </View>
        </PersistGate>
      </Provider>
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
