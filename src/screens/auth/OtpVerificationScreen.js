import React, { useState } from 'react';
import { Modal,  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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

const OtpVerificationScreen = ({ navigation }) => {
  const [successVisible, setSuccessVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        <OtpIllustration />

        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>Enter the OTP we’ve sent to <Text style={styles.bold}>+92 *** *******</Text></Text>

        <View style={styles.otpRow}>
          <TextInput style={styles.otpBox} keyboardType="number-pad" maxLength={1} defaultValue="3" />
          <TextInput style={styles.otpBox} keyboardType="number-pad" maxLength={1} defaultValue="4" />
          <TextInput style={styles.otpBox} keyboardType="number-pad" maxLength={1} defaultValue="3" />
          <TextInput style={styles.otpBox} keyboardType="number-pad" maxLength={1} defaultValue="1" />
        </View>

        <Text style={styles.resend}>
          Don’t receive the OTP? <Text style={styles.resendBold}>RESEND OTP</Text>
        </Text>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => setSuccessVisible(true)}>
          <Text style={styles.primaryText}>VERIFY</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={successVisible} transparent animationType="fade" onRequestClose={() => setSuccessVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.successCard}>
            <Text style={styles.successTitle}>Verification Successful!</Text>
            <View style={styles.successArt}>
              <Icon name="person" size={76} color="#E53A4D" />
              <Icon name="star" size={42} color="#F5B444" style={styles.star} />
              <Icon name="flag" size={42} color="#F5B444" style={styles.flag} />
            </View>
            <TouchableOpacity style={styles.doneBtn} onPress={() => { setSuccessVisible(false); navigation.replace(ROUTES.APP_TABS); }}>
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  title: { textAlign: 'center', fontSize: fontSizes.title, lineHeight: 62, color: '#111217', fontWeight: '800', marginBottom: 12 },
  subtitle: { textAlign: 'center', fontSize: fontSizes.subMenu, lineHeight: 27, color: '#313237', fontWeight: '500', marginBottom: 28 },
  bold: { fontWeight: '700' },
  otpRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  otpBox: {
    width: 64,
    height: 64,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    backgroundColor: '#F2F2F2',
    textAlign: 'center',
    fontSize: fontSizes.buttonText,
    color: '#2C2C2F',
    fontWeight: '600',
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2 },
  resend: { textAlign: 'center', fontSize: fontSizes.subMenu, color: '#3A3B40', marginBottom: 30 },
  resendBold: { fontWeight: '800', letterSpacing: 1 },
  primaryBtn: { height: 66, borderRadius: 33, backgroundColor: '#1A1B21', justifyContent: 'center', alignItems: 'center' },
  primaryText: { color: '#FFF', fontSize: fontSizes.subMenu, fontWeight: '700' },

  modalOverlay: { flex: 1, backgroundColor: '#8A8A8A99', justifyContent: 'center', alignItems: 'center', padding: 24 },
  successCard: {
    width: '100%',
    borderRadius: 24,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 26,
    paddingTop: 28,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 14 },
  successTitle: { textAlign: 'center', fontSize: fontSizes.buttonText, color: '#111217', fontWeight: '700', marginBottom: 20 },
  successArt: { height: 130, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  star: { position: 'absolute', left: 40, top: 26 },
  flag: { position: 'absolute', right: 40, top: 20 },
  doneBtn: { height: 56, borderRadius: 28, backgroundColor: '#1A1B21', justifyContent: 'center', alignItems: 'center' },
  doneText: { color: '#FFF', fontSize: fontSizes.subMenu, fontWeight: '600' } });

export default OtpVerificationScreen;
