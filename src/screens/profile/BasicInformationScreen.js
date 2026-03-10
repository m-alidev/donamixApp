import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import fontSizes from '../../constants/fontsize';

const SelectBox = ({ value }) => (
  <TouchableOpacity activeOpacity={0.85} style={styles.selectBox}>
    <Text style={styles.selectText}>{value}</Text>
    <Icon name="chevron-down" size={30} color="#111217" />
  </TouchableOpacity>
);

const BasicInformationScreen = ({ navigation }) => {
  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Basic Information" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TextInput style={styles.input} placeholder="First name" placeholderTextColor="#505156" />
        <TextInput style={styles.input} placeholder="Last name" placeholderTextColor="#505156" />
        <TextInput style={styles.input} placeholder="@username" placeholderTextColor="#505156" />

        <Text style={styles.sectionLabel}>Date of Birth</Text>
        <View style={styles.row}>
          <SelectBox value="12" />
          <SelectBox value="June" />
          <SelectBox value="2023" />
        </View>

        <View style={styles.rowLabels}>
          <Text style={styles.sectionLabel}>My status is</Text>
          <Text style={styles.sectionLabel}>I am</Text>
        </View>
        <View style={styles.row}>
          <SelectBox value="Single" />
          <SelectBox value="Female" />
        </View>

        <TextInput style={styles.input} placeholder="My city" placeholderTextColor="#505156" />
        <TextInput style={styles.input} placeholder="My country" placeholderTextColor="#505156" />
        <TextInput
          style={styles.aboutInput}
          placeholder="About me"
          placeholderTextColor="#505156"
          multiline
          textAlignVertical="top"
        />

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
  sectionLabel: { color: '#3D3E44', fontSize: fontSizes.buttonText, marginBottom: 8 },
  row: { flexDirection: 'row', gap: 10, marginBottom: 12 },
  rowLabels: { flexDirection: 'row', justifyContent: 'space-between', paddingRight: 140 },
  selectBox: {
    flex: 1,
    height: 62,
    borderRadius: 14,
    backgroundColor: '#F4F4F5',
    borderWidth: 1,
    borderColor: '#E1E1E5',
    paddingHorizontal: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectText: { fontSize: fontSizes.paragraph, color: '#1E1F24' },
  aboutInput: {
    height: 300,
    borderRadius: 14,
    backgroundColor: '#F4F4F5',
    borderWidth: 1,
    borderColor: '#E1E1E5',
    paddingHorizontal: 16,
    paddingTop: 14,
    fontSize: fontSizes.paragraph,
    color: '#212227',
    marginBottom: 18,
  },
  saveBtn: { height: 72, borderRadius: 22, backgroundColor: '#08090E', alignItems: 'center', justifyContent: 'center' },
  saveText: { color: '#fff', fontSize: fontSizes.buttonText, fontWeight: '600' },
});

export default BasicInformationScreen;
