import React, { useState } from 'react';
import { Modal,  ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../constants/navigation';
import fontSizes from '../../constants/fontsize';

const quick = [
  { id: '1', icon: 'people-outline', label: 'Import\nContacts' },
  { id: '2', icon: 'call-outline', label: 'Call Logs' },
  { id: '3', icon: 'gift-outline', label: 'Show\nAppreciation' },
  { id: '4', icon: 'airplane-outline', label: 'Create\na Trip' },
];

const addActions = [
  { id: 'a1', icon: 'folder-open-outline', label: 'Ambassadors' },
  { id: 'a2', icon: 'diamond-outline', label: 'Upgrade' },
  { id: 'a3', icon: 'game-controller-outline', label: 'Games' },
  { id: 'a4', icon: 'settings-outline', label: 'Live\nStream' },
  { id: 'a5', icon: 'radio-outline', label: 'Radio' },
  { id: 'a6', icon: 'chatbubble-outline', label: 'Inbox' },
  { id: 'a7', icon: 'disc-outline', label: 'Live\nstream' },
  { id: 'a8', icon: 'wallet-outline', label: 'Wallet' },
];

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>DONAMIX</Text>
          <View style={styles.headerIcons}>
            <Icon name="search-outline" size={22} color="#15161B" />
            <Icon name="add-circle-outline" size={22} color="#15161B" />
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.NOTIFICATIONS)} style={styles.bellWrap}>
              <Icon name="notifications-outline" size={22} color="#15161B" />
              <View style={styles.badge}><Text style={styles.badgeText}>1</Text></View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionTop}><Text style={styles.sectionTitle}>Quick Actions</Text></View>
        <View style={styles.quickRow}>
          {quick.map(item => (
            <TouchableOpacity key={item.id} style={styles.quickItem}>
              <View style={styles.quickIcon}><Icon name={item.icon} size={20} color="#111" /></View>
              <Text style={styles.quickText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.addBtn} onPress={() => setModalVisible(true)}>
            <Icon name="add" size={24} color="#fff" />
            <Text style={styles.quickText}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionTop}><Text style={styles.sectionTitle}>Wallet</Text><Text style={styles.link}>Explore more</Text></View>
        <View style={styles.walletCard}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceValue}>🪙 3,500 <Text style={styles.coins}>Coins</Text></Text>
        </View>

        <Text style={styles.challengeHead}>Stay Active and keep earning! <Text style={styles.smallLink}>How it works?</Text></Text>
        <View style={styles.challengeCard}>
          <Text style={styles.challengeItem}>Come back to claim your 5 free coins! (Daily)</Text>
          <View style={styles.progressBase}><View style={[styles.progress, { width: '10%' }]} /></View>
          <Text style={styles.challengeReward}>5 coins 🪙</Text>

          <Text style={[styles.challengeItem, { marginTop: 10 }]}>Join 2 more chat hubs to earn (One time)</Text>
          <View style={styles.progressBase}><View style={[styles.progress, { width: '36%' }]} /></View>
          <Text style={styles.challengeReward}>20 coins 🪙</Text>

          <Text style={[styles.challengeItem, { marginTop: 10 }]}>Send 3 gifts today to unlock your daily reward!</Text>
          <View style={styles.progressBase}><View style={[styles.progress, { width: '65%' }]} /></View>
          <Text style={styles.challengeReward}>50 coins 🪙</Text>
          <Text style={styles.challengeAll}>See all Challenges</Text>
        </View>

        <View style={styles.sectionTop}><Text style={styles.sectionTitle}>Trending Chat Hubs</Text><Text style={styles.link}>See all</Text></View>
        <View style={styles.cards3}>
          {['The Pet Lovers\' Oasis', 'The Travel Adventure Club', 'Virtual Hangout Lounge'].map((item, idx) => (
            <View key={item} style={styles.smallCard}>
              <Text style={styles.smallIcon}>{idx === 0 ? '❤️' : idx === 1 ? '✈️' : '🚌'}</Text>
              <Text style={styles.smallTitle}>{item}</Text>
              <TouchableOpacity style={styles.joinBtn}><Text style={styles.joinTxt}>Join</Text></TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.sectionTop}><Text style={styles.sectionTitle}>Suggested Members</Text><Text style={styles.link}>See all</Text></View>
        <View style={styles.membersRow}>
          {['Smith Mathew', 'Merry An.', 'John Walton', 'Monica Randawa'].map(name => (
            <View key={name} style={styles.memberCard}>
              <View style={styles.memberAvatar} />
              <Text style={styles.memberName}>{name}</Text>
              <View style={styles.memberActions}><Icon name="add-circle" size={16} color="#111" /><Icon name="camera" size={14} color="#111" /></View>
            </View>
          ))}
        </View>

        <View style={styles.sectionTop}><Text style={styles.sectionTitle}>Games to Play</Text><Text style={styles.link}>See all</Text></View>
        <View style={styles.gamesRow}>{['Stumble Guys', 'Tic Tac Toe', 'Ball Drop', 'Ninja Climb'].map(game => <View key={game} style={styles.gameCard}><Text style={styles.gameThumb}>🎮</Text><Text style={styles.gameText}>{game}</Text></View>)}</View>

        <View style={styles.sectionTop}><Text style={styles.sectionTitle}>✨ Daily Spotlight</Text><Text style={styles.link}>See all</Text></View>
        <View style={styles.spotlight}><View style={styles.memberAvatar} /><View style={{ flex: 1, marginLeft: 10 }}><Text style={styles.spotName}>Meet Sarah Doe!</Text><Text style={styles.spotDesc}>A top explorer in our Chat Hubs, always sending thoughtful Virtual Gifts and sharing exciting travel plans.</Text></View></View>

        <View style={styles.sectionTop}><Text style={styles.sectionTitle}>Top Travel Trips</Text><Text style={styles.link}>See all</Text></View>
        <View style={styles.tripCard}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <View key={idx} style={styles.tripRow}>
              <View style={styles.tripAvatar} />
              <View style={{ flex: 1 }}><Text style={styles.tripName}>John Doe</Text><Text style={styles.tripSub}>Abu Dhabi, UAE 🇦🇪</Text></View>
              <Text style={styles.tripDate}>Jul 23 - Sept 21 ✈️</Text>
            </View>
          ))}
        </View>

        <View style={styles.banner}><Text style={styles.bannerTxt}>320 x 100{`\n`}AdMob Banner for all screens</Text></View>
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Customize Quick Action</Text>
            <View style={styles.modalTopActions}>
              {quick.map(item => (
                <View key={`m-${item.id}`} style={styles.modalAction}>
                  <View style={styles.minusBadge}><Text style={styles.badgeChar}>-</Text></View>
                  <View style={styles.quickIcon}><Icon name={item.icon} size={20} color="#111" /></View>
                  <Text style={styles.quickText}>{item.label}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.addActionsHead}>Add Actions</Text>
            <View style={styles.addGrid}>
              {addActions.map(item => (
                <View key={item.id} style={styles.addAction}>
                  <View style={styles.plusBadge}><Text style={styles.badgeChar}>+</Text></View>
                  <View style={styles.quickIcon}><Icon name={item.icon} size={20} color="#111" /></View>
                  <Text style={styles.quickText}>{item.label}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.saveBtn}><Text style={styles.saveTxt}>Save</Text></TouchableOpacity>
            <TouchableOpacity style={styles.cancelBtn} onPress={() => setModalVisible(false)}><Text style={styles.cancelTxt}>Cancel</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#E6E6E8' },
  screen: { flex: 1, paddingHorizontal: 10 },
  header: { height: 72, backgroundColor: '#F3F3F4', borderBottomWidth: 1, borderBottomColor: '#E0E0E2', paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  logo: { fontSize: fontSizes.buttonText, fontWeight: '900', letterSpacing: 0.5, color: '#14151B' },
  headerIcons: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  bellWrap: { position: 'relative' },
  badge: { position: 'absolute', right: -8, top: -6, width: 16, height: 16, borderRadius: 8, backgroundColor: '#111', alignItems: 'center', justifyContent: 'center' },
  badgeText: { color: '#fff', fontSize: fontSizes.paragraph, fontWeight: '700' },

  sectionTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, marginBottom: 8, paddingHorizontal: 6 },
  sectionTitle: { color: '#14151B', fontSize: fontSizes.subTitle, fontWeight: '600' },
  link: { color: '#14151B', fontSize: fontSizes.paragraph},

  quickRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4 },
  quickItem: { alignItems: 'center', width: 70 },
  quickIcon: { width: 44, height: 44, borderRadius: 12, borderWidth: 1, borderColor: '#DDDDDF', backgroundColor: '#F4F4F5', alignItems: 'center', justifyContent: 'center' },
  quickText: { fontSize: fontSizes.paragraph, color: '#222328', textAlign: 'center', marginTop: 6 },
  addBtn: { alignItems: 'center', width: 70 },

  walletCard: { backgroundColor: '#F5F5F6', borderRadius: 12, borderWidth: 1, borderColor: '#E3E3E4', padding: 14, marginHorizontal: 6 },
  balanceLabel: { color: '#292A2F', fontSize: fontSizes.subTitle},
  balanceValue: { marginTop: 8, color: '#111', fontSize: fontSizes.title, fontWeight: '800' },
  coins: { fontSize: fontSizes.subTitle, fontWeight: '400', color: '#6D6D72' },

  challengeHead: { marginTop: 10, marginHorizontal: 10, color: '#26272D', fontSize: fontSizes.paragraph},
  smallLink: { fontSize: fontSizes.paragraph, color: '#14151B' },
  challengeCard: { backgroundColor: '#F5F5F6', borderRadius: 12, borderWidth: 1, borderColor: '#E3E3E4', padding: 12, marginHorizontal: 6 },
  challengeItem: { color: '#2C2D33', fontSize: fontSizes.paragraph},
  progressBase: { height: 8, borderRadius: 6, backgroundColor: '#E2E2E4', marginTop: 6 },
  progress: { height: 8, borderRadius: 6, backgroundColor: '#000' },
  challengeReward: { textAlign: 'right', fontSize: fontSizes.paragraph, color: '#222328', marginTop: 4 },
  challengeAll: { textAlign: 'right', fontSize: fontSizes.paragraph, color: '#111', marginTop: 8, fontWeight: '600' },

  cards3: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4 },
  smallCard: { width: '31.5%', backgroundColor: '#F5F5F6', borderRadius: 10, borderWidth: 1, borderColor: '#E3E3E4', alignItems: 'center', paddingVertical: 8 },
  smallIcon: { fontSize: fontSizes.buttonText, marginBottom: 6 },
  smallTitle: { fontSize: fontSizes.paragraph, color: '#23242A', textAlign: 'center', minHeight: 34 },
  joinBtn: { marginTop: 4, backgroundColor: '#111', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 3 },
  joinTxt: { color: '#fff', fontSize: fontSizes.paragraph, fontWeight: '700' },

  membersRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4 },
  memberCard: { width: '24%', backgroundColor: '#F5F5F6', borderRadius: 10, borderWidth: 1, borderColor: '#E3E3E4', alignItems: 'center', paddingVertical: 8 },
  memberAvatar: { width: 46, height: 46, borderRadius: 23, backgroundColor: '#D7D8DB', marginBottom: 6 },
  memberName: { fontSize: fontSizes.paragraph, color: '#25262B', textAlign: 'center', marginBottom: 5 },
  memberActions: { flexDirection: 'row', gap: 8 },

  gamesRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4 },
  gameCard: { width: '24%', backgroundColor: '#F5F5F6', borderRadius: 10, borderWidth: 1, borderColor: '#E3E3E4', alignItems: 'center', paddingVertical: 8 },
  gameThumb: { fontSize: fontSizes.buttonText, marginBottom: 6 },
  gameText: { fontSize: fontSizes.paragraph, color: '#26272D', textAlign: 'center' },

  spotlight: { backgroundColor: '#F5F5F6', borderRadius: 10, borderWidth: 1, borderColor: '#E3E3E4', marginHorizontal: 6, padding: 10, flexDirection: 'row' },
  spotName: { fontSize: fontSizes.subTitle, fontWeight: '700', color: '#191A20' },
  spotDesc: { marginTop: 4, fontSize: fontSizes.paragraph, color: '#34353A', lineHeight: 18 },

  tripCard: { backgroundColor: '#F5F5F6', borderRadius: 10, borderWidth: 1, borderColor: '#E3E3E4', marginHorizontal: 6, padding: 10 },
  tripRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#E8E8EA' },
  tripAvatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#D1D2D6', marginRight: 8 },
  tripName: { fontSize: fontSizes.subTitle, color: '#1B1C22', fontWeight: '700' },
  tripSub: { fontSize: fontSizes.paragraph, color: '#4B4C52', marginTop: 2 },
  tripDate: { fontSize: fontSizes.paragraph, color: '#17181E', fontWeight: '600' },

  banner: { marginTop: 10, height: 100, backgroundColor: '#656568', alignItems: 'center', justifyContent: 'center' },
  bannerTxt: { textAlign: 'center', color: '#fff', fontSize: fontSizes.subMenu, fontWeight: '500' },

  overlay: { flex: 1, backgroundColor: '#00000066', justifyContent: 'center', paddingHorizontal: 18 },
  modalCard: { backgroundColor: '#F4F4F5', borderRadius: 18, borderWidth: 1, borderColor: '#E2E2E4', padding: 14 },
  modalTitle: { textAlign: 'center', color: '#17181E', fontSize: fontSizes.title, fontWeight: '700', marginBottom: 10 },
  modalTopActions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  modalAction: { width: 72, alignItems: 'center', position: 'relative' },
  minusBadge: { position: 'absolute', right: 12, top: -2, width: 12, height: 12, borderRadius: 6, backgroundColor: '#E11D48', alignItems: 'center', justifyContent: 'center', zIndex: 2 },
  plusBadge: { position: 'absolute', right: 4, top: -2, width: 12, height: 12, borderRadius: 6, backgroundColor: '#111', alignItems: 'center', justifyContent: 'center', zIndex: 2 },
  badgeChar: { color: '#fff', fontSize: fontSizes.paragraph, fontWeight: '700', lineHeight: 11 },
  addActionsHead: { color: '#191A20', fontSize: fontSizes.subMenu, fontWeight: '700', marginBottom: 8 },
  addGrid: { flexDirection: 'row', flexWrap: 'wrap', rowGap: 14 },
  addAction: { width: '25%', alignItems: 'center', position: 'relative' },
  saveBtn: { marginTop: 16, height: 46, backgroundColor: '#1A1B21', borderRadius: 23, alignItems: 'center', justifyContent: 'center' },
  saveTxt: { color: '#fff', fontSize: fontSizes.subMenu, fontWeight: '700' },
  cancelBtn: { marginTop: 10, height: 46, borderRadius: 23, borderWidth: 1.3, borderColor: '#25262C', alignItems: 'center', justifyContent: 'center' },
  cancelTxt: { color: '#1A1B21', fontSize: fontSizes.subMenu, fontWeight: '600' } });

export default HomeScreen;
