import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import BottomTabs from './BottomTabs';
import SplashScreen from '../screens/intro/SplashScreen';
import IntroScreen from '../screens/intro/IntroScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import OtpVerificationScreen from '../screens/auth/OtpVerificationScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import ChatRoomScreen from '../screens/chat/ChatRoomScreen';
import PrivateChatScreen from '../screens/inbox/PrivateChatScreen';
import LiveAnalyticsScreen from '../screens/live/LiveAnalyticsScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import VisitorsScreen from '../screens/profile/VisitorsScreen';
import GiftsReceivedScreen from '../screens/profile/GiftsReceivedScreen';
import BasicInformationScreen from '../screens/profile/BasicInformationScreen';
import MyHobbiesScreen from '../screens/profile/MyHobbiesScreen';
import EducationWorkScreen from '../screens/profile/EducationWorkScreen';
import TripsScreen from '../screens/trips/TripsScreen';
import CreateTripScreen from '../screens/trips/CreateTripScreen';
import WalletScreen from '../screens/wallet/WalletScreen';
import AddCoinsScreen from '../screens/wallet/AddCoinsScreen';
import PremiumPlansScreen from '../screens/premium/PremiumPlansScreen';
import GiftsScreen from '../screens/gifts/GiftsScreen';
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
import NotificationsScreen from '../screens/notifications/NotificationsScreen';
import MembersScreen from '../screens/chat/MembersScreen';
import AllMediaScreen from '../screens/chat/AllMediaScreen';
import { ROUTES } from '../constants/navigation';
import { resolveTheme } from '../utils/theme';

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ROUTES.LOGIN}>
    <AuthStack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
    <AuthStack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} />
    <AuthStack.Screen name={ROUTES.OTP} component={OtpVerificationScreen} />
    <AuthStack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

const AppNavigator = () => {
  const mode = useSelector(state => state.theme.mode);
  const resolvedTheme = resolveTheme(mode);

  return (
    <>
      <StatusBar
        animated
        barStyle={resolvedTheme.mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={resolvedTheme.background}
        translucent={false}
      />
      <NavigationContainer theme={resolvedTheme.mode === 'dark' ? DarkTheme : DefaultTheme}>
        <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ROUTES.SPLASH}>
          <RootStack.Screen name={ROUTES.SPLASH} component={SplashScreen} />
          <RootStack.Screen name={ROUTES.INTRO} component={IntroScreen} />
          <RootStack.Screen name={ROUTES.AUTH_STACK} component={AuthNavigator} />
          <RootStack.Screen name={ROUTES.APP_TABS} component={BottomTabs} />
          <RootStack.Screen name={ROUTES.CHAT_ROOM} component={ChatRoomScreen} />
          <RootStack.Screen name={ROUTES.MEMBERS} component={MembersScreen} />
          <RootStack.Screen name={ROUTES.ALL_MEDIA} component={AllMediaScreen} />
          <RootStack.Screen name={ROUTES.PRIVATE_CHAT} component={PrivateChatScreen} />
          <RootStack.Screen name={ROUTES.NOTIFICATIONS} component={NotificationsScreen} />
          <RootStack.Screen name={ROUTES.LIVE_ANALYTICS} component={LiveAnalyticsScreen} />
          <RootStack.Screen name={ROUTES.EDIT_PROFILE} component={EditProfileScreen} />
          <RootStack.Screen name={ROUTES.BASIC_INFORMATION} component={BasicInformationScreen} />
          <RootStack.Screen name={ROUTES.MY_HOBBIES} component={MyHobbiesScreen} />
          <RootStack.Screen name={ROUTES.EDUCATION_WORK} component={EducationWorkScreen} />
          <RootStack.Screen name={ROUTES.VISITORS} component={VisitorsScreen} />
          <RootStack.Screen name={ROUTES.GIFTS_RECEIVED} component={GiftsReceivedScreen} />
          <RootStack.Screen name={ROUTES.TRIPS} component={TripsScreen} />
          <RootStack.Screen name={ROUTES.CREATE_TRIP} component={CreateTripScreen} />
          <RootStack.Screen name={ROUTES.WALLET} component={WalletScreen} />
          <RootStack.Screen name={ROUTES.ADD_COINS} component={AddCoinsScreen} />
          <RootStack.Screen name={ROUTES.PREMIUM} component={PremiumPlansScreen} />
          <RootStack.Screen name={ROUTES.GIFTS} component={GiftsScreen} />
          <RootStack.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
          <RootStack.Screen name={ROUTES.PRIVACY_SECURITY} component={PrivacySecurityScreen} />
          <RootStack.Screen name={ROUTES.CHANGE_PASSWORD} component={ChangePasswordScreen} />
          <RootStack.Screen name={ROUTES.BLOCKED_USERS} component={BlockedUsersScreen} />
          <RootStack.Screen name={ROUTES.APPEARANCE} component={AppearanceScreen} />
          <RootStack.Screen name={ROUTES.LANGUAGE} component={LanguageScreen} />
          <RootStack.Screen name={ROUTES.FEEDBACK} component={FeedbackScreen} />
          <RootStack.Screen name={ROUTES.RECHARGE} component={RechargeScreen} />
          <RootStack.Screen name={ROUTES.ABOUT_US} component={AboutUsScreen} />
          <RootStack.Screen name={ROUTES.HELP_SUPPORT} component={HelpSupportScreen} />
          <RootStack.Screen name={ROUTES.MATCH_MANIA} component={MatchManiaScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
