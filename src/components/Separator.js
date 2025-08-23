// components/Separator.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Separator = ({ text = 'Or With', lineColor = 'gray', textColor = 'gray' }) => {
  return (
    <View style={styles.separatorContainer}>
      <View style={[styles.line, { backgroundColor: lineColor }]} />
      <Text style={[styles.separatorText, { color: textColor }]}>{text}</Text>
      <View style={[styles.line, { backgroundColor: lineColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Separator;
