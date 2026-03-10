import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import fontSizes from '../../constants/fontsize';

const members = [
  { id: '1', name: 'Smith Mathew', status: 'Away', dot: '#f59e0b', count: '14' },
  { id: '2', name: 'Merry An.', status: 'online', dot: '#4db6ac', count: '2' },
  { id: '3', name: 'John Walton', status: 'Away', dot: '#f59e0b' },
  { id: '4', name: 'Monica Randawa', status: 'Available', dot: '#16a34a' },
  { id: '5', name: 'Innoxent Jay', status: 'Available', dot: '#16a34a' },
  { id: '6', name: 'Harry Samit', status: 'online', dot: '#4db6ac' },
  { id: '7', name: 'John Walton', status: 'Not Available', dot: '#dc2626' },
  { id: '8', name: 'Monica Randawa', status: 'Away', dot: '#f59e0b' },
];

const statusColor = status => {
  if (status === 'online') return '#36AFA2';
  if (status === 'Available') return '#9A9AA0';
  if (status === 'Not Available') return '#B3B3B7';
  return '#B3B3B7';
};

const MembersScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="#13141A" />
        </TouchableOpacity>
        <Text style={styles.title}>Members</Text>
      </View>

      <View style={styles.searchWrap}>
        <Icon name="search-outline" size={34} color="#2A2A2F" />
        <TextInput placeholder="Search here.." placeholderTextColor="#B2B2B6" style={styles.searchInput} />
      </View>

      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        {members.map((item, idx) => (
          <TouchableOpacity
            key={item.id}
            style={styles.row}
            onPress={() => navigation.navigate('PrivateChat', { thread: { name: item.name } })}
            activeOpacity={0.85}
          >
            <View style={styles.avatarWrap}>
              <View style={[styles.avatar, { backgroundColor: ['#d4b48a', '#d2c3b4', '#4d9be6', '#85c9d1', '#e4c7a5', '#d35f68', '#4d9be6', '#85c9d1'][idx % 8] }]} />
              <View style={[styles.dot, { backgroundColor: item.dot }]} />
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={[styles.status, { color: statusColor(item.status) }]}>{item.status}</Text>
            </View>
            {idx === 1 && <Icon name="videocam-outline" size={30} color="#111" style={styles.cam} />}
            {!!item.count && (
              <View style={styles.badge}><Text style={styles.badgeText}>{item.count}</Text></View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingTop: 8, marginBottom: 12 },
  title: { fontSize: fontSizes.title, fontWeight: '700', color: '#101117', marginLeft: 12 },
  searchWrap: {
    marginHorizontal: 14,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: '#D6D6D8',
    backgroundColor: '#EFEFF0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: fontSizes.subMenu, color: '#1F2025' },
  list: { flex: 1, paddingHorizontal: 14 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  avatarWrap: { width: 60, height: 60, marginRight: 12 },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  dot: { position: 'absolute', right: -2, bottom: -2, width: 20, height: 20, borderRadius: 10, borderWidth: 3, borderColor: '#ECECEE' },
  info: { flex: 1 },
  name: { fontSize: fontSizes.buttonText, fontWeight: '600', color: '#121319' },
  status: { marginTop: 2, fontSize: fontSizes.subMenu, fontWeight: '500' },
  cam: { marginRight: 8 },
  badge: { minWidth: 34, height: 34, borderRadius: 17, backgroundColor: '#E50606', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8 },
  badgeText: { color: '#fff', fontSize: fontSizes.subMenu, fontWeight: '700' },
});

export default MembersScreen;
