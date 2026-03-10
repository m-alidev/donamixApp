import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../constants/navigation';
import fontSizes from '../../constants/fontsize';

const shortcuts = [
  { id: '1', title: 'Inbox', icon: 'chatbubble-outline', color: '#FDEBEC', route: ROUTES.INBOX },
  { id: '2', title: 'Contacts', icon: 'people-outline', color: '#FDF3EA', route: ROUTES.CONTACTS },
  { id: '3', title: 'Wallet', icon: 'wallet-outline', color: '#F7E8FF' },
  { id: '4', title: 'Radio', icon: 'radio-outline', color: '#ECE9FF', route: ROUTES.RADIO },
  { id: '5', title: 'Live Streams', icon: 'disc-outline', color: '#FFECEF' },
  { id: '6', title: 'Connect', icon: 'chatbubble-ellipses-outline', color: '#FCEDED' },
  { id: '7', title: 'Games', icon: 'game-controller-outline', color: '#FFF5DC' },
  { id: '8', title: 'Trips', icon: 'airplane-outline', color: '#E8F0FF' },
  { id: '9', title: 'Ambassadors', icon: 'folder-open-outline', color: '#FFF3DE' },
  { id: '10', title: 'Upgrade', icon: 'diamond-outline', color: '#F2ECFF' },
  { id: '11', title: 'Settings', icon: 'settings-outline', color: '#EFF0F2', route: ROUTES.SETTINGS },
  { id: '12', title: 'Visitors', icon: 'eye-outline', color: '#FFF5C8' },
];

const people = [
  { id: '1', name: 'John Doe', badge: 'Subscribed to VIP' },
  { id: '2', name: 'John Doe', badge: 'Subscribed to Admin' },
  { id: '3', name: 'John Doe', badge: 'Subscribed to Guardian' },
];
const sections = [
  { id: 'spotlight', title: 'DAILY SPOTLIGHT', rightText: 'See all' },
  { id: 'birthdays', title: 'UPCOMING BIRTHDAYS', rightText: 'See all' },
];

const MainMenuScreen = ({ navigation }) => {
  const onShortcutPress = item => {
    if (item.route) {
      navigation.navigate(item.route);
    }
  };

  const renderHeader = () => (
    <View style={styles.topCard}>
      <View style={styles.searchRow}>
        <View style={styles.avatar} />
        <View style={styles.searchInputWrap}>
          <TextInput placeholder="Search" placeholderTextColor="#87878E" style={styles.searchInput} />
          <Icon name="search-outline" size={22} color="#888" />
        </View>
      </View>

      <Text style={styles.hello}>Hello John</Text>
      <View style={styles.metaRow}>
        <Icon name="location-outline" size={16} color="#E0B000" />
        <Text style={styles.metaText}>Saint Petersburg | Coins: <Text style={styles.metaBold}>650</Text> 🪙</Text>
        <View style={styles.buy}><Text style={styles.buyText}>Buy</Text></View>
      </View>

      <View style={styles.grid}>
        {shortcuts.map(item => (
          <TouchableOpacity key={item.id} style={styles.gridItem} activeOpacity={0.8} onPress={() => onShortcutPress(item)}>
            <View style={[styles.gridIconWrap, { backgroundColor: item.color }]}>
              <Icon name={item.icon} size={25} color="#4C4C54" />
            </View>
            <Text style={styles.gridText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderSection = ({ item }) => (
    <View style={styles.sectionCard}>
      <View style={styles.sectionTop}><Text style={styles.sectionTitle}>{item.title}</Text><Text style={styles.seeAll}>{item.rightText}</Text></View>
      {people.map(person => (
        <View key={`${item.id}-${person.id}`} style={styles.personRow}>
          <View style={styles.personAvatar} />
          <View style={styles.personInfo}><Text style={styles.personName}>{person.name}</Text><Text style={styles.personDate}>Today</Text></View>
          {item.id === 'birthdays' ? (
            <Icon name="gift-outline" size={26} color="#222" />
          ) : (
            <Text style={styles.personBadge}>{person.badge}</Text>
          )}
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        style={styles.screen}
        data={sections}
        keyExtractor={item => item.id}
        renderItem={renderSection}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#E8E8EA' },
  screen: { flex: 1 },
  contentContainer: { paddingBottom: 12 },
  topCard: { backgroundColor: '#F4F4F5', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, paddingHorizontal: 14, paddingTop: 10, paddingBottom: 14 },
  searchRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#D8D8DB' },
  searchInputWrap: { flex: 1, height: 40, borderRadius: 10, borderWidth: 1, borderColor: '#D8D8DA', backgroundColor: '#F0F0F0', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 },
  searchInput: { flex: 1, fontSize: fontSizes.subTitle, color: '#232328' },
  hello: { textAlign: 'center', marginTop: 14, fontSize: fontSizes.title, fontWeight: '700', color: '#121318' },
  metaRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 8 },
  metaText: { fontSize: fontSizes.paragraph, color: '#333' },
  metaBold: { fontWeight: '700' },
  buy: { marginLeft: 6, backgroundColor: '#191A20', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 2 },
  buyText: { color: '#fff', fontSize: fontSizes.paragraph, fontWeight: '700' },
  grid: { marginTop: 14, flexDirection: 'row', flexWrap: 'wrap', rowGap: 16 },
  gridItem: { width: '25%', alignItems: 'center' },
  gridIconWrap: { width: 52, height: 52, borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginBottom: 6 },
  gridText: { fontSize: fontSizes.paragraph, color: '#2F2F35' },

  sectionCard: { backgroundColor: '#F4F4F5', marginTop: 8, borderRadius: 14, marginHorizontal: 0, paddingHorizontal: 14, paddingVertical: 14 },
  sectionTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  sectionTitle: { color: '#202129', fontSize: fontSizes.buttonText, fontWeight: '700' },
  seeAll: { color: '#2D2E35', fontSize: fontSizes.subTitle, fontWeight: '500' },
  personRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  personAvatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#D4D5D8' },
  personInfo: { marginLeft: 12, flex: 1 },
  personName: { color: '#191A20', fontSize: fontSizes.subTitle, fontWeight: '600' },
  personDate: { color: '#68686D', fontSize: fontSizes.paragraph},
  personBadge: { color: '#24252B', fontSize: fontSizes.paragraph, fontWeight: '500' } });

export default MainMenuScreen;
