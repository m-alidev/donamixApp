import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import { ROUTES } from '../../constants/navigation';
import fontSizes from '../../constants/fontsize';

const STATIONS = [
  { id: 'r1', name: 'Popular Radio', fm: 'Fm 103.45', color: '#3B1E86' },
  { id: 'r2', name: 'Relax Radio', fm: 'Fm 106.45', color: '#111217' },
  { id: 'r3', name: 'Love Radio', fm: 'Fm 107.45', color: '#D94DA5' },
  { id: 'r4', name: 'Ruskoe Radio', fm: 'Fm 154.45', color: '#41D5B8' },
  { id: 'r5', name: 'Diaspora Radio', fm: 'Fm 107.45', color: '#2F1E8A' },
  { id: 'r6', name: 'Kiss FM', fm: 'Fm 107.45', color: '#4A5A6A' },
  { id: 'r7', name: 'Lucks FM', fm: 'Fm 107.45', color: '#69BB00' },
  { id: 'r8', name: 'Relax Radio', fm: 'Fm 106.45', color: '#111217' },
];

const StationLogo = ({ station, size = 60 }) => (
  <View style={[styles.logo, { backgroundColor: station.color, width: size, height: size, borderRadius: size / 2 }]}>
    <Text style={styles.logoTxt}>{station.name.split(' ')[0].slice(0, 2).toUpperCase()}</Text>
  </View>
);

const RadioScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [currentStation, setCurrentStation] = useState(STATIONS[2]);
  const [isPlaying, setIsPlaying] = useState(false);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return STATIONS;
    }
    return STATIONS.filter(item => item.name.toLowerCase().includes(term));
  }, [query]);

  const openPlayer = station => navigation.navigate(ROUTES.RADIO_PLAYER, { station: station || currentStation });

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.stationRow}
      activeOpacity={0.85}
      onPress={() => setCurrentStation(item)}
      onLongPress={() => openPlayer(item)}
    >
      <StationLogo station={item} />
      <View>
        <Text style={styles.stationName}>{item.name}</Text>
        <Text style={styles.fm}>{item.fm}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <AppHeader title="Radio" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />

      <View style={styles.searchWrap}>
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          placeholder="Search"
          placeholderTextColor="#7F7F84"
        />
        <Icon name="search-outline" size={34} color="#8B8B90" />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {currentStation ? (
        <View style={styles.playerBar}>
          <TouchableOpacity
            style={styles.playBtn}
            onPress={() => {
              setIsPlaying(prev => !prev);
              openPlayer(currentStation);
            }}
          >
            <Icon name={isPlaying ? 'pause' : 'play'} size={34} color="#fff" />
          </TouchableOpacity>
          <StationLogo station={currentStation} size={50} />
          <View style={styles.playerInfo}>
            <Text style={styles.playerTitle}>{currentStation.name}</Text>
            <Text style={styles.playerSub}>{isPlaying ? 'Playing...' : 'Stopped...'}</Text>
          </View>
          <TouchableOpacity onPress={() => setCurrentStation(null)}>
            <Icon name="close" size={34} color="#fff" />
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { height: 74, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14 },
  backBtn: { marginRight: 8 },
  headerTitle: { fontSize: fontSizes.title, color: '#111217', fontWeight: '700' },
  searchWrap: {
    marginHorizontal: 14,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#D8D8DC',
    backgroundColor: '#F1F1F2',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: { flex: 1, color: '#1F2026', fontSize: fontSizes.paragraph},
  listContent: { paddingHorizontal: 14, paddingTop: 8, paddingBottom: 165 },
  stationRow: { flexDirection: 'row', alignItems: 'center', gap: 14, marginVertical: 8 },
  logo: { alignItems: 'center', justifyContent: 'center' },
  logoTxt: { color: '#fff', fontSize: fontSizes.paragraph, fontWeight: '700' },
  stationName: { color: '#4B4C51', fontSize: fontSizes.buttonText, fontWeight: '600' },
  fm: { color: '#4B4C51', fontSize: fontSizes.buttonText},
  playerBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 108,
    backgroundColor: '#07080D',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  playBtn: { width: 42, alignItems: 'center' },
  playerInfo: { flex: 1 },
  playerTitle: { color: '#fff', fontSize: fontSizes.buttonText, fontWeight: '500' },
  playerSub: { color: '#D6D6DA', fontSize: fontSizes.subMenu},
});

export default RadioScreen;
