import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import wateringImg from "../assets/watering.png";

export function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Gerencie suas plantas de forma fácil</Text>

      <Image source={wateringImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
