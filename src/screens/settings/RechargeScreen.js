import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import fontSizes from '../../constants/fontsize';

const PACKAGES = [
  { id: 'p1', coins: '100 Coins', price: 'for $0.99' },
  { id: 'p2', coins: '300 Coins', price: 'for $2.99' },
  { id: 'p3', coins: '500 Coins', price: 'for $4.99' },
  { id: 'p4', coins: '1,000 Coins', price: 'for $9.99' },
  { id: 'p5', coins: '1,500 Coins', price: 'for $14.99' },
  { id: 'p6', coins: '2,500 Coins', price: 'for AED $24.99' },
  { id: 'p7', coins: '5,000 Coins', price: 'for $49.99' },
  { id: 'p8', coins: '10,000 Coins', price: 'for $99.99' },
];

const RechargeScreen = ({ navigation }) => {
  return (
    <ScreenContainer
      scroll={false}
      noPadding
      header={
        <AppHeader
          title="Recharge"
          onLeftPress={() => navigation.goBack()}
          mode="plain"
          containerStyle={styles.header}
          rightIcons={[{ icon: 'ellipsis-vertical', size: 30 }]}
        />
      }
    >
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          Use Donamix Coins to send virtual gifts, boost travel trips, unlock Premium features, and enjoy exclusive benefits. Show your appreciation! appreciation!
        </Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Your Balance</Text>
          <Text style={styles.balanceValue}>3,500 Coins</Text>
        </View>

        {PACKAGES.map(item => (
          <View style={styles.packRow} key={item.id}>
            <Text style={styles.coinIcon}>🪙</Text>
            <View style={styles.packInfo}>
              <Text style={styles.packCoins}>{item.coins}</Text>
              <Text style={styles.packPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.buyBtn}>
              <Text style={styles.buyText}>Buy</Text>
            </TouchableOpacity>
          </View>
        ))}

        <Text style={styles.learnText}>Earn Free Coins <Text style={styles.link}>Learn More</Text></Text>
        <Text style={styles.smallMuted}>One-time opportunity to earn free Coins.</Text>
        <Text style={styles.legal}>
          The usage of coins is regulated by <Text style={styles.bold}>License Agreement</Text>{'\n'}
          Refund is unavailable. <Text style={styles.link}>Coins Guidelines</Text>
        </Text>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ECECEE' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 14, paddingBottom: 18 },
  header: { height: 84, flexDirection: 'row', alignItems: 'center' },
  backBtn: { marginRight: 10 },
  headerTitle: { flex: 1, color: '#111217', fontSize: fontSizes.title, fontWeight: '700' },
  description: { color: '#8B8B90', fontSize: fontSizes.buttonText, lineHeight: 37 / 2, marginBottom: 12 },
  balanceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  balanceLabel: { color: '#111217', fontSize: fontSizes.title, fontWeight: '700' },
  balanceValue: { color: '#808085', fontSize: fontSizes.title, fontWeight: '700' },
  packRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  coinIcon: { fontSize: fontSizes.title, width: 72, textAlign: 'center' },
  packInfo: { flex: 1, marginLeft: 10 },
  packCoins: { color: '#111217', fontSize: fontSizes.title, fontWeight: '600' },
  packPrice: { color: '#7E7E84', fontSize: fontSizes.title, marginTop: 1 },
  buyBtn: { width: 128, height: 56, borderRadius: 14, backgroundColor: '#111217', alignItems: 'center', justifyContent: 'center' },
  buyText: { color: '#fff', fontSize: fontSizes.title, fontWeight: '500' },
  learnText: { marginTop: 8, color: '#9A9AA0', fontSize: fontSizes.title},
  link: { color: '#356FDD' },
  smallMuted: { color: '#7D7E84', fontSize: fontSizes.buttonText, marginTop: 2 },
  legal: { color: '#7D7E84', fontSize: fontSizes.buttonText, marginTop: 14, lineHeight: 38 / 2 },
  bold: { color: '#89898E', fontWeight: '700' },
});

export default RechargeScreen;
