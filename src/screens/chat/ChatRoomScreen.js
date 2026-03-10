import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../constants/navigation';
import fontSizes from '../../constants/fontsize';

const ChatRoomScreen = ({ navigation, route }) => {
  const [topMenu, setTopMenu] = useState(false);
  const [msgMenu, setMsgMenu] = useState(false);
  const [quickMenu, setQuickMenu] = useState(false);
  const [kickedVisible, setKickedVisible] = useState(false);
  const [leaveVisible, setLeaveVisible] = useState(false);
  const [rulesVisible, setRulesVisible] = useState(false);
  const [blockVisible, setBlockVisible] = useState(false);
  const title = route.params?.hub?.title || 'The Travel Adventure Club';

  const onTopMenuAction = item => {
    setTopMenu(false);
    if (item === 'Members') navigation.navigate(ROUTES.MEMBERS);
    if (item === 'Media') navigation.navigate(ROUTES.ALL_MEDIA, { tab: 'media' });
    if (item === 'Private Chat') navigation.navigate(ROUTES.PRIVATE_CHAT, { thread: { name: 'Username here' } });
    if (item === 'Chat Rules') setRulesVisible(true);
    if (item === 'Block list') setBlockVisible(true);
    if (item === 'Leave') setLeaveVisible(true);
  };

  const onMessageMenuAction = item => {
    setMsgMenu(false);
    if (item === 'Kick out') setKickedVisible(true);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topBar}>
        <View style={styles.leftTop}>
          <Text style={styles.plane}>✈️</Text>
          <Text style={styles.topTitle}>{title}</Text>
        </View>
        <View style={styles.rightTop}>
          <TouchableOpacity onPress={() => setTopMenu(true)}><Icon name="settings-outline" size={20} color="#111" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.MEMBERS)}><Icon name="person" size={18} color="#111" /></TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.chat}>
        <View style={styles.rowLeft}>
          <View style={styles.avatar} />
          <View>
            <View style={styles.nameRow}><Text style={styles.sender}>John Doe</Text><Text style={styles.badge}>VIP</Text></View>
            <TouchableOpacity style={styles.leftBubble} onLongPress={() => setMsgMenu(true)}><Text style={styles.leftText}>Are you still travelling?</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.rowRight}><View style={styles.rightBubble}><Text style={styles.rightText}>Yes, i’m at Istanbul..</Text></View></View>

        <Text style={styles.system}>Thursday 24, 2022</Text>

        <View style={styles.rowLeft}>
          <View style={styles.avatarDark} />
          <View>
            <View style={styles.nameRow}><Text style={styles.sender}>Emma Stone</Text><Text style={[styles.badge, styles.admin]}>Admin</Text></View>
            <View style={styles.leftBubble}><Text style={styles.leftText}>OoOo, Thats so Cool!</Text></View>
          </View>
        </View>

        <View style={styles.rowRight}><View style={styles.voiceBubble}><View style={styles.playBtn}><Icon name="play" size={14} color="#6E8A80" /></View><Text style={styles.wave}>···|······|···</Text></View></View>
      </ScrollView>

      <View style={styles.inputBar}>
        <TouchableOpacity style={styles.plus} onPress={() => setQuickMenu(prev => !prev)}><Icon name="add" size={18} color="#111" /></TouchableOpacity>
        <Text style={styles.placeholder}>Message...</Text>
        <View style={styles.endIcons}><Icon name="happy-outline" size={18} color="#111" /><Icon name="mic-outline" size={18} color="#111" /></View>
      </View>

      {quickMenu && (
        <View style={styles.quickMenu}>
          <Text style={styles.quickItem}><Icon name="camera-outline" size={14} color="#111" />  Photo/Video</Text>
          <Text style={styles.quickItem}><Icon name="cash-outline" size={14} color="#111" />  Coins transfer</Text>
        </View>
      )}

      <Modal visible={topMenu} transparent animationType="fade" onRequestClose={() => setTopMenu(false)}>
        <TouchableOpacity style={styles.overlay} onPress={() => setTopMenu(false)}>
          <View style={styles.menuTop}>
            {['Members', 'Media', 'Chat Rules', 'Block list', 'Private Chat', 'Leave'].map(item => (
              <TouchableOpacity key={item} onPress={() => onTopMenuAction(item)}>
                <Text style={styles.menuItem}><Icon name="chevron-forward" size={12} color="#111" /> {item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal visible={msgMenu} transparent animationType="fade" onRequestClose={() => setMsgMenu(false)}>
        <TouchableOpacity style={styles.overlay} onPress={() => setMsgMenu(false)}>
          <View style={styles.menuMsg}>
            {['Delete message', 'Private message', 'Send gift', 'View profile', 'Block', 'Kick out', 'Mute', 'Reply'].map(item => (
              <TouchableOpacity key={item} onPress={() => onMessageMenuAction(item)}>
                <Text style={styles.menuItem}><Icon name="chevron-forward" size={12} color="#111" /> {item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal visible={kickedVisible} transparent animationType="fade" onRequestClose={() => setKickedVisible(false)}>
        <View style={styles.overlayStrong}>
          <View style={styles.kickedCard}>
            <Text style={styles.kickedTitle}>Kicked....</Text>
            <View style={styles.sep} />
            <Text style={styles.kickedText}>You have been kicked from the room .</Text>
            <Text style={styles.kickedEmoji}>🚪🏃</Text>
            <Text style={styles.kickedSub}>Join another room or <Text style={styles.kickedBold}>try again</Text> in 1 hour.</Text>
            <TouchableOpacity style={styles.leaveBtn} onPress={() => { setKickedVisible(false); navigation.goBack(); }}>
              <Text style={styles.leaveTxt}>Leave</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={leaveVisible} transparent animationType="fade" onRequestClose={() => setLeaveVisible(false)}>
        <View style={styles.overlayStrong}>
          <View style={styles.kickedCard}>
            <Text style={styles.kickedTitle}>Leave Group</Text>
            <View style={styles.sep} />
            <Text style={styles.kickedText}>Are you sure you want to leave this chat hub?</Text>
            <View style={styles.modalBtnRow}>
              <TouchableOpacity style={styles.cancelModalBtn} onPress={() => setLeaveVisible(false)}>
                <Text style={styles.cancelModalTxt}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.leaveBtnHalf} onPress={() => { setLeaveVisible(false); navigation.goBack(); }}>
                <Text style={styles.leaveTxt}>Leave</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={rulesVisible} transparent animationType="fade" onRequestClose={() => setRulesVisible(false)}>
        <TouchableOpacity style={styles.overlayStrong} onPress={() => setRulesVisible(false)}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Chat Rules</Text>
            <Text style={styles.infoText}>1. Be respectful to all members.</Text>
            <Text style={styles.infoText}>2. No hate speech or harassment.</Text>
            <Text style={styles.infoText}>3. No spam, scams, or misleading links.</Text>
            <Text style={styles.infoText}>4. Follow admin and moderator decisions.</Text>
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal visible={blockVisible} transparent animationType="fade" onRequestClose={() => setBlockVisible(false)}>
        <TouchableOpacity style={styles.overlayStrong} onPress={() => setBlockVisible(false)}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Block List</Text>
            <Text style={styles.infoText}>• Alex Carter</Text>
            <Text style={styles.infoText}>• User_291</Text>
            <Text style={styles.infoText}>• BadActor_91</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  topBar: { height: 52, borderBottomWidth: 1, borderBottomColor: '#DEDEE0', backgroundColor: '#F4F4F5', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 },
  leftTop: { flexDirection: 'row', alignItems: 'center', gap: 8, flex: 1 },
  plane: { fontSize: fontSizes.subMenu},
  topTitle: { fontSize: fontSizes.subMenu, fontWeight: '700', color: '#15161B' },
  rightTop: { flexDirection: 'row', gap: 12 },

  chat: { flex: 1, paddingHorizontal: 10, paddingTop: 10 },
  rowLeft: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 12 },
  rowRight: { alignItems: 'flex-end', marginBottom: 12 },
  avatar: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#D0A75E', marginRight: 8 },
  avatarDark: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#303239', marginRight: 8 },
  nameRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 2 },
  sender: { fontSize: fontSizes.subMenu, fontWeight: '700', color: '#17181E', marginRight: 6 },
  badge: { backgroundColor: '#111', color: '#fff', fontSize: fontSizes.paragraph, paddingHorizontal: 6, paddingVertical: 1, borderRadius: 6, overflow: 'hidden', fontWeight: '700' },
  admin: { backgroundColor: '#E21D2F' },
  leftBubble: { backgroundColor: '#E4E4E6', borderRadius: 14, paddingHorizontal: 12, paddingVertical: 8 },
  leftText: { color: '#35363B', fontSize: fontSizes.subTitle},
  rightBubble: { backgroundColor: '#1F2025', borderRadius: 18, paddingHorizontal: 16, paddingVertical: 10 },
  rightText: { color: '#fff', fontSize: fontSizes.subTitle},
  voiceBubble: { backgroundColor: '#1F2025', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', gap: 10 },
  playBtn: { width: 26, height: 26, borderRadius: 13, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  wave: { color: '#fff', fontSize: fontSizes.subTitle},
  system: { textAlign: 'center', color: '#A0A0A5', fontSize: fontSizes.paragraph, marginBottom: 12 },

  inputBar: { height: 44, margin: 8, borderRadius: 12, borderWidth: 1, borderColor: '#DDDDDF', backgroundColor: '#F2F2F3', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8 },
  plus: { width: 24, height: 24, borderRadius: 12, borderWidth: 1, borderColor: '#222', alignItems: 'center', justifyContent: 'center' },
  placeholder: { marginLeft: 8, flex: 1, color: '#3C3D42', fontSize: fontSizes.paragraph},
  endIcons: { flexDirection: 'row', gap: 8 },

  quickMenu: { position: 'absolute', left: 16, bottom: 62, width: 130, backgroundColor: '#FBFBFB', borderRadius: 10, borderWidth: 1, borderColor: '#E3E3E4', paddingVertical: 8, paddingHorizontal: 8, shadowColor: '#000', shadowOpacity: 0.18, shadowRadius: 8, shadowOffset: { width: 0, height: 5 }, elevation: 6 },
  quickItem: { fontSize: fontSizes.subTitle, color: '#191A20', marginVertical: 4 },

  overlay: { flex: 1, backgroundColor: '#00000015' },
  overlayStrong: { flex: 1, backgroundColor: '#00000044', justifyContent: 'center', paddingHorizontal: 12 },
  menuTop: { position: 'absolute', right: 18, top: 58, width: 160, backgroundColor: '#FBFBFB', borderRadius: 10, borderWidth: 1, borderColor: '#E4E4E6', paddingVertical: 6 },
  menuMsg: { position: 'absolute', right: 26, top: 240, width: 190, backgroundColor: '#FBFBFB', borderRadius: 10, borderWidth: 1, borderColor: '#E4E4E6', paddingVertical: 6 },
  menuItem: { fontSize: fontSizes.subTitle, color: '#1C1D23', paddingHorizontal: 10, paddingVertical: 8 },
  kickedCard: { backgroundColor: '#F5F5F6', borderRadius: 18, padding: 16, borderWidth: 1, borderColor: '#E3E3E4' },
  kickedTitle: { textAlign: 'center', color: '#1A1B21', fontSize: fontSizes.buttonText, fontWeight: '700' },
  sep: { marginTop: 10, height: 1, backgroundColor: '#CFCFD2' },
  kickedText: { marginTop: 10, textAlign: 'center', color: '#2D2E34', fontSize: fontSizes.paragraph},
  kickedEmoji: { textAlign: 'center', fontSize: fontSizes.title, marginTop: 14 },
  kickedSub: { textAlign: 'center', color: '#2D2E34', fontSize: fontSizes.subMenu, marginTop: 6 },
  kickedBold: { fontWeight: '700' },
  leaveBtn: { height: 52, borderRadius: 26, backgroundColor: '#1A1B21', alignItems: 'center', justifyContent: 'center', marginTop: 14 },
  leaveBtnHalf: { flex: 1, height: 46, borderRadius: 23, backgroundColor: '#1A1B21', alignItems: 'center', justifyContent: 'center' },
  leaveTxt: { color: '#fff', fontSize: fontSizes.subMenu, fontWeight: '600' },
  modalBtnRow: { marginTop: 14, flexDirection: 'row', gap: 10 },
  cancelModalBtn: { flex: 1, height: 46, borderRadius: 23, borderWidth: 1, borderColor: '#222', alignItems: 'center', justifyContent: 'center' },
  cancelModalTxt: { color: '#1A1B21', fontSize: fontSizes.subMenu, fontWeight: '600' },
  infoCard: { backgroundColor: '#F5F5F6', borderRadius: 14, padding: 14, borderWidth: 1, borderColor: '#E3E3E4' },
  infoTitle: { color: '#191A20', fontSize: fontSizes.subMenu, fontWeight: '700', marginBottom: 8 },
  infoText: { color: '#2F3035', fontSize: fontSizes.subTitle, lineHeight: 22 },
});

export default ChatRoomScreen;
