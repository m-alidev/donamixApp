import React, { useMemo, useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const HOBBIES = ['Writing', 'Management', 'Cleaning', 'Serving', 'Industrial Cleaning', 'Customer Service'];
const GIFTS = [
  { id: 'g1', icon: '👑', count: 'x2' },
  { id: 'g2', icon: '💘', count: 'x8' },
  { id: 'g3', icon: '🍊', count: 'x19' },
  { id: 'g4', icon: '🧁', count: 'x27' },
];
const TRIPS = ['Abu Dhabi, United Arab Emirates', 'Abu Dhabi, United Arab Emirates', 'Abu Dhabi, United Arab Emirates'];

const OPTIONS = ['Block', 'Report', 'Copy profile URL', 'Share this Profile'];
const SUGGESTED = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];

const ProfileScreen = ({ navigation }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showMiniChat, setShowMiniChat] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [isPrivateView, setIsPrivateView] = useState(false);
  const [activeTab, setActiveTab] = useState('posts');

  const posts = useMemo(() => [images.avatar, images.avatar, images.avatar, images.avatar], []);

  const onPrimaryContactPress = () => {
    if (isPrivateView) {
      setIsPrivateView(false);
      return;
    }
    setShowMiniChat(true);
  };

  const onGiftPress = () => {
    setShowUpgrade(true);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.coverWrap}>
          <Image source={images.avatar} style={styles.coverImage} />
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={31} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreBtn} onPress={() => setShowOptions(true)}>
            <Icon name="ellipsis-vertical" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.mainCard}>
          <Image source={images.avatar} style={styles.profileAvatar} />
          <View style={styles.nameDivider} />
          <Text style={styles.name}>John Doe</Text>

          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>Lorem Ipsum has been the industry's standard dummy text ever since the when an.</Text>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.outlineBtn} onPress={onPrimaryContactPress}>
              <Text style={styles.outlineBtnText}>{isPrivateView ? 'Add Contact' : 'Send message'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.outlineBtn} onPress={() => setIsPrivateView(true)}>
              <Text style={styles.outlineBtnText}>{isPrivateView ? 'Add Contact' : 'Remove Contact'}</Text>
            </TouchableOpacity>
            {!isPrivateView && (
              <TouchableOpacity style={styles.giftBtn} onPress={onGiftPress}>
                <Icon name="gift-outline" size={32} color="#fff" />
              </TouchableOpacity>
            )}
          </View>

          {isPrivateView ? (
            <>
              <View style={styles.privateCard}>
                <View style={styles.lockWrap}>
                  <Icon name="lock-closed-outline" size={30} color="#111217" />
                </View>
                <Text style={styles.privateTitle}>This account is private</Text>
              </View>
              <Text style={styles.privateSub}>Connect with this member to stay updated and interact!</Text>

              <View style={styles.suggestedHead}>
                <Text style={styles.suggestedTitle}>Suggested for you</Text>
                <Text style={styles.seeAll}>See all</Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.suggestedRow}>
                {SUGGESTED.map((item, idx) => (
                  <View style={styles.suggestionCard} key={`${item}-${idx}`}>
                    <Image source={images.avatar} style={styles.suggestionAvatar} />
                    <Text style={styles.suggestionName}>{item}</Text>
                  </View>
                ))}
              </ScrollView>
            </>
          ) : (
            <>
              <View style={styles.detailsList}>
                <View style={styles.detailRow}>
                  <View style={styles.detailLabelWrap}>
                    <Icon name="briefcase-outline" size={18} color="#111217" />
                    <Text style={styles.detailLabel}>Work</Text>
                  </View>
                  <Text style={styles.detailValue}>Graphic designer</Text>
                </View>
                <View style={styles.detailRow}>
                  <View style={styles.detailLabelWrap}>
                    <Icon name="school-outline" size={18} color="#111217" />
                    <Text style={styles.detailLabel}>Education</Text>
                  </View>
                  <Text style={styles.detailValue}>BS, Computer science</Text>
                </View>
                <View style={styles.detailRow}>
                  <View style={styles.detailLabelWrap}>
                    <Icon name="earth-outline" size={18} color="#111217" />
                    <Text style={styles.detailLabel}>Country</Text>
                  </View>
                  <Text style={styles.detailValue}>London</Text>
                </View>
              </View>

              <Text style={styles.head}>Gifts Received</Text>
              <View style={styles.giftsRow}>
                {GIFTS.map(item => (
                  <View key={item.id} style={styles.giftItem}>
                    <Text style={styles.giftEmoji}>{item.icon}</Text>
                    <Text style={styles.giftCount}>{item.count}</Text>
                  </View>
                ))}
              </View>

              <Text style={styles.head}>Hobbies</Text>
              <View style={styles.hobbiesWrap}>
                {HOBBIES.map(hobby => (
                  <View style={styles.hobbyChip} key={hobby}>
                    <Text style={styles.hobbyText}>{hobby}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.tabContainer}>
                <TouchableOpacity
                  style={[styles.tabBtn, activeTab === 'posts' ? styles.tabActive : styles.tabInactive]}
                  onPress={() => setActiveTab('posts')}
                >
                  <Text style={[styles.tabText, activeTab === 'posts' ? styles.tabTextActive : null]}>All Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.tabBtn, activeTab === 'trips' ? styles.tabActive : styles.tabInactive]}
                  onPress={() => setActiveTab('trips')}
                >
                  <Text style={[styles.tabText, activeTab === 'trips' ? styles.tabTextActive : null]}>Trips</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>

        {!isPrivateView && activeTab === 'posts' ? (
          <View style={styles.postCard}>
              <View style={styles.postHead}>
                <Image source={images.avatar} style={styles.postAvatar} />
              <View style={styles.flexOne}>
                <Text style={styles.postName}>John Doe</Text>
                <Text style={styles.postTime}>54 minutes ago.</Text>
              </View>
              <Icon name="ellipsis-vertical" size={22} color="#111217" />
            </View>
            <View style={styles.postGrid}>
              {posts.map((item, idx) => (
                <Image key={`p-${idx}`} source={item} style={styles.postImage} />
              ))}
            </View>
          </View>
        ) : null}

        {!isPrivateView && activeTab === 'trips' ? (
          <View style={styles.tripsCard}>
            <Text style={styles.tripsHead}>Trips</Text>
            {TRIPS.map((trip, idx) => (
              <View key={`${trip}-${idx}`} style={styles.tripRow}>
                <Text style={styles.tripFlag}>🇦🇪</Text>
                <Text style={styles.tripPlace}>{trip}</Text>
                <Text style={styles.tripDate}>Jul 23 - Sept 21</Text>
                <Icon name="airplane" size={17} color="#111217" />
              </View>
            ))}
          </View>
        ) : null}
      </ScrollView>

      <Modal transparent visible={showOptions} animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={() => setShowOptions(false)}>
          <View style={styles.optionsMenu}>
            {OPTIONS.map(option => (
              <View key={option} style={styles.optionRow}>
                <Text style={styles.optionText}>{option}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal transparent visible={showMiniChat} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.chatSheet}>
            <View style={styles.chatHead}>
              <Text style={styles.chatTitle}>John Doe</Text>
              <View style={styles.chatIcons}>
                <Icon name="videocam" size={22} color="#111217" />
                <Icon name="call" size={22} color="#111217" />
                <Icon name="expand-outline" size={20} color="#111217" />
                <TouchableOpacity onPress={() => setShowMiniChat(false)}>
                  <Icon name="close" size={32} color="#111217" />
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView style={styles.sheetBody} contentContainerStyle={styles.sheetBodyContent}>
              <View style={styles.sheetLeft}>
                <Image source={images.avatar} style={styles.sheetAvatar} />
                <View style={styles.sheetBubble}>
                  <Text style={styles.sheetName}>John Doe</Text>
                  <Text style={styles.sheetMsg}>OoOo, Thats so Cool!</Text>
                </View>
              </View>

              <View style={styles.sheetRight}>
                <View style={[styles.voiceBar, styles.voiceDark]}>
                  <Text style={styles.voiceTxt}>···|||||····</Text>
                  <View style={styles.playDot}><Icon name="play" size={13} color="#6AB7A9" /></View>
                </View>
                <Text style={styles.timeStamp}>12:33 ✓✓</Text>
              </View>

              <View style={styles.sheetLeft}>
                <Image source={images.avatar} style={styles.sheetAvatar} />
                <View style={styles.sheetBubbleWide}>
                  <Text style={styles.sheetName}>John Doe</Text>
                  <Text style={styles.waveSheet}>|| |||||| |||||| ||||</Text>
                </View>
              </View>

              <View style={styles.sheetRight}>
                <View style={styles.replyBubble}>
                  <Text style={styles.replyTxt}>Yes, i’m at Istanbul..</Text>
                </View>
                <Text style={styles.timeStamp}>12:38 ✓✓</Text>
              </View>

              <View style={styles.unreadBar}>
                <Text style={styles.unreadTxt}>Unread Message</Text>
              </View>

              <View style={styles.sheetLeft}>
                <Image source={images.avatar} style={styles.sheetAvatar} />
                <View style={styles.sheetBubbleWide}>
                  <Text style={styles.sheetName}>John Doe</Text>
                  <Text style={styles.waveSheet}>|| |||||| |||||| ||||</Text>
                </View>
              </View>
            </ScrollView>

            <View style={styles.sheetInput}>
              <Icon name="happy-outline" size={28} color="#111217" />
              <Text style={styles.sheetInputText}>Message John...</Text>
              <Icon name="mic-outline" size={24} color="#111217" />
              <Icon name="paper-plane-outline" size={30} color="#111217" />
            </View>
          </View>
        </View>
      </Modal>

      <Modal transparent visible={showUpgrade} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.upgradeModal}>
            <Text style={styles.upgradeTitle}>Go Unlimited Today!</Text>
            <View style={styles.modalDivider} />
            <Text style={styles.upgradeDesc}>
              It seems you’re trying to access exclusive features. With your current plan, you can only message your own contacts or members you’ve added. To join
              locked chat hub and message users outside your contacts list, subscribe to one of our plans today!
            </Text>
            <Text style={styles.whyHead}>Why Subscribe?</Text>
            <View style={styles.benefitsRow}>
              <View style={styles.benefitItem}>
                <Icon name="chatbubble" size={24} color="#111217" />
                <Text style={styles.benefitText}>Unlock Chat Hubs</Text>
              </View>
              <View style={styles.benefitItem}>
                <Icon name="checkmark-circle" size={24} color="#111217" />
                <Text style={styles.benefitText}>Verified Badge</Text>
              </View>
            </View>
            <View style={styles.benefitsRow}>
              <View style={styles.benefitItem}>
                <Icon name="people" size={24} color="#111217" />
                <Text style={styles.benefitText}>Message Anyone</Text>
              </View>
              <View style={styles.benefitItem}>
                <Icon name="ellipsis-horizontal-circle" size={24} color="#111217" />
                <Text style={styles.benefitText}>& more...</Text>
              </View>
            </View>
            <Text style={styles.readyText}>Ready to enhance your experience?</Text>
            <TouchableOpacity style={styles.upgradeBtn}>
              <Text style={styles.upgradeBtnText}>Upgrade Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelBtn} onPress={() => setShowUpgrade(false)}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  screen: { flex: 1 },
  content: { paddingBottom: 20 },
  coverWrap: { height: 250, marginHorizontal: 16, marginTop: 8, borderTopLeftRadius: 6, borderTopRightRadius: 6, overflow: 'hidden' },
  coverImage: { width: '100%', height: '100%' },
  backBtn: { position: 'absolute', left: 14, top: 12, padding: 4 },
  moreBtn: { position: 'absolute', right: 12, top: 12, padding: 4 },

  mainCard: { marginHorizontal: 16, marginTop: -16, backgroundColor: '#ECECEE', borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingHorizontal: 14, paddingBottom: 16 },
  profileAvatar: { width: 120, height: 120, borderRadius: 60, borderWidth: 2, borderColor: '#ECECEE', alignSelf: 'center', marginTop: -64 },
  nameDivider: { borderBottomColor: '#BFBFC4', borderBottomWidth: 1, marginTop: 8 },
  name: { textAlign: 'center', fontSize: fontSizes.buttonText, fontWeight: '700', color: '#111217', marginTop: 8, marginBottom: 10 },
  sectionTitle: { fontSize: fontSizes.subMenu, fontWeight: '700', color: '#111217', marginBottom: 8 },
  aboutText: { fontSize: fontSizes.paragraph, color: '#222328', lineHeight: 31 / 2, width: '92%' },
  actionRow: { marginTop: 14, flexDirection: 'row', alignItems: 'center', gap: 10 },
  outlineBtn: {
    flex: 1,
    height: 68,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: '#111217',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECECEE',
  },
  outlineBtnText: { color: '#111217', fontSize: fontSizes.buttonText, fontWeight: '600' },
  giftBtn: { width: 68, height: 68, borderRadius: 20, backgroundColor: '#0F1014', alignItems: 'center', justifyContent: 'center' },

  detailsList: { marginTop: 14, gap: 10 },
  detailRow: { flexDirection: 'row', alignItems: 'center' },
  detailLabelWrap: { flexDirection: 'row', alignItems: 'center', gap: 8, width: '42%' },
  detailLabel: { fontSize: fontSizes.subMenu, color: '#111217', fontWeight: '500' },
  detailValue: { flex: 1, textAlign: 'right', fontSize: fontSizes.subMenu, color: '#64656B' },

  head: { fontSize: fontSizes.buttonText, color: '#111217', fontWeight: '700', marginTop: 16, marginBottom: 10 },
  giftsRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 20 },
  giftItem: { alignItems: 'center' },
  giftEmoji: { fontSize: fontSizes.title},
  giftCount: { fontSize: fontSizes.subMenu, color: '#111217', fontWeight: '700', marginTop: 2 },

  hobbiesWrap: { backgroundColor: '#DCDCDD', borderRadius: 20, padding: 12, flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  hobbyChip: { backgroundColor: '#0E0F14', borderRadius: 16, paddingHorizontal: 14, paddingVertical: 8 },
  hobbyText: { color: '#fff', fontSize: fontSizes.subMenu, fontWeight: '500' },

  tabContainer: { marginTop: 16, flexDirection: 'row', gap: 10 },
  tabBtn: { flex: 1, height: 64, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  tabActive: { backgroundColor: '#17181E' },
  tabInactive: { backgroundColor: '#DCDCDD' },
  tabText: { fontSize: fontSizes.buttonText, color: '#111217', fontWeight: '500' },
  tabTextActive: { color: '#fff' },

  postCard: { marginTop: 10, marginHorizontal: 16, backgroundColor: '#EDEDEF', borderRadius: 12, padding: 10 },
  postHead: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 10 },
  flexOne: { flex: 1 },
  postAvatar: { width: 58, height: 58, borderRadius: 29 },
  postName: { fontSize: fontSizes.buttonText, color: '#111217', fontWeight: '700' },
  postTime: { fontSize: fontSizes.subMenu, color: '#6D6E73' },
  postGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  postImage: { width: '50%', height: 190 },

  tripsCard: { marginTop: 10, marginHorizontal: 16, backgroundColor: '#EDEDEF', borderRadius: 12, padding: 12 },
  tripsHead: { fontSize: fontSizes.title, fontWeight: '700', color: '#111217', marginBottom: 8 },
  tripRow: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E0E0E3', paddingVertical: 14, gap: 10 },
  tripFlag: { fontSize: fontSizes.buttonText},
  tripPlace: { flex: 1, fontSize: fontSizes.subMenu, color: '#1F2025' },
  tripDate: { fontSize: fontSizes.subMenu, fontWeight: '700', color: '#111217' },

  privateCard: { marginTop: 48, alignItems: 'center' },
  lockWrap: { width: 72, height: 72, borderRadius: 36, borderWidth: 1.5, borderColor: '#111217', alignItems: 'center', justifyContent: 'center' },
  privateTitle: { marginTop: 10, fontSize: fontSizes.buttonText, fontWeight: '700', color: '#111217' },
  privateSub: { marginTop: 12, fontSize: fontSizes.subMenu, color: '#222328', textAlign: 'center', lineHeight: 30 },
  suggestedHead: { marginTop: 28, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  suggestedTitle: { fontSize: fontSizes.buttonText, fontWeight: '700', color: '#111217' },
  seeAll: { fontSize: fontSizes.subTitle, color: '#2C2D32' },
  suggestedRow: { gap: 10, paddingTop: 12 },
  suggestionCard: { width: 150, borderRadius: 10, backgroundColor: '#F5F5F6', alignItems: 'center', paddingVertical: 14, marginBottom: 6, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 7, shadowOffset: { width: 0, height: 4 }, elevation: 4 },
  suggestionAvatar: { width: 74, height: 74, borderRadius: 37, marginBottom: 10 },
  suggestionName: { fontSize: fontSizes.subMenu, color: '#222328', fontWeight: '700' },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(20,20,24,0.24)', justifyContent: 'center', alignItems: 'center' },
  optionsMenu: {
    width: 280,
    borderRadius: 12,
    backgroundColor: '#F4F4F5',
    borderWidth: 1,
    borderColor: '#E4E4E7',
    position: 'absolute',
    top: 190,
    right: 28,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  optionRow: { height: 66, borderBottomWidth: 1, borderBottomColor: '#E8E8EB', justifyContent: 'center', paddingHorizontal: 18 },
  optionText: { fontSize: fontSizes.buttonText, color: '#1A1B20' },

  chatSheet: { width: '90%', maxWidth: 560, height: '64%', backgroundColor: '#F4F4F5', borderTopLeftRadius: 18, borderTopRightRadius: 18, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 },
  chatHead: { height: 64, borderBottomWidth: 1, borderBottomColor: '#DEDEE2', paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center' },
  chatTitle: { flex: 1, fontSize: fontSizes.buttonText, fontWeight: '700', color: '#111217' },
  chatIcons: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  sheetBody: { flex: 1, paddingHorizontal: 10 },
  sheetBodyContent: { paddingVertical: 10 },
  sheetLeft: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  sheetAvatar: { width: 54, height: 54, borderRadius: 27, marginRight: 8 },
  sheetBubble: { backgroundColor: '#E0E0E3', borderRadius: 18, paddingHorizontal: 10, paddingVertical: 10, minWidth: 220 },
  sheetBubbleWide: { backgroundColor: '#E0E0E3', borderRadius: 18, paddingHorizontal: 10, paddingVertical: 10, minWidth: 260 },
  sheetName: { fontSize: fontSizes.subMenu, color: '#15161B', fontWeight: '700', marginBottom: 4 },
  sheetMsg: { fontSize: fontSizes.subMenu, color: '#45464C' },
  waveSheet: { fontSize: fontSizes.subMenu, color: '#2F3036' },
  sheetRight: { alignItems: 'flex-end', marginBottom: 12 },
  voiceBar: { minWidth: 190, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  voiceDark: { backgroundColor: '#1E1F24' },
  voiceTxt: { color: '#fff', fontSize: fontSizes.subTitle},
  playDot: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#F1F1F2', alignItems: 'center', justifyContent: 'center' },
  replyBubble: { backgroundColor: '#1E1F24', borderRadius: 18, paddingHorizontal: 12, paddingVertical: 8 },
  replyTxt: { color: '#fff', fontSize: fontSizes.subMenu},
  timeStamp: { marginTop: 4, fontSize: fontSizes.paragraph, color: '#6B6C72' },
  unreadBar: { height: 34, backgroundColor: '#E3E3E5', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  unreadTxt: { fontSize: fontSizes.subMenu, color: '#8B8C91' },
  sheetInput: { height: 58, borderRadius: 24, marginHorizontal: 12, marginBottom: 12, backgroundColor: '#DDDDDF', paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', gap: 10 },
  sheetInputText: { flex: 1, color: '#2C2D32', fontSize: fontSizes.subMenu},

  upgradeModal: {
    width: '86%',
    maxWidth: 560,
    borderRadius: 24,
    backgroundColor: '#F5F5F6',
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  upgradeTitle: { fontSize: fontSizes.title, color: '#111217', textAlign: 'center', fontWeight: '700' },
  modalDivider: { borderBottomWidth: 1, borderBottomColor: '#C8C8CC', marginTop: 10, marginBottom: 10 },
  upgradeDesc: { textAlign: 'center', color: '#23242A', fontSize: fontSizes.buttonText, lineHeight: 30 },
  whyHead: { textAlign: 'center', marginTop: 14, marginBottom: 8, color: '#111217', fontSize: fontSizes.buttonText, fontWeight: '700' },
  benefitsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  benefitItem: { width: '48%', flexDirection: 'row', alignItems: 'center', gap: 10 },
  benefitText: { color: '#1D1E23', fontSize: fontSizes.subMenu},
  readyText: { textAlign: 'center', color: '#111217', fontSize: fontSizes.buttonText, fontWeight: '700', marginTop: 6, marginBottom: 10 },
  upgradeBtn: { height: 56, borderRadius: 28, backgroundColor: '#0D0E12', alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
  upgradeBtnText: { color: '#fff', fontSize: fontSizes.buttonText, fontWeight: '600' },
  cancelBtn: { height: 56, borderRadius: 28, borderWidth: 1.5, borderColor: '#111217', alignItems: 'center', justifyContent: 'center' },
  cancelBtnText: { color: '#222328', fontSize: fontSizes.buttonText, fontWeight: '500' },
});

export default ProfileScreen;
