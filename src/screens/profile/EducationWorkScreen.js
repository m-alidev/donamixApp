import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import fontSizes from '../../constants/fontsize';

const DateBox = ({ value }) => (
  <TouchableOpacity activeOpacity={0.85} style={styles.dateBox}>
    <Text style={styles.dateText}>{value}</Text>
    <Icon name="calendar-outline" size={32} color="#111217" />
  </TouchableOpacity>
);

const EducationWorkScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Education and Work" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.tabWrap}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'education' ? styles.tabActive : styles.tabInactive]}
            onPress={() => setActiveTab('education')}
          >
            <Text style={[styles.tabText, activeTab === 'education' ? styles.tabTextActive : null]}>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'work' ? styles.tabActive : styles.tabInactive]}
            onPress={() => setActiveTab('work')}
          >
            <Text style={[styles.tabText, activeTab === 'work' ? styles.tabTextActive : null]}>Work</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder={activeTab === 'education' ? 'My university' : 'Company'}
          placeholderTextColor="#505156"
        />
        {activeTab === 'work' ? <TextInput style={styles.input} placeholder="Position" placeholderTextColor="#505156" /> : null}

        <View style={styles.fromTo}>
          <Text style={styles.label}>From</Text>
          <Text style={styles.label}>To</Text>
        </View>
        <View style={styles.row}>
          <DateBox value="12-1-2023" />
          <DateBox value="12-1-2023" />
        </View>

        {activeTab === 'work' ? <TextInput style={styles.input} placeholder="City/Town" placeholderTextColor="#505156" /> : null}
        <TextInput style={styles.descInput} placeholder="Description" placeholderTextColor="#505156" multiline textAlignVertical="top" />

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { height: 84, borderBottomWidth: 1, borderBottomColor: '#E0E0E3', backgroundColor: '#F2F2F3', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14 },
  backBtn: { marginRight: 8 },
  headerTitle: { fontSize: fontSizes.title, color: '#111217', fontWeight: '700' },
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 32 },
  tabWrap: { flexDirection: 'row', marginBottom: 18, borderRadius: 14, overflow: 'hidden', borderWidth: 1, borderColor: '#DCDCE0' },
  tab: { flex: 1, height: 64, alignItems: 'center', justifyContent: 'center' },
  tabActive: { backgroundColor: '#090A0F' },
  tabInactive: { backgroundColor: '#F3F3F4' },
  tabText: { color: '#5C5D62', fontSize: fontSizes.buttonText, fontWeight: '600' },
  tabTextActive: { color: '#fff' },
  input: {
    height: 62,
    borderRadius: 14,
    backgroundColor: '#F4F4F5',
    borderWidth: 1,
    borderColor: '#E1E1E5',
    paddingHorizontal: 16,
    fontSize: fontSizes.paragraph,
    color: '#212227',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  fromTo: { flexDirection: 'row', justifyContent: 'space-between', paddingRight: '44%', marginBottom: 8, paddingHorizontal: 4 },
  label: { color: '#3D3E44', fontSize: fontSizes.buttonText},
  row: { flexDirection: 'row', gap: 10, marginBottom: 12 },
  dateBox: {
    flex: 1,
    height: 62,
    borderRadius: 14,
    backgroundColor: '#F4F4F5',
    borderWidth: 1,
    borderColor: '#E1E1E5',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: { fontSize: fontSizes.paragraph, color: '#1E1F24' },
  descInput: {
    height: 220,
    borderRadius: 14,
    backgroundColor: '#F4F4F5',
    borderWidth: 1,
    borderColor: '#E1E1E5',
    paddingHorizontal: 16,
    paddingTop: 14,
    fontSize: fontSizes.paragraph,
    color: '#212227',
    marginTop: 8,
    marginBottom: 18,
  },
  saveBtn: { height: 72, borderRadius: 22, backgroundColor: '#08090E', alignItems: 'center', justifyContent: 'center' },
  saveText: { color: '#fff', fontSize: fontSizes.buttonText, fontWeight: '600' },
});

export default EducationWorkScreen;
