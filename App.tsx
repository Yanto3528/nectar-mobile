import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { Icon } from '@/components/ui'

import Home from './src/screens/Home'
import Account from './src/screens/Account'
import { useCallback } from 'react';

type RootStackParamList = {
  Home: undefined;
  Account: undefined;
}

const Tab = createBottomTabNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'inter-thin': require('./assets/fonts/Inter-Thin.ttf'),
    'inter': require('./assets/fonts/Inter-Regular.ttf'),
    'inter-medium': require('./assets/fonts/Inter-Medium.ttf'),
    'inter-semibold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
    'inter-extrabold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'inter-black': require('./assets/fonts/Inter-Black.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View className='h-full w-full' onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarLabelStyle: {
            fontFamily: 'inter-medium'
          },
          tabBarActiveTintColor: '#7F3DFF'
        }}>
          <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ color }) => <Icon name='Home' fill={color} />,
            header: () => null,
          }} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer >

    </View>
  );
}