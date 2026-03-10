import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import { resolveTheme } from '../../utils/theme';
import fontSizes from '../../constants/fontsize';

const LiveAnalyticsScreen = ({ navigation }) => {
  const mode = useSelector(state => state.theme.mode);
  const theme = resolveTheme(mode);

  return (
    <ScreenContainer theme={theme}>
      <AppHeader theme={theme} title="Live Analytics" onLeftPress={() => navigation.goBack()} />
      <AppCard theme={theme} style={styles.card}>
        <Text style={[styles.label, { color: theme.mutedText }]}>Peak Viewers</Text>
        <Text style={[styles.value, { color: theme.text }]}>2,480</Text>
      </AppCard>
      <AppCard theme={theme} style={styles.card}>
        <Text style={[styles.label, { color: theme.mutedText }]}>Gifts Received</Text>
        <Text style={[styles.value, { color: theme.text }]}>18,000 coins</Text>
      </AppCard>
      <AppCard theme={theme} style={styles.card}>
        <Text style={[styles.label, { color: theme.mutedText }]}>Engagement Rate</Text>
        <Text style={[styles.value, { color: theme.text }]}>68%</Text>
      </AppCard>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  card: { gap: 6 },
  label: { fontSize: fontSizes.paragraph},
  value: { fontSize: fontSizes.buttonText, fontWeight: '800' },
});

export default LiveAnalyticsScreen;
