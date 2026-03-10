import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { radius, spacing } from '../constants/theme';
import fontSizes from '../constants/fontsize';

const AppButton = ({ title, onPress, theme, variant = 'primary', style }) => {
  const filled = variant === 'primary';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: filled ? theme.primary : theme.surfaceAlt,
          borderColor: filled ? theme.primary : theme.border,
        },
        style,
      ]}
      activeOpacity={0.85}
    >
      <Text style={[styles.text, { color: filled ? '#FFFFFF' : theme.text }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: fontSizes.subTitle,
    fontWeight: '700',
  },
});

export default AppButton;
