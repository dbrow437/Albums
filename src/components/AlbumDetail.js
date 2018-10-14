import React from "react";
import { View, Text } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = props => {
  return (
    <View>
      <Card>
        <CardSection>
          <Text>{props.album.title}</Text>
        </CardSection>
      </Card>
    </View>
  );
};

export default AlbumDetail;
