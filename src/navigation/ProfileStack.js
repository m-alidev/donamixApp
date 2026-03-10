import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants/navigation';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import VisitorsScreen from '../screens/profile/VisitorsScreen';
import BasicInformationScreen from '../screens/profile/BasicInformationScreen';
import MyHobbiesScreen from '../screens/profile/MyHobbiesScreen';
import EducationWorkScreen from '../screens/profile/EducationWorkScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import PrivacySecurityScreen from '../screens/settings/PrivacySecurityScreen';
import ChangePasswordScreen from '../screens/settings/ChangePasswordScreen';
import BlockedUsersScreen from '../screens/settings/BlockedUsersScreen';
import AppearanceScreen from '../screens/settings/AppearanceScreen';
import LanguageScreen from '../screens/settings/LanguageScreen';
import FeedbackScreen from '../screens/settings/FeedbackScreen';
import RechargeScreen from '../screens/settings/RechargeScreen';
import AboutUsScreen from '../screens/settings/AboutUsScreen';
import HelpSupportScreen from '../screens/settings/HelpSupportScreen';
import MatchManiaScreen from '../screens/settings/MatchManiaScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMainScreen" component={ProfileScreen} />
      <Stack.Screen name={ROUTES.EDIT_PROFILE} component={EditProfileScreen} />
      <Stack.Screen name={ROUTES.BASIC_INFORMATION} component={BasicInformationScreen} />
      <Stack.Screen name={ROUTES.MY_HOBBIES} component={MyHobbiesScreen} />
      <Stack.Screen name={ROUTES.EDUCATION_WORK} component={EducationWorkScreen} />
      <Stack.Screen name={ROUTES.VISITORS} component={VisitorsScreen} />
      <Stack.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={ROUTES.PRIVACY_SECURITY} component={PrivacySecurityScreen} />
      <Stack.Screen name={ROUTES.CHANGE_PASSWORD} component={ChangePasswordScreen} />
      <Stack.Screen name={ROUTES.BLOCKED_USERS} component={BlockedUsersScreen} />
      <Stack.Screen name={ROUTES.APPEARANCE} component={AppearanceScreen} />
      <Stack.Screen name={ROUTES.LANGUAGE} component={LanguageScreen} />
      <Stack.Screen name={ROUTES.FEEDBACK} component={FeedbackScreen} />
      <Stack.Screen name={ROUTES.RECHARGE} component={RechargeScreen} />
      <Stack.Screen name={ROUTES.ABOUT_US} component={AboutUsScreen} />
      <Stack.Screen name={ROUTES.HELP_SUPPORT} component={HelpSupportScreen} />
      <Stack.Screen name={ROUTES.MATCH_MANIA} component={MatchManiaScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
