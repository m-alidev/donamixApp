import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import SectionTitle from '../../components/SectionTitle';
import { ROUTES } from '../../constants/navigation';
import { formatCoins, resolveTheme } from '../../utils/theme';
import fontSizes from '../../constants/fontsize';

const WalletScreen = ({ navigation }) => {
  const mode = useSelector(state => state.theme.mode);
  const theme = resolveTheme(mode);
  const wallet = useSelector(state => state.wallet);

  return (
    <ScreenContainer theme={theme}>
      <AppHeader theme={theme} title="Wallet" rightIcon="add-circle-outline" onRightPress={() => navigation.navigate(ROUTES.ADD_COINS)} />
      <AppCard theme={theme}>
        <Text style={[styles.label, { color: theme.mutedText }]}>Current Balance</Text>
        <Text style={[styles.value, { color: theme.text }]}>{formatCoins(wallet.balance)}</Text>
      </AppCard>

      <SectionTitle theme={theme} title="Transaction History" />
      {wallet.transactions.map(item => (
        <AppCard key={item.id} theme={theme} style={styles.row}>
          <Text style={{ color: theme.text, fontWeight: '700' }}>{item.title}</Text>
          <Text style={{ color: item.amount > 0 ? '#16A34A' : '#DC2626' }}>{item.amount}</Text>
        </AppCard>
      ))}

      <SectionTitle theme={theme} title="Subscription History" />
      {wallet.subscriptions.map(item => (
        <AppCard key={item.id} theme={theme} style={styles.row}>
          <Text style={{ color: theme.text, fontWeight: '700' }}>{item.plan}</Text>
          <Text style={{ color: theme.mutedText }}>${item.amount}</Text>
        </AppCard>
      ))}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  label: { fontSize: fontSizes.paragraph},
  value: { fontSize: fontSizes.title, fontWeight: '800' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});

export default WalletScreen;
