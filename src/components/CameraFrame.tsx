import React from "react";

import {
  View,
  StyleSheet,
} from "react-native";

export default function CameraFrame() {

  return (
    <View style={styles.container}>
      <View style={styles.frame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  frame: {
    width: "85%",
    height: 230,
    borderWidth: 3,
    borderColor: "#00E676",
    borderRadius: 20,
  },
});