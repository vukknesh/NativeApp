import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import ListItem from "./src/components/ListItem/ListItem";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
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
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
    this.setState({ placeName: "" });
  };
  render() {
    const placesOutput = this.state.places.map((place, index) => (
      <ListItem key={index} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
            placeholder="An awesome frase"
          />
          <Button style={styles.placeBtn} onPress={this.btnClick} title="Add" />
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  placeInput: {
    width: "70%"
  },
  placeBtn: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
