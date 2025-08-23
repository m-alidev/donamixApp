import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Wrapper = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "85%",
    marginHorizontal: "7.5%", 
    backgroundColor: Colors.background, 
  },
});
