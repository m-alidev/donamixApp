import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../constants/navigation';
import fontSizes from '../../constants/fontsize';

const hubs = [
  { id: '1', name: 'The Language Exchange', access: 'Open', emoji: '🌍' },
  { id: '2', name: 'The Travel Adventure Club', access: 'VIP Access', emoji: '✈️' },
  { id: '3', name: 'The Language Exchange', access: 'Open', emoji: '🌍' },
  { id: '4', name: 'Global Connections', access: 'VIP Access', emoji: '🌐' },
  { id: '5', name: 'The Entrepreneur\'s Hub', access: 'VIP Access', emoji: '💼' },
  { id: '6', name: 'The Movie Buffs', access: 'Open', emoji: '🎬' },
  { id: '7', name: 'The Pet Lovers\' Oasis', access: 'Open', emoji: '🐶' },
  { id: '8', name: 'The Creative Corner', access: 'Open', emoji: '🎨' },
  { id: '9', name: 'Virtual Hangout Lounge', access: 'Open', emoji: '🚌' },
  { id: '10', name: 'The Fitness Freaks', access: 'Open', emoji: '🏋️' },
  { id: '11', name: 'The Music Mania', access: 'Open', emoji: '🎶' },
  { id: '12', name: 'The Friendly Lounge', access: 'Open', emoji: '🛋️' },
];

const ChatHubsScreen = ({ navigation }) => {
  const [bannedVisible, setBannedVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>Chat Hubs List</Text>
        <View style={styles.headerActions}>
          <Icon name="search-outline" size={21} color="#15161B" />
        </View>
      </View>

      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        {hubs.map(hub => (
          <TouchableOpacity key={hub.id} style={styles.card} onPress={() => navigation.navigate(ROUTES.CHAT_ROOM, { hub })}>
            <View style={styles.cardTop}>
              <Text style={styles.hubName}>{hub.emoji}  {hub.name}</Text>
              <TouchableOpacity onPress={() => hub.access === 'VIP Access' && setBannedVisible(true)}>
                <Text style={styles.access}>{hub.access} <Icon name="lock-closed-outline" size={11} color="#555" /></Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.time}><Icon name="time-outline" size={11} color="#888" />  Wednesday at 19:30</Text>
            <Text style={styles.desc}>
              Join {hub.name} to connect with active speakers, learn new languages, and practice speaking skills.
              Enhance your language fluency through interactive conversations and cultural exchange.
            </Text>
            <View style={styles.bottomRow}>
              <Text style={styles.members}>🟠🔵🔴 +99</Text>
              <TouchableOpacity style={styles.joinBtn}><Text style={styles.joinTxt}>Join</Text></TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={bannedVisible} transparent animationType="fade" onRequestClose={() => setBannedVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Banned...</Text>
            <View style={styles.sep} />
            <Text style={styles.modalText}>You have been banned from the room. You can rejoin once the ban is lifted by an admin.</Text>
            <Text style={styles.banEmoji}>⛔</Text>
            <Text style={styles.banText}>BANNED</Text>
            <TouchableOpacity style={styles.okBtn} onPress={() => setBannedVisible(false)}>
              <Text style={styles.okTxt}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#E8E8EA' },
  header: {
    height: 62,
    backgroundColor: '#F5F5F6',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  title: { fontSize: fontSizes.subMenu, fontWeight: '700', color: '#14151B' },
  headerActions: { flexDirection: 'row', gap: 14 },
  list: { paddingHorizontal: 10, paddingTop: 8 },
  card: { backgroundColor: '#F4F4F5', borderRadius: 12, borderWidth: 1, borderColor: '#E4E4E6', padding: 10, marginBottom: 10 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  hubName: { flex: 1, color: '#1A1B21', fontSize: fontSizes.subTitle, fontWeight: '700' },
  access: { color: '#494A4F', fontSize: fontSizes.paragraph, fontWeight: '600' },
  time: { marginTop: 4, color: '#8A8A90', fontSize: fontSizes.paragraph},
  desc: { marginTop: 6, color: '#2F3035', fontSize: fontSizes.paragraph, lineHeight: 15 },
  bottomRow: { marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  members: { fontSize: fontSizes.paragraph, color: '#444' },
  joinBtn: { minWidth: 74, height: 26, borderRadius: 7, backgroundColor: '#111217', alignItems: 'center', justifyContent: 'center' },
  joinTxt: { color: '#fff', fontSize: fontSizes.paragraph, fontWeight: '700' },
  overlay: { flex: 1, backgroundColor: '#00000044', justifyContent: 'center', paddingHorizontal: 14 },
  modalCard: { backgroundColor: '#F5F5F6', borderRadius: 18, padding: 16, borderWidth: 1, borderColor: '#E3E3E4' },
  modalTitle: { textAlign: 'center', color: '#1A1B21', fontSize: fontSizes.buttonText, fontWeight: '700' },
  sep: { marginTop: 10, height: 1, backgroundColor: '#CFCFD2' },
  modalText: { marginTop: 10, textAlign: 'center', color: '#2D2E34', fontSize: fontSizes.paragraph, lineHeight: 20 },
  banEmoji: { textAlign: 'center', fontSize: fontSizes.title, marginTop: 14 },
  banText: { textAlign: 'center', color: '#E10C0C', fontSize: fontSizes.buttonText, fontWeight: '900', marginTop: -8 },
  okBtn: { height: 52, borderRadius: 26, backgroundColor: '#1A1B21', alignItems: 'center', justifyContent: 'center', marginTop: 14 },
  okTxt: { color: '#fff', fontSize: fontSizes.subMenu, fontWeight: '600' },
});

export default ChatHubsScreen;
