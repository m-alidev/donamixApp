import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../constants/navigation';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const THREADS = [
  { id: 't1', name: 'Smith Mathew', message: 'Hi, David. Hope you’re doing....', time: '29 mar', unread: 2, online: true },
  { id: 't2', name: 'John Walton', message: 'I’am sending you a parcel rece..', time: '08 Feb', online: false },
  { id: 't3', name: 'Merry An.', message: 'Would love to hear today’s part..', time: 'online', unread: 14, online: true },
  { id: 't4', name: 'Monica Randawa', message: 'Hope you’re doing well today..', time: '02 Feb', online: true },
  { id: 't5', name: 'Innoxent Jay', message: 'Let’s get back to the work, You..', time: '25 Jan', online: false },
  { id: 't6', name: 'Harry Samit', message: 'Listen david, i have a problem..', time: 'online', online: true },
  { id: 't7', name: 'John Walton', message: 'I’am sending you a parcel rece..', time: '08 Feb', online: false },
  { id: 't8', name: 'Monica Randawa', message: 'Hope you’re doing well today..', time: '02 Feb', online: true },
];

const MENU_ITEMS = [
  { id: 'profile', icon: 'person-outline', label: 'View profile' },
  { id: 'pin', icon: 'attach-outline', label: 'Pin Chat' },
  { id: 'mute', icon: 'volume-mute-outline', label: 'Mute' },
  { id: 'delete', icon: 'trash-outline', label: 'Delete Chat' },
  { id: 'block', icon: 'ban-outline', label: 'Block' },
];

const InboxScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [activeThread, setActiveThread] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 210, left: 70 });

  const filteredThreads = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return THREADS;
    }
    return THREADS.filter(item => item.name.toLowerCase().includes(term) || item.message.toLowerCase().includes(term));
  }, [query]);

  const onOpenMenu = (thread, evt) => {
    setActiveThread(thread);
    setMenuPosition({
      top: evt?.nativeEvent?.pageY ? evt.nativeEvent.pageY - 35 : 210,
      left: 86,
    });
  };

  const onOpenThread = thread => {
    navigation.navigate(ROUTES.PRIVATE_CHAT, { thread });
  };

  const renderThread = ({ item }) => (
    <Pressable style={styles.threadRow} onPress={() => onOpenThread(item)} onLongPress={evt => onOpenMenu(item, evt)}>
      <View style={styles.avatarWrap}>
        <Image source={images.avatar} style={styles.avatar} />
        {item.online && <View style={styles.onlineDot} />}
      </View>
      <View style={styles.threadContent}>
        <Text style={styles.threadName}>{item.name}</Text>
        <Text numberOfLines={1} style={styles.threadMsg}>
          {item.message}
        </Text>
      </View>
      <View style={styles.threadMeta}>
        <Text style={[styles.metaText, item.time === 'online' ? styles.onlineText : null]}>{item.time}</Text>
        {item.unread ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.unread}</Text>
          </View>
        ) : null}
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIcon}>
            <Icon name="arrow-back" size={30} color="#111217" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Inbox</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerIcon}>
              <Icon name="download-outline" size={26} color="#111217" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <Icon name="create-outline" size={26} color="#111217" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchWrap}>
          <Icon name="search-outline" size={36} color="#212226" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search here.."
            placeholderTextColor="#B7B7BB"
            style={styles.searchInput}
          />
        </View>

        <View style={styles.filterWrap}>
          <Icon name="options-outline" size={24} color="#111217" />
        </View>

        <FlatList
          data={filteredThreads}
          keyExtractor={item => item.id}
          renderItem={renderThread}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />

        <TouchableOpacity style={styles.startChatBtn} activeOpacity={0.85} onPress={() => onOpenThread(THREADS[0])}>
          <Icon name="chatbox-outline" size={20} color="#fff" />
          <Text style={styles.startChatText}>Start Chat</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent visible={Boolean(activeThread)} animationType="fade">
        <Pressable style={styles.overlay} onPress={() => setActiveThread(null)}>
          <Pressable style={[styles.contextMenu, menuPosition]} onPress={evt => evt.stopPropagation()}>
            {MENU_ITEMS.map(item => (
              <View key={item.id} style={styles.menuRow}>
                <Icon name={item.icon} size={22} color="#131418" />
                <Text style={styles.menuText}>{item.label}</Text>
              </View>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  container: { flex: 1, paddingHorizontal: 16 },
  header: { flexDirection: 'row', alignItems: 'center', paddingTop: 8 },
  headerIcon: { padding: 6 },
  headerTitle: { flex: 1, fontSize: fontSizes.buttonText, fontWeight: '700', color: '#111217', marginLeft: 8 },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  searchWrap: {
    marginTop: 12,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#D9D9DD',
    backgroundColor: '#EFEFF1',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: { flex: 1, fontSize: fontSizes.subMenu, color: '#202125', marginLeft: 8, paddingVertical: 0 },
  filterWrap: { alignItems: 'flex-end', paddingVertical: 10, paddingRight: 2 },
  listContent: { paddingBottom: 118 },
  threadRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  avatarWrap: { width: 58, height: 58, borderRadius: 29, marginRight: 12 },
  avatar: { width: '100%', height: '100%', borderRadius: 29 },
  onlineDot: {
    position: 'absolute',
    right: 1,
    top: 1,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#62C0B3',
    borderWidth: 1,
    borderColor: '#ECECEE',
  },
  threadContent: { flex: 1, paddingRight: 8 },
  threadName: { fontSize: fontSizes.paragraph, fontWeight: '700', color: '#14151A' },
  threadMsg: { marginTop: 4, fontSize: fontSizes.paragraph, color: '#BCBCC1', fontWeight: '600' },
  threadMeta: { alignItems: 'flex-end', justifyContent: 'center', minWidth: 55 },
  metaText: { fontSize: fontSizes.paragraph, color: '#B8B8BE', fontWeight: '500' },
  onlineText: { color: '#3CA79A' },
  badge: { marginTop: 8, minWidth: 24, height: 24, borderRadius: 12, paddingHorizontal: 7, backgroundColor: '#EE0505', alignItems: 'center', justifyContent: 'center' },
  badgeText: { color: '#fff', fontWeight: '700', fontSize: fontSizes.paragraph},
  startChatBtn: {
    position: 'absolute',
    right: 22,
    bottom: 20,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#0F1014',
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  startChatText: { fontSize: fontSizes.subMenu, color: '#fff', fontWeight: '600' },
  overlay: { flex: 1, backgroundColor: 'rgba(18,18,20,0.1)' },
  contextMenu: {
    position: 'absolute',
    width: 230,
    backgroundColor: '#F6F6F7',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E4E4E7',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 9,
  },
  menuRow: {
    height: 58,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E9',
    gap: 12,
  },
  menuText: { fontSize: fontSizes.subMenu, color: '#17181E', fontWeight: '500' },
});

export default InboxScreen;
