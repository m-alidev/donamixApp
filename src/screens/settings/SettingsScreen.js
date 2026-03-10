import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import { ROUTES } from '../../constants/navigation';
import fontSizes from '../../constants/fontsize';

const SECTION_1 = [
  { id: 'notifications', label: 'Notifications', icon: 'notifications-outline', route: ROUTES.NOTIFICATIONS },
  { id: 'dnd', label: 'Do Not Disturb', icon: 'ban-outline', toggle: true },
];

const SECTION_2 = [
  { id: 'account', label: 'Account', icon: 'person-outline' },
  { id: 'appearance', label: 'Appearance', icon: 'color-palette-outline', route: ROUTES.APPEARANCE },
  { id: 'language', label: 'Language & Region', icon: 'language-outline', route: ROUTES.LANGUAGE },
  { id: 'privacy', label: 'Privacy & Security', icon: 'hand-left-outline', route: ROUTES.PRIVACY_SECURITY },
  { id: 'blocked', label: 'Blocked', icon: 'people-outline', route: ROUTES.BLOCKED_USERS },
  { id: 'upgrade', label: 'Upgrade', icon: 'diamond-outline', route: ROUTES.PREMIUM },
];

const SECTION_3 = [
  { id: 'balance', label: 'Balance', icon: 'server-outline', route: ROUTES.RECHARGE },
  { id: 'recharge', label: 'Recharge', icon: 'wallet-outline', route: ROUTES.RECHARGE },
  { id: 'subscriptions', label: 'Subscriptions', icon: 'diamond-outline', route: ROUTES.PREMIUM },
  { id: 'my-gifts', label: 'My Gifts', icon: 'gift-outline', route: ROUTES.GIFTS },
];

const SECTION_4 = [
  { id: 'about', label: 'About', icon: 'alert-circle-outline', route: ROUTES.ABOUT_US },
  { id: 'help', label: 'Help', icon: 'help-circle-outline', route: ROUTES.HELP_SUPPORT },
  { id: 'feedback', label: 'Feedback', icon: 'chatbox-ellipses-outline', route: ROUTES.FEEDBACK },
  { id: 'mix', label: 'Match Mania Mix', icon: 'game-controller-outline', route: ROUTES.MATCH_MANIA },
  { id: 'legal', label: 'Legal and Compliance', icon: 'scale-outline' },
  { id: 'logout', label: 'Logout', icon: 'log-out-outline' },
];

const SettingsScreen = ({ navigation }) => {
  const [dnd, setDnd] = useState(true);

  const renderRow = item => (
    <TouchableOpacity key={item.id} style={styles.row} activeOpacity={0.8} onPress={() => item.route && navigation.navigate(item.route)}>
      <View style={styles.rowLeft}>
        <Icon name={item.icon} size={33} color="#131418" />
        <Text style={styles.rowLabel}>{item.label}</Text>
      </View>
      {item.toggle ? (
        <Switch
          value={dnd}
          onValueChange={setDnd}
          trackColor={{ false: '#D8D8DB', true: '#D8D8DB' }}
          thumbColor={dnd ? '#111217' : '#fff'}
          ios_backgroundColor="#D8D8DB"
        />
      ) : (
        <Icon name="chevron-forward" size={34} color="#B4B4B8" />
      )}
    </TouchableOpacity>
  );

  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={<AppHeader title="Settings" onLeftPress={() => navigation.goBack()} mode="plain" containerStyle={styles.header} />}
    >
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {SECTION_1.map(renderRow)}
          <View style={styles.divider} />
          {SECTION_2.map(renderRow)}
          <View style={styles.divider} />
          {SECTION_3.map(renderRow)}
          <View style={styles.divider} />
          {SECTION_4.map(renderRow)}
        </View>

        <View style={styles.footerLinks}>
          <Text style={styles.footerText}>Privacy policy</Text>
          <Text style={styles.footerText}>Terms of Service</Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 14 },
  header: { height: 84, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14 },
  backBtn: { marginRight: 10 },
  title: { fontSize: fontSizes.title, color: '#111217', fontWeight: '700' },
  content: { flex: 1, paddingHorizontal: 10 },
  row: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 6 },
  rowLeft: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  rowLabel: { color: '#111217', fontSize: fontSizes.menu, fontWeight: '500' },
  divider: { borderBottomWidth: 1, borderBottomColor: '#D5D5D9', marginVertical: 8 },
  footerLinks: { height: 44, borderTopWidth: 1, borderTopColor: '#DADADF', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 4 },
  footerText: { color: '#14151A', fontSize: fontSizes.subMenu, textDecorationLine: 'underline' },
});

export default SettingsScreen;
