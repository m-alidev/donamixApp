import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants/navigation';
import CallsScreen from '../screens/calls/CallsScreen';
import ContactsScreen from '../screens/contacts/ContactsScreen';

const Stack = createNativeStackNavigator();

const CallsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.CALLS} component={CallsScreen} />
      <Stack.Screen name={ROUTES.CONTACTS} component={ContactsScreen} />
    </Stack.Navigator>
  );
};

export default CallsStack;
