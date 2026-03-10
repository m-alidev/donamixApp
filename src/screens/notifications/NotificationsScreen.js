import React, { useState } from 'react';
import { Modal,  ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import fontSizes from '../../constants/fontsize';

const notifs = [
  'Username reacted to your post',
  'Username liked your post',
  'Username accepted your request',
  'Username sent you connection request',
  'Username sent you a gift',
  'Trending Topic: Join the buzz! [Username] post is trending on Donamix.',
  'Your wallet has a low balance. Enhance your experience by purchasing coins.',
  'Unlock coins for free by actively engaging with Donamix features!',
  'Feeling bored? Explore Chat Hubs and connect with like-minded people now!',
  '[Username] just shared new photos! Check them out and leave a like.',
  'Game On! Join multiplayer games now and challenge your friends!',
  'New Travel Plans Added! See who\'s planning their next adventure.',
];

const filters = [
  'Profile Activity',
  'Live Stream',
  'Connections',
  'Gifts & Wallet',
  'Travel & Trips',
  'Games',
  'Subscriptions',
];

const NotificationsScreen = ({ navigation }) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [states, setStates] = useState({
    'Profile Activity': false,
    'Live Stream': false,
    Connections: false,
    'Gifts & Wallet': false,
    'Travel & Trips': true,
    Games: true,
    Subscriptions: false });

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.topTitle}>Notifications</Text>
        <TouchableOpacity onPress={() => setFilterVisible(true)}>
          <Icon name="options-outline" size={24} color="#111" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.list}>
        {notifs.map((item, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.avatar}><Text style={styles.avatarText}>{String.fromCharCode(65 + (index % 26))}</Text></View>
            <View style={styles.info}>
              <Text style={styles.msg}>{item}</Text>
              <Text style={styles.time}>{index < 5 ? `${(index + 1) * 20}min` : 'yesterday'}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <Modal visible={filterVisible} transparent animationType="fade" onRequestClose={() => setFilterVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.filterCard}>
            <View style={styles.filterHead}>
              <Text style={styles.filterTitle}>Filter</Text>
              <TouchableOpacity onPress={() => setFilterVisible(false)}>
                <Icon name="close" size={20} color="#222" />
              </TouchableOpacity>
            </View>
            <View style={styles.filterRow}><Text style={styles.filterText}>All</Text><Switch value={false} /></View>
            {filters.map(key => (
              <View key={key} style={styles.filterRow}>
                <Text style={styles.filterText}>{key}</Text>
                <Switch value={states[key]} onValueChange={v => setStates(prev => ({ ...prev, [key]: v }))} />
              </View>
            ))}
            <Text style={styles.timeTitle}>Time</Text>
            <View style={styles.chips}>
              {['Today', 'Last 7 Days', 'This Month', 'Select Custom Date'].map(chip => (
                <View key={chip} style={styles.chip}><Text style={styles.chipTxt}>{chip}</Text></View>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#E7E7E8' },
  topBar: {
    height: 56,
    backgroundColor: '#F3F3F4',
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12 },
  topTitle: { fontSize: fontSizes.buttonText, fontWeight: '700', color: '#0F0F14' },
  list: { flex: 1, paddingHorizontal: 12 },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E4',
    paddingVertical: 10,
    gap: 10 },
  avatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#D7D8DB', alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontWeight: '700', color: '#1B1B23' },
  info: { flex: 1 },
  msg: { color: '#171821', fontSize: fontSizes.subTitle, lineHeight: 20, fontWeight: '500' },
  time: { marginTop: 2, color: '#7C7C81', fontSize: fontSizes.paragraph},

  modalOverlay: { flex: 1, backgroundColor: '#00000022', alignItems: 'flex-end', paddingTop: 70, paddingRight: 16 },
  filterCard: {
    width: 260,
    backgroundColor: '#F8F8F9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8 },
  filterHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  filterTitle: { fontSize: fontSizes.subTitle, fontWeight: '700', color: '#1A1A20' },
  filterRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  filterText: { color: '#2A2A31', fontSize: fontSizes.paragraph, fontWeight: '500' },
  timeTitle: { color: '#2A2A31', fontSize: fontSizes.paragraph, fontWeight: '700', marginTop: 4, marginBottom: 6 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  chip: { borderWidth: 1, borderColor: '#D3D3D6', borderRadius: 8, paddingHorizontal: 7, paddingVertical: 4, backgroundColor: '#FFF' },
  chipTxt: { fontSize: fontSizes.paragraph, color: '#44444B' } });

export default NotificationsScreen;
