import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {

  value: string;
}

export default function PinInput({
  value,
}: Props) {

  return (
    <View style={styles.container}>

      {Array.from({
        length: 6,
      }).map((_, index) => (

        <View
          key={index}
          style={[
            styles.dot,

            index < value.length &&
              styles.active,
          ]}
        >

          {index < value.length && (
            <Text style={styles.star}>
              •
            </Text>
          )}

        </View>

      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 25,
  },

  dot: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#BBB",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },

  active: {
    borderColor: "#0756A6",
  },

  star: {
    fontSize: 28,
    color: "#0756A6",
  },
});