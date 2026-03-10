import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import ModalShell from '../../components/ModalShell';
import ScreenContainer from '../../components/ScreenContainer';
import { ROUTES } from '../../constants/navigation';
import { trips } from '../../data/mockData';
import { resolveTheme } from '../../utils/theme';
import fontSizes from '../../constants/fontsize';

const TripsScreen = ({ navigation }) => {
  const mode = useSelector(state => state.theme.mode);
  const theme = resolveTheme(mode);
  const [featureVisible, setFeatureVisible] = useState(false);

  return (
    <ScreenContainer theme={theme}>
      <AppHeader theme={theme} title="My Trips" rightIcon="add-outline" onRightPress={() => navigation.navigate(ROUTES.CREATE_TRIP)} />
      {trips.map(trip => (
        <AppCard key={trip.id} theme={theme} style={styles.card}>
          <View>
            <Text style={[styles.title, { color: theme.text }]}>{trip.place}</Text>
            <Text style={{ color: theme.mutedText }}>{trip.date}</Text>
          </View>
          <AppButton title="Feature" theme={theme} variant="ghost" onPress={() => setFeatureVisible(true)} />
        </AppCard>
      ))}

      <AppCard theme={theme}>
        <Text style={[styles.title, { color: theme.text }]}>Order Summary UI</Text>
        <Text style={{ color: theme.mutedText }}>Trip Fee: 1,200 coins</Text>
        <Text style={{ color: theme.mutedText }}>Service: 90 coins</Text>
        <Text style={{ color: theme.text, fontWeight: '700', marginTop: 8 }}>Total: 1,290 coins</Text>
      </AppCard>

      <ModalShell visible={featureVisible} onClose={() => setFeatureVisible(false)} theme={theme}>
        <Text style={[styles.title, { color: theme.text }]}>Feature Trip Modal</Text>
        <Text style={{ color: theme.mutedText }}>Boost this trip for 500 coins (UI only)</Text>
        <AppButton title="Confirm" theme={theme} onPress={() => setFeatureVisible(false)} />
      </ModalShell>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  card: { gap: 10 },
  title: { fontSize: fontSizes.subMenu, fontWeight: '700' },
});

export default TripsScreen;
