import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import fontSizes from '../../constants/fontsize';

const PasswordRow = ({ placeholder }) => (
  <View style={styles.inputWrap}>
    <TextInput secureTextEntry placeholder={placeholder} placeholderTextColor="#505156" style={styles.input} />
    <Icon name="eye" size={30} color="#1E1F24" />
  </View>
);

const ChangePasswordScreen = ({ navigation }) => {
  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Passwords Security" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <View style={styles.content}>
        <PasswordRow placeholder="Old Password" />
        <PasswordRow placeholder="New Password" />
        <PasswordRow placeholder="Confirm Password" />

        <TouchableOpacity style={styles.updateBtn}>
          <Text style={styles.updateText}>Update Password</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  header: { height: 84, backgroundColor: '#F2F2F3', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14 },
  backBtn: { marginRight: 10 },
  headerTitle: { fontSize: fontSizes.title, color: '#111217', fontWeight: '700' },
  content: { marginTop: 10, marginHorizontal: 10, backgroundColor: '#E8E8EA', flex: 1, paddingHorizontal: 14, paddingTop: 16 },
  inputWrap: {
    height: 62,
    borderRadius: 14,
    backgroundColor: '#F4F4F5',
    borderWidth: 1,
    borderColor: '#E1E1E5',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  input: { flex: 1, fontSize: fontSizes.paragraph, color: '#212227' },
  updateBtn: { marginTop: 'auto', marginBottom: 20, height: 72, borderRadius: 22, backgroundColor: '#090A0F', alignItems: 'center', justifyContent: 'center' },
  updateText: { color: '#fff', fontSize: fontSizes.buttonText, fontWeight: '600' },
});

export default ChangePasswordScreen;
