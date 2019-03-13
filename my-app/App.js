import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import ListItem from "./src/components/ListItem/ListItem";
import InputBar from "./src/components/InputBar/InputBar";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import placeImage from "./src/boom.jpg";

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAdded = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  onItemDeleted = i => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, index) => {
          return i !== index;
        })
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      selectedPlace: prevState.places.find(place => {
        return place.key === key;
      });
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, index) => (
      <ListItem
        key={index}
        onItemPressed={() => {
          this.onItemDeleted(index);
        }}
        placeName={place}
      />
    ));
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.placeSelectedHandler} />
        <InputBar placeAdded={this.placeAdded} />
        <Image src={placeImage} />
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
