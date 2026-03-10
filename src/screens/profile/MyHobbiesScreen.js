import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import fontSizes from '../../constants/fontsize';

const MyHobbiesScreen = ({ navigation }) => {
  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="My Hobbies" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <View style={styles.content}>
        <Text style={styles.label}>Choose interests</Text>
        <TextInput style={styles.input} placeholder="Choose interests" placeholderTextColor="#505156" />
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>

        <View style={styles.chipsRow}>
          {['Reading', 'Gym', 'Books'].map(item => (
            <View key={item} style={styles.chip}>
              <Text style={styles.chipText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { height: 84, borderBottomWidth: 1, borderBottomColor: '#E0E0E3', backgroundColor: '#F2F2F3', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14 },
  backBtn: { marginRight: 8 },
  headerTitle: { fontSize: fontSizes.title, color: '#111217', fontWeight: '700' },
  content: { padding: 18 },
  label: { color: '#111217', fontSize: fontSizes.buttonText, fontWeight: '600', marginBottom: 10 },
  input: {
    height: 62,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E1E1E5',
    backgroundColor: '#F5F5F6',
    paddingHorizontal: 14,
    fontSize: fontSizes.subMenu,
    color: '#212227',
  },
  addBtn: {
    marginTop: 20,
    marginLeft: '63%',
    height: 68,
    borderRadius: 22,
    backgroundColor: '#090A0F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: { color: '#fff', fontSize: fontSizes.buttonText, fontWeight: '600' },
  chipsRow: { marginTop: 28, flexDirection: 'row', gap: 10 },
  chip: { minWidth: 106, height: 64, borderRadius: 14, backgroundColor: '#07080D', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18 },
  chipText: { color: '#fff', fontSize: fontSizes.paragraph, fontWeight: '500' },
});

export default MyHobbiesScreen;
