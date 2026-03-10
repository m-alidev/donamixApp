import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { palette, radius } from '../constants/theme';
import fontSizes from '../constants/fontsize';

const getBadgeColor = role => {
  if (role === 'ADMIN') return palette.admin;
  if (role === 'VIP') return palette.vip;
  if (role === 'GUARDIAN') return palette.guardian;
  return '#64748B';
};

const BadgePill = ({ role }) => (
  <View style={[styles.pill, { backgroundColor: getBadgeColor(role) }]}>
    <Text style={styles.text}>{role}</Text>
  </View>
);

const styles = StyleSheet.create({
  pill: {
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#FFFFFF',
    fontSize: fontSizes.paragraph,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default BadgePill;
