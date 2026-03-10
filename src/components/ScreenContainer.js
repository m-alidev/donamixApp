import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { spacing } from '../constants/theme';

const ScreenContainer = ({
  children,
  theme,
  scroll = true,
  contentStyle,
  style,
  header,
  headerStyle,
  noPadding = false,
}) => {
  const backgroundColor = theme?.background || '#ECECEE';
  const baseContentStyle = noPadding ? styles.contentNoPadding : styles.content;

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={[styles.safe, { backgroundColor }, style]}>
      {!!header && <View style={[styles.header, headerStyle]}>{header}</View>}
      {scroll ? (
        <ScrollView
          style={styles.wrapper}
          contentContainerStyle={[baseContentStyle, contentStyle]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.wrapper, baseContentStyle, contentStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: { zIndex: 2 },
  wrapper: { flex: 1 },
  content: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  contentNoPadding: {},
});

export default ScreenContainer;
