import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import fontSizes from '../../constants/fontsize';

const ToggleRow = ({ title, subtitle, value, onChange }) => (
  <View style={styles.toggleRow}>
    <View style={styles.toggleTextWrap}>
      <Text style={styles.rowTitle}>{title}</Text>
      {subtitle ? <Text style={styles.rowSub}>{subtitle}</Text> : null}
    </View>
    <Switch
      value={value}
      onValueChange={onChange}
      trackColor={{ false: '#DEDEE1', true: '#DEDEE1' }}
      thumbColor={value ? '#111217' : '#fff'}
      ios_backgroundColor="#DEDEE1"
    />
  </View>
);

const SectionHead = ({ title, expanded = true, onPress, withChevron = true }) => (
  <TouchableOpacity activeOpacity={0.85} style={styles.sectionHead} onPress={onPress}>
    <Text style={styles.sectionHeadText}>{title}</Text>
    {withChevron ? <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={18} color="#111217" /> : null}
  </TouchableOpacity>
);

const RadioOption = ({ label, selected }) => (
  <View style={styles.radioRow}>
    <Icon name={selected ? 'radio-button-on-outline' : 'radio-button-off-outline'} size={16} color="#111217" />
    <Text style={styles.radioLabel}>{label}</Text>
  </View>
);

const ActionPair = () => (
  <View style={styles.actionPair}>
    <TouchableOpacity style={styles.miniBtn}><Text style={styles.miniBtnText}>Cancel</Text></TouchableOpacity>
    <TouchableOpacity style={styles.miniBtn}><Text style={styles.miniBtnText}>Save</Text></TouchableOpacity>
  </View>
);

const PrivacySecurityScreen = ({ navigation }) => {
  const [privateAccount, setPrivateAccount] = useState(true);
  const [searchVisibility, setSearchVisibility] = useState(true);
  const [twoStep, setTwoStep] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [cameraMic, setCameraMic] = useState(true);
  const [locationTracking, setLocationTracking] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [faceTouchLogin, setFaceTouchLogin] = useState(true);
  const [expanded, setExpanded] = useState({
    postVisibility: true,
    connectionRequest: true,
    deleteDeactivate: true,
    changePassword: true,
    accountRecovery: true,
    loginActivity: true,
    appPermissions: true,
    securityFeatures: true,
  });

  const toggleSection = key => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Privacy & Security" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} leftSize={24} />}
    >
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.mainHead}>Privacy</Text>
        <ToggleRow
          title="Private Account"
          subtitle="Enable to make your account private.
