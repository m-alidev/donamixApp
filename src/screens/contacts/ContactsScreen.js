import React, { useMemo, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import images from '../../constants/images';
import fontSizes from '../../constants/fontsize';

const CONTACTS = [
  'Anna Randawa',
  'Bill Walton',
  'Catty Randawa',
  'Dr Jay',
  'Errey Samit',
  'Fawad Walton',
  'Gourge Randawa',
  'Henry Jay',
  'Inno Walton',
  'Jack Samit',
  'Lengo Walton',
];

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const ContactsScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');

  const list = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return CONTACTS;
    }
    return CONTACTS.filter(name => name.toLowerCase().includes(term));
  }, [query]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.row} activeOpacity={0.8}>
      <Image source={images.avatar} style={styles.avatar} />
      <Text style={styles.name}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={
        <AppHeader
          title="Contacts"
          onLeftPress={() => navigation.goBack()}
          mode="plain"
          containerStyle={styles.header}
          rightIcons={[{ icon: 'create-outline', size: 29 }]}
        />
      }
    >
      <View style={styles.searchWrap}>
        <Icon name="search-outline" size={32} color="#111217" />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search here.."
          placeholderTextColor="#B6B6BB"
          style={styles.searchInput}
        />
      </View>

      <View style={styles.content}>
        <FlatList
          data={list}
          keyExtractor={item => item}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.lettersCol}>
          {LETTERS.map(letter => (
            <Text key={letter} style={styles.letter}>
              {letter}
            </Text>
          ))}
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { height: 76, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center' },
  iconBtn: { width: 30, alignItems: 'center' },
  title: { flex: 1, marginLeft: 8, color: '#111217', fontSize: fontSizes.title, fontWeight: '700' },
  searchWrap: {
    marginHorizontal: 16,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#D9D9DE',
    backgroundColor: '#EFEFF1',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: { flex: 1, marginLeft: 8, color: '#202126', fontSize: fontSizes.subMenu},
  content: { flex: 1, flexDirection: 'row' },
  listContent: { paddingTop: 12, paddingLeft: 18, paddingBottom: 84, paddingRight: 8 },
  row: { height: 72, flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  name: { color: '#17181E', fontSize: fontSizes.subMenu, fontWeight: '500' },
  lettersCol: { width: 28, paddingTop: 14, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 94, marginRight: 6 },
  letter: { color: '#111217', fontSize: fontSizes.subTitle, fontWeight: '500' },
});

export default ContactsScreen;
