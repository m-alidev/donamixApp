import { Appearance } from 'react-native';
import { darkTheme, lightTheme } from '../constants/theme';

export const resolveTheme = mode => {
  if (mode === 'light') {
    return lightTheme;
  }
  if (mode === 'dark') {
    return darkTheme;
  }
  return Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;
};

export const formatCoins = value => `${Number(value).toLocaleString()} coins`;
