import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends React.Component {
  state = {
    placeName: ""
  };
  placeNameChangeHandler = e => {
    this.setState({
      placeName: e
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ width: 300 }}
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
          placeholder="An awesome frase"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
