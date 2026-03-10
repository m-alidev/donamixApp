import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import fontSizes from '../constants/fontsize';

const SegmentedControl = ({ options, activeValue, onChange, theme }) => (
  <View style={[styles.container, { backgroundColor: theme.surfaceAlt, borderColor: theme.border }]}>
    {options.map(option => {
      const active = option.value === activeValue;
      return (
        <TouchableOpacity
          key={option.value}
          style={[styles.item, { backgroundColor: active ? theme.surface : 'transparent' }]}
          onPress={() => onChange(option.value)}
        >
          <Text style={[styles.label, { color: active ? theme.text : theme.mutedText }]}>{option.label}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    padding: 4,
  },
  item: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },
  label: {
    fontSize: fontSizes.paragraph,
    fontWeight: '700',
  },
});

export default SegmentedControl;
