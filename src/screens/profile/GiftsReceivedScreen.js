import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import { gifts } from '../../data/mockData';
import { resolveTheme } from '../../utils/theme';

const GiftsReceivedScreen = ({ navigation }) => {
  const mode = useSelector(state => state.theme.mode);
  const theme = resolveTheme(mode);

  return (
    <ScreenContainer theme={theme}>
      <AppHeader theme={theme} title="Gifts Received" onLeftPress={() => navigation.goBack()} />
      {gifts.map(gift => (
        <AppCard key={gift.id} theme={theme}>
          <Text style={{ color: theme.text, fontWeight: '700' }}>{gift.name}</Text>
          <Text style={{ color: theme.mutedText }}>{gift.price} coins</Text>
        </AppCard>
      ))}
    </ScreenContainer>
  );
};

export default GiftsReceivedScreen;
