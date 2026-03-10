import React, { useMemo, useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import { ROUTES } from '../../constants/navigation';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const CALL_LOGS = [
  { id: 'c1', name: 'Anna Randawa', date: '12/27/24, 7:30 PM', missed: true, incoming: true, mode: 'video' },
  { id: 'c2', name: 'Bill Walton', date: '12/27/24, 7:30 PM', missed: true, incoming: true, mode: 'audio' },
  { id: 'c3', name: 'Dr Jay', date: '12/27/24, 7:30 PM', missed: false, incoming: false, mode: 'video' },
  { id: 'c4', name: 'Errey Samit', date: '12/27/24, 7:30 PM', missed: true, incoming: true, mode: 'audio' },
  { id: 'c5', name: 'Bill Walton', date: '12/27/24, 7:30 PM', missed: false, incoming: false, mode: 'audio' },
];
const DIAL_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

const CallsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('missed');
  const [query, setQuery] = useState('');
  const [isDialerVisible, setIsDialerVisible] = useState(false);
  const [dialValue, setDialValue] = useState('');

  const listData = useMemo(() => {
    let data = activeTab === 'missed' ? CALL_LOGS : [];
    if (query.trim()) {
      data = data.filter(item => item.name.toLowerCase().includes(query.trim().toLowerCase()));
    }
    return data;
  }, [activeTab, query]);

  const renderRow = ({ item }) => (
    <TouchableOpacity style={styles.row} activeOpacity={0.85}>
      <Image source={images.avatar} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.time}>{item.date}</Text>
      </View>
      <Icon
        name={item.incoming ? 'arrow-down-outline' : 'arrow-up-outline'}
        size={30}
        color={item.missed ? '#FA0B0B' : '#22B32A'}
        style={styles.direction}
      />
      <Icon name={item.mode === 'video' ? 'videocam' : 'call'} size={24} color="#111217" />
    </TouchableOpacity>
  );

  const onDialPress = key => setDialValue(prev => `${prev}${key}`);
  const onBackspace = () => setDialValue(prev => prev.slice(0, -1));

  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Call Logs" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} leftSize={29} />}
    >
      <View style={styles.searchWrap}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search"
          placeholderTextColor="#737379"
          style={styles.searchInput}
        />
        <Icon name="search-outline" size={30} color="#87878D" />
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'all' ? styles.tabActive : styles.tabInactive]}
          onPress={() => setActiveTab('all')}
        >
          <Text style={[styles.tabText, activeTab === 'all' ? styles.tabTextActive : null]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'missed' ? styles.tabActive : styles.tabInactive]}
          onPress={() => setActiveTab('missed')}
        >
          <Text style={[styles.tabText, activeTab === 'missed' ? styles.tabTextActive : null]}>Missed</Text>
        </TouchableOpacity>
      </View>

      {listData.length > 0 ? (
        <FlatList
          data={listData}
          keyExtractor={item => item.id}
          renderItem={renderRow}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyWrap}>
          <View style={styles.emptyIconWrap}>
            <Icon name="call-outline" size={54} color="#111217" />
          </View>
          <Text style={styles.emptyText}>
            You don't have any call records to display.
            {'\n'}To start calling, tap <Icon name="call-outline" size={15} color="#111217" /> at the bottom right side of your screen.
          </Text>
          <TouchableOpacity style={styles.inviteBtn} onPress={() => navigation.navigate(ROUTES.CONTACTS)}>
            <Text style={styles.inviteText}>INVITE CONTACTS</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.fab} onPress={() => setIsDialerVisible(true)}>
        <Icon name="person-add-outline" size={15} color="#fff" />
        <Icon name="call-outline" size={15} color="#fff" />
      </TouchableOpacity>

      <Modal transparent visible={isDialerVisible} animationType="slide" onRequestClose={() => setIsDialerVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.dialerSheet}>
            <View style={styles.dialerHeader}>
              <Text style={styles.dialerTitle}>Dial Number</Text>
              <TouchableOpacity onPress={() => setIsDialerVisible(false)}>
                <Icon name="close" size={28} color="#111217" />
              </TouchableOpacity>
            </View>

            <View style={styles.dialInputWrap}>
              <TextInput
                value={dialValue}
                onChangeText={setDialValue}
                style={styles.dialInput}
                placeholder="Enter number"
                placeholderTextColor="#8E8F94"
                keyboardType="phone-pad"
                autoFocus
              />
              <TouchableOpacity onPress={onBackspace}>
                <Icon name="backspace-outline" size={27} color="#111217" />
              </TouchableOpacity>
            </View>

            <View style={styles.keypad}>
              {DIAL_KEYS.map(key => (
                <TouchableOpacity key={key} style={styles.key} onPress={() => onDialPress(key)}>
                  <Text style={styles.keyText}>{key}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.callBtn}>
              <Icon name="call" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 8, paddingBottom: 8 },
  backBtn: { marginRight: 10 },
  headerTitle: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700' },
  searchWrap: {
    marginHorizontal: 16,
    marginTop: 4,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#D9D9DE',
    backgroundColor: '#EFEFF1',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  searchInput: { flex: 1, color: '#1D1E23', fontSize: fontSizes.paragraph, paddingVertical: 0 },
  tabs: { marginHorizontal: 16, marginTop: 12, flexDirection: 'row', borderWidth: 1, borderColor: '#D6D6DA', borderRadius: 24, overflow: 'hidden' },
  tabBtn: { flex: 1, height: 48, alignItems: 'center', justifyContent: 'center' },
  tabActive: { backgroundColor: '#090A0F' },
  tabInactive: { backgroundColor: '#ECECEE' },
  tabText: { color: '#17181E', fontSize: fontSizes.subMenu, fontWeight: '600' },
  tabTextActive: { color: '#fff' },
  listContent: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 120 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  info: { flex: 1 },
  name: { color: '#1A1B20', fontSize: fontSizes.buttonText, fontWeight: '600' },
  time: { color: '#9A9AA0', fontSize: fontSizes.subTitle, marginTop: 2 },
  direction: { marginRight: 16 },
  emptyWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 34, paddingBottom: 120 },
  emptyIconWrap: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#F3F3F4',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },
  emptyText: { textAlign: 'center', color: '#7B7C82', fontSize: fontSizes.subMenu, lineHeight: 27, marginTop: 30 },
  inviteBtn: { marginTop: 20, height: 56, borderRadius: 28, backgroundColor: '#0A0B10', paddingHorizontal: 22, alignItems: 'center', justifyContent: 'center' },
  inviteText: { color: '#fff', fontSize: fontSizes.subMenu, fontWeight: '600' },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 74,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0A0B10',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 7 },
    elevation: 8,
  },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(15,15,18,0.24)', justifyContent: 'flex-end' },
  dialerSheet: {
    backgroundColor: '#F1F1F2',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },
  dialerHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  dialerTitle: { color: '#111217', fontSize: fontSizes.buttonText, fontWeight: '700' },
  dialInputWrap: {
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9D9DE',
    backgroundColor: '#F7F7F8',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  dialInput: { flex: 1, color: '#111217', fontSize: fontSizes.paragraph, paddingVertical: 0 },
  keypad: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 10, marginBottom: 16 },
  key: {
    width: '31%',
    height: 58,
    borderRadius: 14,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E2E2E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: { color: '#111217', fontSize: fontSizes.title, fontWeight: '600' },
  callBtn: {
    alignSelf: 'center',
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#0A0B10',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CallsScreen;
