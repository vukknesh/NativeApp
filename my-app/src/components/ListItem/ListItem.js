import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ListItem(props) {
  return (
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee"
  }
});
