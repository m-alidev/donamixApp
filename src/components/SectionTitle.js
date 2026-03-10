import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import fontSizes from '../constants/fontsize';

const SectionTitle = ({ theme, title, actionLabel, onActionPress }) => (
  <View style={styles.row}>
    <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
    {actionLabel ? (
      <TouchableOpacity onPress={onActionPress}>
        <Text style={[styles.action, { color: theme.primary }]}>{actionLabel}</Text>
      </TouchableOpacity>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: fontSizes.subMenu, fontWeight: '700' },
  action: { fontSize: fontSizes.paragraph, fontWeight: '600' },
});

export default SectionTitle;
