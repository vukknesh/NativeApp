import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default class InputBar extends Component {
  state = {
    placeName: ""
  };
  placeNameChangeHandler = e => {
    this.setState({
      placeName: e
    });
  };
  btnClick = e => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.placeAdded(this.state.placeName);
  };

  render() {
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
            placeholder="An awesome frase"
          />
          <Button
            style={styles.placeBtn}
            onPress={this.btnClick}
            placeAdded={this.props.placeAdded}
            title="Add"
          />
        </View>
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
  },
  inputContainer: {
    //flex: 1,
    padding: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  placeInput: {
    width: "70%"
  },
  placeBtn: {
    width: "30%"
  }
});
