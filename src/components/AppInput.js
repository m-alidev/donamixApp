import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { radius, spacing } from '../constants/theme';
import fontSizes from '../constants/fontsize';

const AppInput = ({ label, placeholder, theme, secureTextEntry = false, multiline = false }) => (
  <View style={styles.wrap}>
    {!!label && <Text style={[styles.label, { color: theme.mutedText }]}>{label}</Text>}
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={theme.mutedText}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      style={[
        styles.input,
        {
          color: theme.text,
          borderColor: theme.border,
          backgroundColor: theme.surface,
          height: multiline ? 90 : 46,
          textAlignVertical: multiline ? 'top' : 'center',
        },
      ]}
    />
  </View>
);

const styles = StyleSheet.create({
  wrap: { gap: spacing.xs },
  label: { fontSize: fontSizes.paragraph, fontWeight: '600' },
  input: {
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
  },
});

export default AppInput;
