import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import ModalShell from '../../components/ModalShell';
import ScreenContainer from '../../components/ScreenContainer';
import SegmentedControl from '../../components/SegmentedControl';
import { premiumPlans } from '../../data/mockData';
import { resolveTheme } from '../../utils/theme';
import fontSizes from '../../constants/fontsize';

const PremiumPlansScreen = ({ navigation }) => {
  const mode = useSelector(state => state.theme.mode);
  const theme = resolveTheme(mode);
  const [cycle, setCycle] = useState('monthly');
  const [successVisible, setSuccessVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  return (
    <ScreenContainer theme={theme}>
      <AppHeader theme={theme} title="Premium Plans" onLeftPress={() => navigation.goBack()} />
      <SegmentedControl
        theme={theme}
        options={[
          { label: 'Monthly', value: 'monthly' },
          { label: 'Yearly', value: 'yearly' },
        ]}
        activeValue={cycle}
        onChange={setCycle}
      />

      {premiumPlans.map(plan => (
        <AppCard key={plan.id} theme={theme} style={styles.card}>
          <Text style={[styles.tier, { color: theme.text }]}>{plan.tier}</Text>
          <Text style={{ color: theme.primary, fontWeight: '700', fontSize: fontSizes.buttonText}}>
            ${cycle === 'monthly' ? plan.monthly : plan.yearly}
          </Text>
          {plan.perks.map(perk => (
            <Text key={perk} style={{ color: theme.mutedText }}>• {perk}</Text>
          ))}
          <AppButton title="Choose Plan" theme={theme} onPress={() => setSuccessVisible(true)} />
        </AppCard>
      ))}

      <AppCard theme={theme}>
        <Text style={[styles.tier, { color: theme.text }]}>Payment Screen Layout (UI only)</Text>
        <Text style={{ color: theme.mutedText }}>Card number, holder, CVV placeholder blocks</Text>
        <AppButton title="Mock Pay" theme={theme} onPress={() => setErrorVisible(true)} style={{ marginTop: 12 }} />
      </AppCard>

      <ModalShell theme={theme} visible={successVisible} onClose={() => setSuccessVisible(false)}>
        <Text style={[styles.tier, { color: theme.text }]}>Success Modal</Text>
        <Text style={{ color: theme.mutedText }}>Plan activated successfully (mock).</Text>
      </ModalShell>

      <ModalShell theme={theme} visible={errorVisible} onClose={() => setErrorVisible(false)}>
        <Text style={[styles.tier, { color: theme.text }]}>Error Modal</Text>
        <Text style={{ color: theme.mutedText }}>Payment failed placeholder (mock).</Text>
      </ModalShell>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  card: { gap: 8 },
  tier: { fontSize: fontSizes.subMenu, fontWeight: '800' },
});

export default PremiumPlansScreen;
