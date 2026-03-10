import React from 'react';
import { useSelector } from 'react-redux';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import AppInput from '../../components/AppInput';
import ScreenContainer from '../../components/ScreenContainer';
import { resolveTheme } from '../../utils/theme';

const AddCoinsScreen = ({ navigation }) => {
  const mode = useSelector(state => state.theme.mode);
  const theme = resolveTheme(mode);

  return (
    <ScreenContainer theme={theme}>
      <AppHeader theme={theme} title="Add Coins" onLeftPress={() => navigation.goBack()} />
      <AppCard theme={theme} style={{ gap: 12 }}>
        <AppInput theme={theme} label="Amount" placeholder="1000" />
        <AppInput theme={theme} label="Payment Method" placeholder="Card ending 1221" />
        <AppButton theme={theme} title="Add (UI only)" onPress={() => navigation.goBack()} />
      </AppCard>
    </ScreenContainer>
  );
};

export default AddCoinsScreen;
