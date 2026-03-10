import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const Row = ({ name, actionLabel = 'Block' }) => (
  <View style={styles.row}>
    <Image source={images.avatar} style={styles.avatar} />
    <Text style={styles.name}>{name}</Text>
    <TouchableOpacity style={styles.actionBtn}>
      <Text style={styles.actionText}>{actionLabel}</Text>
    </TouchableOpacity>
  </View>
);

const BlockedUsersScreen = ({ navigation }) => {
  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Blocked" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <View style={styles.content}>
        <Row name="Smith Mathew" actionLabel="Unblock" />

        <Text style={styles.suggestTitle}>You may want to block</Text>
        <Row name="Merry An." />
        <Row name="John Walton" />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { height: 84, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14 },
  backBtn: { marginRight: 10 },
  headerTitle: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700' },
  content: { paddingHorizontal: 14, paddingTop: 14 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 },
  avatar: { width: 72, height: 72, borderRadius: 36, marginRight: 14 },
  name: { flex: 1, color: '#111217', fontSize: fontSizes.title, fontWeight: '500' },
  actionBtn: { minWidth: 136, height: 56, borderRadius: 16, backgroundColor: '#0D0E12', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12 },
  actionText: { color: '#fff', fontSize: fontSizes.buttonText, fontWeight: '600' },
  suggestTitle: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700', marginTop: 22, marginBottom: 12 },
});

export default BlockedUsersScreen;
