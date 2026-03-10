import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/home/HomeScreen';
import MainMenuStack from './MainMenuStack';
import ChatHubsScreen from '../screens/chat/ChatHubsScreen';
import CallsStack from './CallsStack';
import ProfileStack from './ProfileStack';
import { ROUTES } from '../constants/navigation';
import fontSizes from '../constants/fontsize';

const Tab = createBottomTabNavigator();

const iconByRoute = {
  [ROUTES.HOME]: 'home',
  [ROUTES.MAIN_MENU]: 'apps-outline',
  [ROUTES.CHAT_HUBS]: 'chatbubbles-outline',
  [ROUTES.CALLS]: 'call-outline',
  [ROUTES.PROFILE]: 'person-outline',
};

const tabBarIcon = routeName => ({ color, size }) => (
  <Icon name={iconByRoute[routeName]} color={color} size={size} />
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F2F2F3',
          borderTopColor: '#DBDBDD',
          height: 66,
          paddingTop: 6,
        },
        tabBarActiveTintColor: '#111217',
        tabBarInactiveTintColor: '#66676C',
        tabBarLabelStyle: {
          fontSize: fontSizes.paragraph,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} options={{ title: 'Home', tabBarIcon: tabBarIcon(ROUTES.HOME) }} />
      <Tab.Screen
        name={ROUTES.MAIN_MENU}
        component={MainMenuStack}
        options={{ title: 'Main', tabBarIcon: tabBarIcon(ROUTES.MAIN_MENU) }}
      />
      <Tab.Screen
        name={ROUTES.CHAT_HUBS}
        component={ChatHubsScreen}
        options={{ title: 'Chat Hubs', tabBarIcon: tabBarIcon(ROUTES.CHAT_HUBS) }}
      />
      <Tab.Screen name={ROUTES.CALLS} component={CallsStack} options={{ title: 'Calls', tabBarIcon: tabBarIcon(ROUTES.CALLS) }} />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileStack}
        options={{ title: 'Profile', tabBarIcon: tabBarIcon(ROUTES.PROFILE) }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