When your account is public, your profile and posts can be seen by anyone.
When your account is private only connections you approve can see your profile and what you post."
          value={privateAccount}
          onChange={setPrivateAccount}
        />
        <View style={styles.divider} />
        <ToggleRow
          title="Search Visibility"
          subtitle="When enabled, your profile won't appear in app searches or on search engines.."
          value={searchVisibility}
          onChange={setSearchVisibility}
        />
        <View style={styles.divider} />

        <SectionHead title="Post Visibility" expanded={expanded.postVisibility} onPress={() => toggleSection('postVisibility')} />
        {expanded.postVisibility ? (
          <>
            <Text style={styles.hintText}>Control who can view your posts</Text>
            <Text style={styles.groupTitle}>Who can view your posts</Text>
            <RadioOption label="Public" selected />
            <RadioOption label="Connections" />
            <RadioOption label="Private" />
            <RadioOption label="Custom" />
          </>
        ) : null}
        <View style={styles.divider} />

        <SectionHead title="Connection Request" expanded={expanded.connectionRequest} onPress={() => toggleSection('connectionRequest')} />
        {expanded.connectionRequest ? (
          <>
            <Text style={styles.hintText}>Control who can send you requests</Text>
            <Text style={styles.groupTitle}>Who can send you requests</Text>
            <RadioOption label="Everyone" selected />
            <RadioOption label="People you know" />
            <RadioOption label="No one" />
          </>
        ) : null}
        <View style={styles.divider} />

        <SectionHead title="Delete/Deactivate Account" expanded={expanded.deleteDeactivate} onPress={() => toggleSection('deleteDeactivate')} />
        {expanded.deleteDeactivate ? (
          <>
            <TouchableOpacity style={styles.iconAction}>
              <Icon name="document-text-outline" size={15} color="#111217" />
              <Text style={styles.iconActionText}>Deactivate Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconAction}>
              <Icon name="trash-outline" size={15} color="#111217" />
              <Text style={[styles.iconActionText, styles.deleteText]}>Permanently Delete Account</Text>
            </TouchableOpacity>
          </>
        ) : null}
        <View style={styles.divider} />

        <Text style={styles.mainHead}>Security Settings</Text>
        <SectionHead title="Change Password" expanded={expanded.changePassword} onPress={() => toggleSection('changePassword')} />
        {expanded.changePassword ? (
          <>
            <Text style={styles.inputLabel}>Enter old password</Text>
            <TextInput style={styles.input} />
            <Text style={styles.inputLabel}>Enter new password</Text>
            <TextInput style={styles.input} />
            <ActionPair />
          </>
        ) : null}
        <View style={styles.divider} />

        <ToggleRow title="2-Step Verification" subtitle="" value={twoStep} onChange={setTwoStep} />
        <Text style={styles.inputLabel}>Enter phone number</Text>
        <View style={styles.phoneRow}>
          <View style={styles.codeBox}><Text style={styles.codeTxt}>🇵🇰 +92</Text></View>
          <TextInput style={styles.phoneInput} />
        </View>
        <ActionPair />
        <View style={styles.divider} />

        <ToggleRow
          title="Security Alerts"
          subtitle="Get notifications for suspicious login attempts or account changes."
          value={securityAlerts}
          onChange={setSecurityAlerts}
        />
        <View style={styles.divider} />

        <SectionHead title="Account Recovery" expanded={expanded.accountRecovery} onPress={() => toggleSection('accountRecovery')} />
        {expanded.accountRecovery ? (
          <>
            <Text style={styles.groupTitle}>Recovery Phone Number  <Icon name="add-circle-outline" size={12} color="#111217" /></Text>
            <View style={styles.phoneRow}>
              <View style={styles.codeBox}><Text style={styles.codeTxt}>🇵🇰 +92</Text></View>
              <TextInput style={styles.phoneInput} placeholder="000-000-000" placeholderTextColor="#A0A0A5" />
              <TouchableOpacity style={styles.verifyBtn}><Text style={styles.verifyTxt}>Verify</Text></TouchableOpacity>
            </View>
            <Text style={styles.groupTitle}>Email  <Icon name="add-circle-outline" size={12} color="#111217" /></Text>
            <TextInput style={styles.input} placeholder="Recovery Email" placeholderTextColor="#B2B2B6" />
          </>
        ) : null}
        <View style={styles.divider} />

        <SectionHead title="Login Activity" expanded={expanded.loginActivity} onPress={() => toggleSection('loginActivity')} />
        {expanded.loginActivity ? (
          <>
            <View style={styles.activityRow}>
              <View style={styles.activityLeft}>
                <Text style={styles.activityDate}>27-Dec-2024</Text>
                <Text style={styles.activityMain}>Logged in on Samsung galaxy</Text>
                <Text style={styles.activitySub}>IP address 191.181.191.19</Text>
              </View>
              <TouchableOpacity style={styles.activityMenu}>
                <Text style={styles.activityMenuText}>signout of device</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.activityRow}>
              <View style={styles.activityLeft}>
                <Text style={styles.activityDate}>01-Nov-2024</Text>
                <Text style={styles.activityMain}>Logged in on Iphone 15</Text>
                <Text style={styles.activitySub}>IP address 191.181.191.20</Text>
              </View>
              <TouchableOpacity>
                <Icon name="ellipsis-horizontal" size={18} color="#111217" />
              </TouchableOpacity>
            </View>
          </>
        ) : null}
        <View style={styles.divider} />

        <SectionHead title="App Permissions" expanded={expanded.appPermissions} onPress={() => toggleSection('appPermissions')} />
        {expanded.appPermissions ? (
          <>
            <ToggleRow
              title="Camera & Microphone"
              subtitle="Allows app permissions for accessing your device's camera and microphone."
              value={cameraMic}
              onChange={setCameraMic}
            />
            <View style={styles.divider} />
            <ToggleRow
              title="Location Tracking"
              subtitle="Toggle location access on/off for location-based features."
              value={locationTracking}
              onChange={setLocationTracking}
            />
            <View style={styles.divider} />
            <ToggleRow
              title="Push Notifications"
              subtitle="Toggle notification preferences for messages, updates, etc."
              value={pushNotifications}
              onChange={setPushNotifications}
            />
          </>
        ) : null}
        <View style={styles.divider} />

        <SectionHead title="Security Features" expanded={expanded.securityFeatures} onPress={() => toggleSection('securityFeatures')} />
        {expanded.securityFeatures ? (
          <>
            <Text style={styles.groupTitle}>Email verification</Text>
            <View style={styles.verifyInputRow}>
              <TextInput style={styles.verifyInput} value="xyz@gmail.com" />
              <TouchableOpacity style={styles.verifyBtn}><Text style={styles.verifyTxt}>Verify</Text></TouchableOpacity>
            </View>

            <ToggleRow
              title="Face/Touch Id login  ⊕"
              subtitle=""
              value={faceTouchLogin}
              onChange={setFaceTouchLogin}
            />
          </>
        ) : null}
        <View style={styles.divider} />

        <View style={styles.footer}>
          <Text style={styles.footerLink}>Privacy policy</Text>
          <Text style={styles.footerLink}>Terms of Service</Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 14, paddingBottom: 18 },
  header: { height: 58, flexDirection: 'row', alignItems: 'center' },
  backBtn: { marginRight: 6, padding: 2 },
  headerTitle: { fontSize: fontSizes.subMenu, color: '#111217', fontWeight: '700' },

  mainHead: { marginTop: 10, marginBottom: 8, fontSize: fontSizes.subMenu, color: '#111217', fontWeight: '700' },
  divider: { marginVertical: 8, borderBottomWidth: 1, borderBottomColor: '#D9D9DD' },

  toggleRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  toggleTextWrap: { flex: 1, paddingRight: 12 },
  rowTitle: { color: '#111217', fontSize: fontSizes.paragraph, fontWeight: '600' },
  rowSub: { marginTop: 2, color: '#9A9AA0', fontSize: fontSizes.paragraph, lineHeight: 16 },

  sectionHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  sectionHeadText: { color: '#111217', fontSize: fontSizes.paragraph, fontWeight: '600' },
  hintText: { marginTop: 2, color: '#9A9AA0', fontSize: fontSizes.paragraph},
  groupTitle: { marginTop: 8, marginBottom: 4, color: '#111217', fontSize: fontSizes.paragraph, fontWeight: '600' },
  radioRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  radioLabel: { marginLeft: 8, color: '#111217', fontSize: fontSizes.paragraph},

  iconAction: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
  iconActionText: { marginLeft: 8, fontSize: fontSizes.paragraph, color: '#111217' },
  deleteText: { color: '#EB1111' },

  inputLabel: { marginTop: 6, marginBottom: 4, color: '#111217', fontSize: fontSizes.paragraph, fontWeight: '600' },
  input: {
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CBCBD0',
    backgroundColor: '#EFEFF1',
    paddingHorizontal: 8,
    fontSize: fontSizes.paragraph,
    color: '#111217',
  },
  actionPair: { marginTop: 8, flexDirection: 'row', justifyContent: 'flex-end', gap: 8 },
  miniBtn: { height: 24, minWidth: 56, borderRadius: 4, backgroundColor: '#15161B', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 },
  miniBtnText: { color: '#fff', fontSize: fontSizes.paragraph, fontWeight: '500' },

  phoneRow: {
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CBCBD0',
    backgroundColor: '#EFEFF1',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  codeBox: { paddingHorizontal: 8, borderRightWidth: 1, borderRightColor: '#CBCBD0', height: '100%', justifyContent: 'center' },
  codeTxt: { fontSize: fontSizes.paragraph, color: '#111217' },
  phoneInput: { flex: 1, fontSize: fontSizes.paragraph, color: '#111217', paddingHorizontal: 8, paddingVertical: 0 },
  verifyBtn: { minWidth: 46, height: '100%', borderLeftWidth: 1, borderLeftColor: '#CBCBD0', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6 },
  verifyTxt: { fontSize: fontSizes.paragraph, color: '#111217' },

  activityRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 4, paddingBottom: 6, borderBottomWidth: 1, borderBottomColor: '#E0E0E4' },
  activityLeft: { flex: 1, paddingRight: 10 },
  activityDate: { color: '#4A4B50', fontSize: fontSizes.paragraph},
  activityMain: { color: '#111217', fontSize: fontSizes.paragraph, fontWeight: '600', marginTop: 1 },
  activitySub: { color: '#4A4B50', fontSize: fontSizes.paragraph, marginTop: 1 },
  activityMenu: { height: 24, borderRadius: 4, backgroundColor: '#F4F4F5', paddingHorizontal: 8, justifyContent: 'center' },
  activityMenuText: { fontSize: fontSizes.paragraph, color: '#111217' },

  verifyInputRow: {
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CBCBD0',
    backgroundColor: '#EFEFF1',
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyInput: { flex: 1, fontSize: fontSizes.paragraph, color: '#111217', paddingHorizontal: 8, paddingVertical: 0 },

  footer: { marginTop: 10, paddingTop: 6, borderTopWidth: 1, borderTopColor: '#D9D9DD', flexDirection: 'row', justifyContent: 'space-around' },
  footerLink: { color: '#111217', fontSize: fontSizes.paragraph, textDecorationLine: 'underline' },
});

export default PrivacySecurityScreen;
