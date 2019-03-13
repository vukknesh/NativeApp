import React from "react";
import { Modal, View, Button, Text, Image } from "react-native";

const PlaceDetail = props => (
  <Modal>
    <View>
      <Image src={props.selectedPlace.placeImage} />
      <Text>{props.selectedPlace.placeName}</Text>
      <View>
        <Button />
        <Button />
      </View>
    </View>
  </Modal>
);
export default PlaceDetail;
