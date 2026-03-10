import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import images from '../constants/images';

const Avatar = ({ uri, source, size = 44, theme }) => (
  <View style={[styles.wrap, { width: size, height: size, borderColor: theme.border }]}>
    <Image source={source || (uri ? { uri } : images.avatar)} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    borderRadius: 999,
    overflow: 'hidden',
    borderWidth: 1,
  },
  image: { width: '100%', height: '100%' },
});

export default Avatar;
