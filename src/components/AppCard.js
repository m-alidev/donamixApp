import React from 'react';
import { StyleSheet, View } from 'react-native';
import { radius, spacing } from '../constants/theme';

const AppCard = ({ theme, children, style }) => (
  <View
    style={[
      styles.card,
      {
        backgroundColor: theme.surface,
        borderColor: theme.border,
        shadowColor: theme.shadow,
      },
      style,
    ]}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
});

export default AppCard;
