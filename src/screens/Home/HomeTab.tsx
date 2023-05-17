import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '@/components/ui';
import { HomeTabParamList } from '@/types/common';

import Account from '../Account';

import Home from './Home';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const homeIcon = ({ color }: { color: string }) => <Icon name="Home" fill={color} />;

export default function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: 'inter-medium',
        },
        tabBarActiveTintColor: '#7F3DFF',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: homeIcon,
          header: () => null,
        }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
