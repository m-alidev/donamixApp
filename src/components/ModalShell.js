import React from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import AppCard from './AppCard';

const ModalShell = ({ visible, onClose, theme, children }) => (
  <Modal visible={visible} transparent animationType="slide">
    <View style={styles.overlay}>
      <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
      <AppCard theme={theme} style={styles.sheet}>
        {children}
      </AppCard>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00000066',
    padding: 16,
  },
  sheet: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    gap: 12,
  },
});

export default ModalShell;
