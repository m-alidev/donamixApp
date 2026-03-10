import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import ModalShell from '../../components/ModalShell';
import ScreenContainer from '../../components/ScreenContainer';
import SegmentedControl from '../../components/SegmentedControl';
import { gifts } from '../../data/mockData';
import { resolveTheme } from '../../utils/theme';
import fontSizes from '../../constants/fontsize';

const GiftsScreen = ({ navigation }) => {
  const mode = useSelector(state => state.theme.mode);
  const theme = resolveTheme(mode);
  const [category, setCategory] = useState('Popular');
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  const categories = useMemo(() => ['Popular', 'Premium', 'Luxury'], []);
  const filtered = gifts.filter(gift => gift.category === category);

  return (
    <ScreenContainer theme={theme}>
      <AppHeader theme={theme} title="Gifts" onLeftPress={() => navigation.goBack()} />
      <SegmentedControl
        theme={theme}
        activeValue={category}
        onChange={setCategory}
        options={categories.map(item => ({ label: item, value: item }))}
      />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ flex: 1 }} onPress={() => setConfirmVisible(true)}>
            <AppCard theme={theme} style={styles.giftCard}>
              <View style={[styles.image, { backgroundColor: theme.surfaceAlt }]} />
              <Text style={{ color: theme.text, fontWeight: '700' }}>{item.name}</Text>
              <Text style={{ color: theme.mutedText }}>{item.price} coins</Text>
            </AppCard>
          </TouchableOpacity>
        )}
      />

      <ModalShell theme={theme} visible={confirmVisible} onClose={() => setConfirmVisible(false)}>
        <Text style={[styles.title, { color: theme.text }]}>Buy Gift Confirmation</Text>
        <AppButton title="Confirm" theme={theme} onPress={() => { setConfirmVisible(false); setSuccessVisible(true); }} />
      </ModalShell>

      <ModalShell theme={theme} visible={successVisible} onClose={() => setSuccessVisible(false)}>
        <Text style={[styles.title, { color: theme.text }]}>Success Animation Placeholder</Text>
        <View style={[styles.animBox, { backgroundColor: theme.surfaceAlt }]} />
      </ModalShell>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  column: { gap: 10 },
  giftCard: { gap: 8, marginBottom: 10 },
  image: { height: 90, borderRadius: 12 },
  title: { fontSize: fontSizes.subMenu, fontWeight: '700' },
  animBox: { height: 120, borderRadius: 12 },
});

export default GiftsScreen;
