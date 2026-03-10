import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../constants/navigation';
import fontSizes from '../../constants/fontsize';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        <Text style={styles.title}>Hi, Welcome Back! 👋</Text>

        <View style={styles.field}>
          <TextInput placeholder="example@gmail.com" placeholderTextColor="#575757" style={styles.input} />
        </View>

        <View style={styles.fieldRow}>
          <TextInput placeholder="Enter Your Password" placeholderTextColor="#575757" style={[styles.input, styles.flex]} />
          <Icon name="eye" size={22} color="#1D1D23" />
        </View>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.replace(ROUTES.APP_TABS)}>
          <Text style={styles.primaryText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.outlineBtn} onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}>
          <Text style={styles.outlineText}>OTP Login</Text>
        </TouchableOpacity>

        <View style={styles.orRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or With</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}><Icon name="logo-facebook" size={34} color="#1877F2" /></TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}><Icon name="logo-google" size={34} color="#EA4335" /></TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}><Icon name="logo-apple" size={34} color="#000000" /></TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          Don’t have an account ? <Text style={styles.link} onPress={() => navigation.navigate(ROUTES.SIGN_UP)}>Sign Up</Text>
        </Text>

        <View style={styles.bioRow}>
          <TouchableOpacity style={styles.bioBtn}>
            <Icon name="finger-print-outline" size={34} color="#111" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bioBtn}>
            <Icon name="scan-outline" size={33} color="#111" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#E7E7E8', paddingHorizontal: 16, paddingVertical: 14 },
  card: {
    flex: 1,
    backgroundColor: '#ECECEC',
    paddingHorizontal: 22,
    paddingTop: 90 },
  title: {
    fontSize: fontSizes.title,
    lineHeight: 62,
    textAlign: 'center',
    color: '#0F1014',
    fontWeight: '800',
    marginBottom: 64 },
  field: {
    height: 62,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    paddingHorizontal: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2 },
  fieldRow: {
    height: 62,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 26,
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2 },
  input: { fontSize: fontSizes.subMenu, color: '#2C2C2F', fontWeight: '500' },
  flex: { flex: 1 },
  primaryBtn: {
    height: 66,
    borderRadius: 33,
    backgroundColor: '#1A1B21',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14 },
  primaryText: { color: '#FFF', fontSize: fontSizes.subMenu, fontWeight: '700' },
  outlineBtn: {
    height: 66,
    borderRadius: 33,
    borderWidth: 1.3,
    borderColor: '#2B2C31',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40 },
  outlineText: { color: '#222328', fontSize: fontSizes.subMenu, fontWeight: '600' },
  orRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 28 },
  line: { flex: 1, height: 1, backgroundColor: '#A8A8A8' },
  orText: { marginHorizontal: 12, fontSize: fontSizes.subMenu, color: '#313237', fontWeight: '500' },
  socialRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 58 },
  socialBtn: {
    width: 104,
    height: 68,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1' },
  footerText: { textAlign: 'center', fontSize: fontSizes.subMenu, color: '#222328', fontWeight: '500', marginBottom: 66 },
  link: { color: '#2476FF', textDecorationLine: 'underline', fontWeight: '600' },
  bioRow: { flexDirection: 'row', justifyContent: 'center', gap: 30 },
  bioBtn: {
    width: 66,
    height: 66,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center' } });

export default LoginScreen;
