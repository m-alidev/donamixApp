import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const VISITORS = [
  { id: 'v1', name: 'Athalia Putri', role: 'Guardian', roleColor: '#A8C1A6', country: '🇦🇺', position: 'Work Position', times: '1 time' },
  { id: 'v2', name: 'Midala Huera', role: 'Ambassador', roleColor: '#D8B000', country: '🇵🇰', position: 'Position Here', times: '2 times' },
  { id: 'v3', name: 'Erlan Sadewa', role: 'VIP', roleColor: '#0D0E12', country: '🇬🇧', position: 'Position Here', times: '2 times', online: true },
  { id: 'v4', name: 'Erlan Sadewa', role: 'Admin', roleColor: '#E70808', country: '', position: 'Position Here', times: '1 time', online: true },
  { id: 'v5', name: 'Erlan Sadewa', role: '', roleColor: '', country: '🇦🇺', position: 'Position Here', times: '3 times', online: true },
  { id: 'v6', name: 'Erlan Sadewa', role: '', roleColor: '', country: '🇵🇰', position: 'Position Here', times: '2 times', online: true },
  { id: 'v7', name: 'Erlan Sadewa', role: '', roleColor: '', country: '🇨🇳', position: 'Position Here', times: '2 times', online: true },
];

const VisitorsScreen = ({ navigation }) => {
  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Profile Visitors" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <ScrollView style={styles.list} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {VISITORS.map(item => (
          <View style={styles.row} key={item.id}>
            <View style={styles.avatarWrap}>
              <Image source={images.avatar} style={styles.avatar} />
              {item.online ? <View style={styles.online} /> : null}
            </View>

            <View style={styles.center}>
              <View style={styles.topLine}>
                <Text style={styles.name}>{item.name}</Text>
                {item.country ? <Text style={styles.flag}>{item.country}</Text> : null}
                {item.role ? <View style={[styles.rolePill, { backgroundColor: item.roleColor }]}><Text style={styles.roleText}>{item.role}</Text></View> : null}
              </View>
              <Text style={styles.position}>{item.position}</Text>
              <Text style={styles.date}>1/21/2025</Text>
            </View>

            <View style={styles.right}>
              <Icon name="eye-outline" size={35} color="#111217" />
              <Text style={styles.times}>{item.times}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: {
    height: 84,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E3',
    backgroundColor: '#F2F2F3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  backBtn: { marginRight: 10 },
  headerTitle: { fontSize: fontSizes.title, color: '#111217', fontWeight: '700' },
  list: { flex: 1 },
  content: { paddingHorizontal: 14, paddingVertical: 10, paddingBottom: 24 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatarWrap: { width: 64, height: 64, borderRadius: 32, marginRight: 10 },
  avatar: { width: '100%', height: '100%', borderRadius: 32 },
  online: { position: 'absolute', right: -1, top: -1, width: 16, height: 16, borderRadius: 8, backgroundColor: '#2EB872', borderWidth: 2, borderColor: '#ECECEE' },
  center: { flex: 1 },
  topLine: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 2 },
  name: { fontSize: fontSizes.buttonText, color: '#17181E', fontWeight: '700' },
  flag: { fontSize: fontSizes.buttonText},
  rolePill: { borderRadius: 12, paddingHorizontal: 9, paddingVertical: 2 },
  roleText: { color: '#fff', fontSize: fontSizes.paragraph, fontWeight: '700' },
  position: { fontSize: fontSizes.buttonText, color: '#3D3E44' },
  date: { fontSize: fontSizes.subMenu, color: '#3D3E44' },
  right: { alignItems: 'center', minWidth: 58 },
  times: { marginTop: 4, fontSize: fontSizes.subMenu, color: '#2D2E33' },
});

export default VisitorsScreen;
