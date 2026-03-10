import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import fontSizes from '../../constants/fontsize';

const STATION_ROTATION = [
  { id: 'r2', name: 'Relax Radio', freq: '106.45', color: '#111217' },
  { id: 'r3', name: 'Love Radio', freq: '107.45', color: '#D94DA5' },
  { id: 'r1', name: 'Popular Radio', freq: '103.45', color: '#3B1E86' },
];

const ticks = Array.from({ length: 52 }, (_, i) => i);

const RadioPlayerScreen = ({ navigation, route }) => {
  const initialStation = route.params?.station?.name === 'Love Radio'
    ? STATION_ROTATION[1]
    : STATION_ROTATION[0];
  const [index, setIndex] = useState(STATION_ROTATION.findIndex(st => st.id === initialStation.id) || 0);
  const [isPlaying, setIsPlaying] = useState(true);

  const station = useMemo(() => STATION_ROTATION[index], [index]);

  const onPrev = () => setIndex(prev => (prev === 0 ? STATION_ROTATION.length - 1 : prev - 1));
  const onNext = () => setIndex(prev => (prev === STATION_ROTATION.length - 1 ? 0 : prev + 1));

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <AppHeader title={station.name} onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />

      <View style={styles.centerTop}>
        <Text style={styles.freq}>{station.freq}</Text>
        <Text style={styles.stationName}>{station.name}</Text>
      </View>

      <View style={[styles.bigLogo, { backgroundColor: station.color }]}>
        <Text style={styles.bigLogoTxt}>{station.name.split(' ')[0].slice(0, 2).toUpperCase()}</Text>
      </View>

      <View style={styles.tuner}>
        <View style={styles.ticksRow}>
          {ticks.map(item => (
            <View key={item} style={[styles.tick, item % 4 === 0 ? styles.bigTick : null]} />
          ))}
        </View>
        <View style={styles.centerLine} />
      </View>

      <View style={styles.controlsRow}>
        <TouchableOpacity style={styles.sideBtn} onPress={onPrev}>
          <Icon name="play-skip-back" size={34} color="#111217" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainBtn} onPress={() => setIsPlaying(prev => !prev)}>
          <Text style={styles.mainBtnTxt}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideBtn} onPress={onNext}>
          <Icon name="play-skip-forward" size={34} color="#111217" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { height: 74, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14 },
  backBtn: { marginRight: 8 },
  headerTitle: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700' },
  centerTop: { marginTop: 52, alignItems: 'center' },
  freq: { color: '#05060B', fontSize: fontSizes.title, fontWeight: '700' },
  stationName: { color: '#525359', fontSize: fontSizes.title, fontWeight: '600', marginTop: -6 },
  bigLogo: { width: 210, height: 210, borderRadius: 105, marginTop: 44, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' },
  bigLogoTxt: { color: '#fff', fontSize: fontSizes.title, fontWeight: '700' },
  tuner: { marginTop: 54, marginHorizontal: 16, height: 130, justifyContent: 'center' },
  ticksRow: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' },
  tick: { width: 3, height: 34, borderRadius: 2, backgroundColor: '#C9C9CE' },
  bigTick: { height: 52 },
  centerLine: { position: 'absolute', alignSelf: 'center', width: 4, height: 220, backgroundColor: '#111217', borderRadius: 2 },
  controlsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 48 },
  sideBtn: { width: 86, height: 176 / 2, borderRadius: 14, backgroundColor: '#D7D5D8', alignItems: 'center', justifyContent: 'center' },
  mainBtn: { width: 190, height: 176 / 2, borderRadius: 14, backgroundColor: '#07080D', alignItems: 'center', justifyContent: 'center' },
  mainBtnTxt: { color: '#fff', fontSize: fontSizes.title, fontWeight: '600' },
});

export default RadioPlayerScreen;
