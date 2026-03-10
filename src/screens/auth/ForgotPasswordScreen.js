import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../constants/navigation';
import fontSizes from '../../constants/fontsize';

const OtpIllustration = () => (
  <View style={styles.illusWrap}>
    <View style={styles.illusBlob} />
    <View style={styles.phoneShell}>
      <View style={styles.phoneHeader}>
        <View style={styles.starDot} />
        <View style={styles.starDot} />
        <View style={styles.starDot} />
        <View style={styles.starDot} />
      </View>
      <View style={styles.tickCircle}>
        <Icon name="checkmark" size={36} color="#FFFFFF" />
      </View>
    </View>
    <Icon name="lock-closed" size={34} color="#E2B900" style={styles.lock} />
    <Icon name="key" size={30} color="#E2B900" style={styles.key} />
  </View>
);

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        <OtpIllustration />

        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>We will send you an <Text style={styles.bold}>One Time Password</Text>{'\n'}on this mobile number</Text>

        <View style={styles.field}>
          <TextInput placeholder="Enter Mobile Number" placeholderTextColor="#575757" style={styles.input} />
        </View>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate(ROUTES.OTP)}>
          <Text style={styles.primaryText}>GET OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#E7E7E8', paddingHorizontal: 16, paddingVertical: 14 },
  card: { flex: 1, backgroundColor: '#ECECEC', paddingHorizontal: 22, paddingTop: 68 },
  illusWrap: { alignItems: 'center', marginBottom: 34 },
  illusBlob: { width: 220, height: 150, borderRadius: 80, backgroundColor: '#CED9E8', position: 'absolute', top: 32 },
  phoneShell: {
    width: 124,
    height: 228,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: '#4B86C8',
    transform: [{ rotate: '-12deg' }],
    backgroundColor: '#E9EFF6',
    alignItems: 'center',
    paddingTop: 20 },
  phoneHeader: { flexDirection: 'row', gap: 6, marginBottom: 18 },
  starDot: { width: 14, height: 14, borderRadius: 7, backgroundColor: '#8BAFD9' },
  tickCircle: { width: 66, height: 66, borderRadius: 33, backgroundColor: '#76A5DD', alignItems: 'center', justifyContent: 'center' },
  lock: { position: 'absolute', left: 64, top: 88 },
  key: { position: 'absolute', right: 82, top: 150 },
  title: { textAlign: 'center', fontSize: fontSizes.title, lineHeight: 62, color: '#111217', fontWeight: '800', marginBottom: 14 },
  subtitle: { textAlign: 'center', fontSize: fontSizes.subMenu, lineHeight: 28, color: '#313237', fontWeight: '500', marginBottom: 40 },
  bold: { fontWeight: '700' },
  field: {
    height: 62,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2 },
  input: { fontSize: fontSizes.subMenu, color: '#2C2C2F', fontWeight: '500' },
  primaryBtn: { height: 66, borderRadius: 33, backgroundColor: '#1A1B21', justifyContent: 'center', alignItems: 'center' },
  primaryText: { color: '#FFF', fontSize: fontSizes.subMenu, fontWeight: '700' } });

export default ForgotPasswordScreen;
