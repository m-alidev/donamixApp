import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import fontSizes from '../../constants/fontsize';

const LANGUAGES = [
  { id: 'en', title: 'English' },
  { id: 'en-uk', title: 'English (uk)' },
  { id: 'es-es', title: 'Espanol', subtitle: 'Spanish (spain)' },
  { id: 'es-la', title: 'Espanol', subtitle: 'Spanish (Latin America)' },
  { id: 'zh', title: 'Chinese' },
  { id: 'de', title: 'German' },
  { id: 'ar', title: 'Arabic' },
];

const LanguageScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('en');

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return LANGUAGES;
    }
    return LANGUAGES.filter(item => item.title.toLowerCase().includes(term) || item.subtitle?.toLowerCase().includes(term));
  }, [query]);

  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Language & Region" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <View style={styles.searchWrap}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#6F7076"
        />
        <Icon name="search-outline" size={34} color="#9C9CA1" />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row} onPress={() => setSelected(item.id)} activeOpacity={0.8}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              {item.subtitle ? <Text style={styles.subtitle}>{item.subtitle}</Text> : null}
            </View>
            {selected === item.id ? <Icon name="checkmark" size={30} color="#111217" /> : null}
          </TouchableOpacity>
        )}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { height: 84, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 },
  backBtn: { marginRight: 8 },
  headerTitle: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700' },
  searchWrap: {
    marginHorizontal: 12,
    marginBottom: 8,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: '#D9D9DE',
    backgroundColor: '#F1F1F2',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: { flex: 1, fontSize: fontSizes.buttonText, color: '#1D1E23' },
  listContent: { paddingHorizontal: 14, paddingBottom: 20 },
  row: { minHeight: 64, justifyContent: 'center', borderBottomWidth: 0, marginBottom: 8 },
  title: { color: '#111217', fontSize: fontSizes.buttonText, fontWeight: '500' },
  subtitle: { color: '#4C4D53', fontSize: fontSizes.subMenu, marginTop: 2 },
});

export default LanguageScreen;
