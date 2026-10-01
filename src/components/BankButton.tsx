import React from "react";

import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function BankButton({
  title,
  onPress,
  disabled = false,
}: Props) {

  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled &&
          styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >

      <Text style={styles.text}>
        {title}
      </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  button: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#0756A6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  disabled: {
    opacity: 0.5,
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});