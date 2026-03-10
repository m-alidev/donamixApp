import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenuScreen from '../screens/main/MainMenuScreen';
import InboxScreen from '../screens/inbox/InboxScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import ContactsScreen from '../screens/contacts/ContactsScreen';
import RadioScreen from '../screens/radio/RadioScreen';
import RadioPlayerScreen from '../screens/radio/RadioPlayerScreen';
import { ROUTES } from '../constants/navigation';

const Stack = createNativeStackNavigator();

const MainMenuStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.MAIN_MENU} component={MainMenuScreen} />
      <Stack.Screen name={ROUTES.INBOX} component={InboxScreen} />
      <Stack.Screen name={ROUTES.CONTACTS} component={ContactsScreen} />
      <Stack.Screen name={ROUTES.RADIO} component={RadioScreen} />
      <Stack.Screen name={ROUTES.RADIO_PLAYER} component={RadioPlayerScreen} />
      <Stack.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainMenuStack;
