import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import { setThemeMode } from '../../redux/slices/themeSlice';
import fontSizes from '../../constants/fontsize';

const ThemePreview = ({ mode, active, onPress }) => {
  const isDark = mode === 'dark';
  const label = mode === 'system' ? 'system' : mode;
  return (
    <TouchableOpacity style={styles.themeItem} activeOpacity={0.85} onPress={onPress}>
      <View style={[styles.phoneMock, isDark ? styles.phoneDark : styles.phoneLight]}>
        <View style={[styles.mockLine, isDark ? styles.mockLineDark : null]} />
        <View style={styles.mockDots}>
          {[1, 2, 3, 4].map(item => (
            <View key={item} style={[styles.dot, isDark ? styles.dotDark : null]} />
          ))}
        </View>
        <View style={styles.mockBox} />
        <View style={[styles.mockLineSmall, isDark ? styles.mockLineDark : null]} />
        <View style={styles.bottomCards}>
          <View style={styles.bottomCard} />
          <View style={styles.bottomCard} />
        </View>
      </View>
      <Text style={styles.modeLabel}>{label}</Text>
      <View style={[styles.radio, active ? styles.radioActive : null]}>
        {active ? <Icon name="checkmark" size={16} color="#fff" /> : null}
      </View>
    </TouchableOpacity>
  );
};

const AppearanceScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const mode = useSelector(state => state.theme.mode);

  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Apperance" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Themes</Text>
        <View style={styles.row}>
          <ThemePreview mode="light" active={mode === 'light'} onPress={() => dispatch(setThemeMode('light'))} />
          <ThemePreview mode="dark" active={mode === 'dark'} onPress={() => dispatch(setThemeMode('dark'))} />
          <ThemePreview mode="system" active={mode === 'system'} onPress={() => dispatch(setThemeMode('system'))} />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { height: 84, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14 },
  backBtn: { marginRight: 10 },
  headerTitle: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700' },
  card: { marginHorizontal: 14, marginTop: 10, backgroundColor: '#E4E4E6', borderRadius: 16, padding: 14 },
  cardTitle: { color: '#111217', fontSize: fontSizes.paragraph, fontWeight: '700', marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  themeItem: { alignItems: 'center', width: '31.5%' },
  phoneMock: { width: '100%', height: 180, borderRadius: 16, borderWidth: 1.5, borderColor: '#A9A9AE', padding: 14 },
  phoneLight: { backgroundColor: '#CACACC' },
  phoneDark: { backgroundColor: '#2F2F34' },
  mockLine: { width: 34, height: 8, borderRadius: 4, backgroundColor: '#0D0E12', marginBottom: 10 },
  mockLineDark: { backgroundColor: '#DADADD' },
  mockDots: { flexDirection: 'row', gap: 6, marginBottom: 10 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#0D0E12' },
  dotDark: { backgroundColor: '#DADADD' },
  mockBox: { height: 78, borderRadius: 10, backgroundColor: '#F1F1F2', marginBottom: 8 },
  mockLineSmall: { width: 18, height: 8, borderRadius: 4, backgroundColor: '#0D0E12', marginBottom: 8 },
  bottomCards: { flexDirection: 'row', gap: 10 },
  bottomCard: { flex: 1, height: 40, borderRadius: 8, backgroundColor: '#F1F1F2' },
  modeLabel: { marginTop: 10, color: '#111217', fontSize: fontSizes.subMenu, fontWeight: '700', textTransform: 'lowercase' },
  radio: { marginTop: 10, width: 34, height: 34, borderRadius: 17, borderWidth: 3, borderColor: '#111217', alignItems: 'center', justifyContent: 'center' },
  radioActive: { backgroundColor: '#111217' },
});

export default AppearanceScreen;
