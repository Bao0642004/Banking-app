import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  current: number;
  total: number;
}

export default function StepIndicator({
  current,
  total,
}: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => {
        const step = index + 1;

        return (
          <React.Fragment key={step}>
            {/* SỐ BƯỚC */}
            <View
              style={[
                styles.step,
                step <= current && styles.active,
              ]}
            >
              <Text
                style={[
                  styles.number,
                  step <= current && styles.activeText,
                ]}
              >
                {step}
              </Text>
            </View>

            {step < total && (
              <View
                style={[
                  styles.line,
                  step < current && styles.activeLine,
                ]}
              />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    width: "100%",
  },

  step: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },

  active: {
    backgroundColor: "#0756A6",
  },

  number: {
    color: "#666",
    fontSize: 14,
    fontWeight: "700",
  },

  activeText: {
    color: "#FFFFFF",
  },

  line: {
    width: 18,
    height: 3,
    backgroundColor: "#E5E7EB",
  },

  activeLine: {
    backgroundColor: "#0756A6",
  },
});