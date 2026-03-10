import React from 'react';
import { useSelector } from 'react-redux';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import AppInput from '../../components/AppInput';
import ScreenContainer from '../../components/ScreenContainer';
import { resolveTheme } from '../../utils/theme';

const CreateTripScreen = ({ navigation }) => {
  const mode = useSelector(state => state.theme.mode);
  const theme = resolveTheme(mode);

  return (
    <ScreenContainer theme={theme}>
      <AppHeader theme={theme} title="Create Trip" onLeftPress={() => navigation.goBack()} />
      <AppCard theme={theme} style={{ gap: 12 }}>
        <AppInput theme={theme} label="Destination" placeholder="Paris" />
        <AppInput theme={theme} label="Date" placeholder="Apr 20, 2026" />
        <AppInput theme={theme} label="Description" placeholder="Trip details" multiline />
        <AppButton theme={theme} title="Publish" onPress={() => navigation.goBack()} />
      </AppCard>
    </ScreenContainer>
  );
};

export default CreateTripScreen;
