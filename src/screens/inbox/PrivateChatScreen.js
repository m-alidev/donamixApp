import React, { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const ATTACH_OPTIONS = [
  { id: 'media', label: 'Media', icon: 'image-outline' },
  { id: 'files', label: 'Files', icon: 'document-text-outline' },
  { id: 'maps', label: 'Maps', icon: 'map-outline' },
  { id: 'gift', label: 'Gift Premium', icon: 'gift-outline' },
  { id: 'coins', label: 'Coins transfer', icon: 'cash-outline' },
];

const PLANS = [
  { id: 'vip', title: 'VIP', duration: '1 Month', amount: '$199', active: false },
  { id: 'guardian', title: 'GUARDIAN', duration: '1 Month', amount: '$65', active: false },
  { id: 'admin', title: 'ADMIN', duration: '1 Month', amount: '$299', active: true },
];

const PrivateChatScreen = ({ navigation, route }) => {
  const [isQuickMenuVisible, setIsQuickMenuVisible] = useState(false);
  const [isTransferVisible, setIsTransferVisible] = useState(false);
  const [isGiftVisible, setIsGiftVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('admin');
  const threadName = route.params?.thread?.name || 'Smith Mathew';

  const onAttachPress = item => {
    setIsQuickMenuVisible(false);
    if (item.id === 'coins') {
      setIsTransferVisible(true);
    }
    if (item.id === 'gift') {
      setIsGiftVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIcon}>
          <Icon name="arrow-back" size={31} color="#111217" />
        </TouchableOpacity>
        <View style={styles.avatarWrap}>
          <Image source={images.avatar} style={styles.avatar} />
          <View style={styles.onlineDot} />
        </View>
        <Text style={styles.headerTitle}>{threadName}</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="videocam" size={24} color="#111217" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="call" size={23} color="#111217" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.leftRow}>
          <Image source={images.avatar} style={styles.msgAvatar} />
          <View style={styles.leftBubble}>
            <Text style={styles.leftBubbleText}>Are you still travelling?</Text>
          </View>
        </View>

        <View style={styles.rightRow}>
          <View style={styles.rightBubble}>
            <Text style={styles.rightBubbleText}>Yes, i’m at Istanbul..</Text>
          </View>
        </View>

        <View style={styles.leftRow}>
          <Image source={images.avatar} style={styles.msgAvatar} />
          <View style={styles.leftBubble}>
            <Text style={styles.leftBubbleText}>OoOo, Thats so Cool!</Text>
          </View>
        </View>

        <View style={styles.rightRow}>
          <View style={[styles.voiceBubble, styles.darkVoice]}>
            <View style={styles.playCircle}>
              <Icon name="play" size={16} color="#79B4AA" />
            </View>
            <Text style={styles.waveText}>···|||···|||||···</Text>
          </View>
        </View>

        <Text style={styles.dateLabel}>Thursday 24, 2022</Text>

        <View style={styles.leftRow}>
          <Image source={images.avatar} style={styles.msgAvatar} />
          <View style={styles.leftBubble}>
            <Text style={styles.leftBubbleText}>Hi, Did you heared?</Text>
          </View>
        </View>

        <View style={styles.leftRow}>
          <Image source={images.avatar} style={styles.msgAvatar} />
          <View style={[styles.voiceBubble, styles.lightVoice]}>
            <View style={styles.pauseCircle}>
              <Icon name="pause" size={12} color="#5D5D62" />
            </View>
            <Text style={styles.waveDark}>||| |||||| |||| ||||||</Text>
          </View>
        </View>

        <View style={styles.rightRow}>
          <View style={[styles.voiceBubble, styles.darkVoice]}>
            <View style={styles.playCircle}>
              <Icon name="play" size={16} color="#79B4AA" />
            </View>
            <Text style={styles.waveText}>··|||··|||||||··|||</Text>
          </View>
        </View>

        <View style={styles.leftRow}>
          <Image source={images.avatar} style={styles.msgAvatar} />
          <View style={styles.leftBubble}>
            <Text style={styles.leftBubbleText}>OoOo, Thats so Cool!</Text>
          </View>
        </View>

        <View style={styles.rightRow}>
          <View style={styles.rightBubble}>
            <Text style={styles.rightBubbleText}>yes! totally cool........</Text>
          </View>
        </View>
        <Text style={styles.seenText}>Seen...</Text>
      </ScrollView>

      <View style={styles.inputBar}>
        <TouchableOpacity style={styles.plusBtn} onPress={() => setIsQuickMenuVisible(prev => !prev)}>
          <Icon name="add" size={24} color="#111217" />
        </TouchableOpacity>
        <TextInput placeholder="Message..." placeholderTextColor="#4C4D52" style={styles.messageInput} />
        <TouchableOpacity style={styles.endIcon}>
          <Icon name="happy-outline" size={26} color="#111217" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.endIcon}>
          <Icon name="mic-outline" size={24} color="#111217" />
        </TouchableOpacity>
      </View>

      {isQuickMenuVisible && (
        <View style={styles.attachMenu}>
          {ATTACH_OPTIONS.map(item => (
            <TouchableOpacity key={item.id} style={styles.attachRow} onPress={() => onAttachPress(item)}>
              <Icon name={item.icon} size={24} color="#111217" />
              <Text style={styles.attachText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <Modal transparent visible={isTransferVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.transferModal}>
            <Text style={styles.modalTitle}>Transfer Coins</Text>
            <View style={styles.modalDivider} />
            <Text style={styles.modalSubtitle}>Send Coins to a Friend</Text>

            <TextInput placeholder="@Username" placeholderTextColor="#5A5B60" style={styles.modalInput} />

            <Text style={styles.amountTitle}>Select the amount</Text>
            <View style={styles.amountRow}>
              <TextInput placeholder="amount" placeholderTextColor="#BDBDC2" style={styles.amountInput} />
              <Text style={styles.coinIcon}>🪙</Text>
            </View>
            <Text style={styles.balanceText}>You have: 3,500 Coins</Text>

            <Text style={styles.messageLabel}>Message</Text>
            <TextInput
              placeholder="Want to add a message? type it...."
              placeholderTextColor="#B1B2B8"
              style={styles.messageBox}
              multiline
            />

            <TouchableOpacity style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryBtn} onPress={() => setIsTransferVisible(false)}>
              <Text style={styles.secondaryBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal transparent visible={isGiftVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.giftModal}>
            <Image source={images.avatar} style={styles.giftAvatar} />
            <Text style={styles.modalTitle}>Gift Premium</Text>
            <View style={styles.modalDivider} />
            <Text style={styles.giftDesc}>Give Premium account to {threadName} so he can also enjoy our premium perks...</Text>

            <View style={styles.planRow}>
              {PLANS.map(plan => (
                <TouchableOpacity
                  key={plan.id}
                  style={[styles.planCard, selectedPlan === plan.id ? styles.activePlan : null]}
                  onPress={() => setSelectedPlan(plan.id)}
                >
                  <Icon name="gift" size={36} color={selectedPlan === plan.id ? '#fff' : '#111217'} />
                  <Text style={[styles.planTitle, selectedPlan === plan.id ? styles.activePlanText : null]}>{plan.title}</Text>
                  <Text style={[styles.planDuration, selectedPlan === plan.id ? styles.activePlanText : null]}>{plan.duration}</Text>
                  <View style={styles.planPriceTag}>
                    <Text style={styles.planPriceText}>{plan.amount}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryBtn} onPress={() => setIsGiftVisible(false)}>
              <Text style={styles.secondaryBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: {
    height: 72,
    backgroundColor: '#F5F5F6',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerIcon: { padding: 8 },
  avatarWrap: { width: 54, height: 54, borderRadius: 27, marginHorizontal: 4 },
  avatar: { width: '100%', height: '100%', borderRadius: 27 },
  onlineDot: {
    position: 'absolute',
    right: 2,
    top: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F5F5F6',
    backgroundColor: '#77C5B7',
  },
  headerTitle: { flex: 1, fontSize: fontSizes.paragraph, fontWeight: '700', color: '#101116' },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 12, paddingTop: 12, paddingBottom: 28 },
  leftRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  rightRow: { alignItems: 'flex-end', marginBottom: 14 },
  msgAvatar: { width: 46, height: 46, borderRadius: 23, marginRight: 10 },
  leftBubble: { maxWidth: '76%', backgroundColor: '#E2E2E5', borderRadius: 18, paddingHorizontal: 14, paddingVertical: 10 },
  leftBubbleText: { color: '#35363C', fontSize: fontSizes.paragraph, fontWeight: '500' },
  rightBubble: { maxWidth: '76%', backgroundColor: '#202126', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 10 },
  rightBubbleText: { color: '#fff', fontSize: fontSizes.paragraph, fontWeight: '500' },
  dateLabel: { alignSelf: 'center', color: '#B5B5BA', fontSize: fontSizes.paragraph, marginBottom: 14, marginTop: 4 },
  voiceBubble: { minWidth: 208, borderRadius: 24, paddingHorizontal: 14, paddingVertical: 9, flexDirection: 'row', alignItems: 'center' },
  darkVoice: { backgroundColor: '#1E1F24' },
  lightVoice: { backgroundColor: '#DCDCDF' },
  playCircle: { width: 46, height: 46, borderRadius: 23, backgroundColor: '#F1F1F2', alignItems: 'center', justifyContent: 'center' },
  pauseCircle: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#EFEFF0', alignItems: 'center', justifyContent: 'center' },
  waveText: { marginLeft: 12, color: '#fff', fontSize: fontSizes.paragraph, letterSpacing: 2 },
  waveDark: { marginLeft: 10, color: '#303138', fontSize: fontSizes.paragraph, letterSpacing: 2 },
  seenText: { alignSelf: 'flex-end', color: '#57585D', marginRight: 8, marginTop: -6, fontSize: fontSizes.paragraph},
  inputBar: {
    marginHorizontal: 12,
    marginBottom: 10,
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DEDEE2',
    backgroundColor: '#EFEFF0',
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  plusBtn: { marginRight: 8 },
  messageInput: { flex: 1, color: '#15161B', fontSize: fontSizes.paragraph, paddingVertical: 0 },
  endIcon: { marginLeft: 8 },
  attachMenu: {
    position: 'absolute',
    left: 20,
    bottom: 78,
    width: 198,
    borderRadius: 14,
    backgroundColor: '#F8F8F9',
    borderWidth: 1,
    borderColor: '#E5E5E8',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  attachRow: {
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: '#E7E7EA',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  attachText: { color: '#121318', fontSize: fontSizes.subMenu, fontWeight: '500' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(21,22,26,0.25)', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16 },
  transferModal: {
    width: '100%',
    maxWidth: 530,
    borderRadius: 24,
    backgroundColor: '#F6F6F7',
    paddingHorizontal: 18,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  giftModal: {
    width: '100%',
    maxWidth: 530,
    borderRadius: 24,
    backgroundColor: '#F6F6F7',
    paddingHorizontal: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  modalTitle: { fontSize: fontSizes.buttonText, fontWeight: '700', color: '#111217', textAlign: 'center' },
  modalDivider: { marginTop: 8, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#CFCFD3', width: '100%' },
  modalSubtitle: { textAlign: 'center', color: '#222328', fontSize: fontSizes.subMenu, marginBottom: 14 },
  modalInput: {
    height: 58,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDEE1',
    backgroundColor: '#F8F8F9',
    fontSize: fontSizes.buttonText,
    color: '#212227',
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  amountTitle: { textAlign: 'center', color: '#18191E', fontSize: fontSizes.paragraph, fontWeight: '600' },
  amountRow: { marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 12, gap: 16 },
  amountInput: {
    width: 120,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDEE1',
    backgroundColor: '#F8F8F9',
    textAlign: 'center',
    color: '#191A20',
    fontSize: fontSizes.paragraph,
  },
  coinIcon: { fontSize: fontSizes.title},
  balanceText: { textAlign: 'center', fontSize: fontSizes.paragraph, color: '#18191E', fontWeight: '600', marginBottom: 14 },
  messageLabel: { color: '#23242A', fontSize: fontSizes.paragraph, marginBottom: 8 },
  messageBox: {
    height: 140,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDEE1',
    backgroundColor: '#F8F8F9',
    textAlignVertical: 'top',
    padding: 14,
    color: '#17181D',
    fontSize: fontSizes.paragraph,
    marginBottom: 16,
  },
  primaryBtn: { height: 56, borderRadius: 28, backgroundColor: '#0E0F14', alignItems: 'center', justifyContent: 'center', marginBottom: 12, width: '100%' },
  primaryBtnText: { color: '#fff', fontSize: fontSizes.buttonText, fontWeight: '600' },
  secondaryBtn: { height: 56, borderRadius: 28, borderWidth: 1.2, borderColor: '#0E0F14', alignItems: 'center', justifyContent: 'center', width: '100%' },
  secondaryBtnText: { color: '#23242A', fontSize: fontSizes.buttonText, fontWeight: '500' },
  giftAvatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  giftDesc: { textAlign: 'center', color: '#23242A', fontSize: fontSizes.paragraph, marginBottom: 14, width: '94%' },
  planRow: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18, paddingHorizontal: 4 },
  planCard: {
    width: '31%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#16171D',
    backgroundColor: '#F2F2F3',
    alignItems: 'center',
    paddingVertical: 12,
  },
  activePlan: { backgroundColor: '#06070C', borderColor: '#06070C' },
  planTitle: { marginTop: 8, color: '#121318', fontSize: fontSizes.paragraph, fontWeight: '700' },
  planDuration: { marginTop: 2, color: '#303138', fontSize: fontSizes.paragraph, marginBottom: 8 },
  activePlanText: { color: '#fff' },
  planPriceTag: { height: 30, borderRadius: 15, backgroundColor: '#111217', paddingHorizontal: 12, alignItems: 'center', justifyContent: 'center' },
  planPriceText: { color: '#fff', fontSize: fontSizes.paragraph, fontWeight: '700' },
});

export default PrivateChatScreen;
