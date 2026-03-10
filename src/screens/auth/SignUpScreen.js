import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../constants/navigation';
import fontSizes from '../../constants/fontsize';

const InputBox = ({ placeholder, rightIcon }) => (
  <View style={styles.fieldRow}>
    <TextInput placeholder={placeholder} placeholderTextColor="#575757" style={[styles.input, styles.flex]} />
    {rightIcon ? <Icon name={rightIcon} size={24} color="#959595" /> : null}
  </View>
);

const SmallInput = ({ placeholder }) => (
  <View style={styles.smallField}>
    <TextInput placeholder={placeholder} placeholderTextColor="#575757" style={styles.input} />
  </View>
);

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subtitle}>Connect with your friends today!</Text>

        <InputBox placeholder="Enter Your Name" />
        <InputBox placeholder="Enter Your Username" />
        <InputBox placeholder="Enter Your Email" />
        <InputBox placeholder="Enter Your Password" rightIcon="eye-off-outline" />

        <Text style={styles.section}>Birthday</Text>
        <View style={styles.row3}>
          <SmallInput placeholder="Day" />
          <SmallInput placeholder="Month" />
          <SmallInput placeholder="Year" />
        </View>

        <View style={styles.row2}>
          <View style={styles.halfField}><TextInput placeholder="Gender" placeholderTextColor="#575757" style={styles.input} /></View>
          <View style={styles.halfField}><TextInput placeholder="Status" placeholderTextColor="#575757" style={styles.input} /></View>
        </View>

        <InputBox placeholder="Choose your City" />
        <InputBox placeholder="Choose your Country" />

        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate(ROUTES.OTP)}>
          <Text style={styles.primaryText}>Sign Up</Text>
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
          Already have an account? <Text style={styles.link} onPress={() => navigation.navigate(ROUTES.LOGIN)}>Login</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#E7E7E8', paddingHorizontal: 16, paddingVertical: 14 },
  content: { backgroundColor: '#ECECEC', paddingHorizontal: 22, paddingTop: 36, paddingBottom: 26 },
  title: { fontSize: fontSizes.title, color: '#111217', fontWeight: '800', textAlign: 'center' },
  subtitle: { fontSize: fontSizes.subMenu, color: '#313237', textAlign: 'center', fontWeight: '500', marginTop: 4, marginBottom: 28 },
  fieldRow: {
    height: 62,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2 },
  input: { fontSize: fontSizes.subMenu, color: '#2C2C2F', fontWeight: '500' },
  flex: { flex: 1 },
  section: { fontSize: fontSizes.subMenu, color: '#0F1014', fontWeight: '700', marginTop: 4, marginBottom: 10 },
  row3: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  row2: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  smallField: {
    width: '30.5%',
    height: 58,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2 },
  halfField: {
    width: '47.8%',
    height: 58,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2 },
  primaryBtn: {
    height: 66,
    borderRadius: 33,
    backgroundColor: '#1A1B21',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 28 },
  primaryText: { color: '#FFF', fontSize: fontSizes.subMenu, fontWeight: '700' },
  orRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  line: { flex: 1, height: 1, backgroundColor: '#A8A8A8' },
  orText: { marginHorizontal: 12, fontSize: fontSizes.subMenu, color: '#313237', fontWeight: '500' },
  socialRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  socialBtn: {
    width: 104,
    height: 68,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1' },
  footerText: { textAlign: 'center', fontSize: fontSizes.subMenu, color: '#222328', fontWeight: '500', marginBottom: 14 },
  link: { color: '#2476FF', textDecorationLine: 'underline', fontWeight: '600' } });

export default SignUpScreen;
