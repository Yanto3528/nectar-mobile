import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { RootStackParamList } from "@/types/common";

import Expense from "./src/screens/Expense";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeTab from "@/screens/Home/HomeTab";

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "inter-thin": require("./assets/fonts/Inter-Thin.ttf"),
    inter: require("./assets/fonts/Inter-Regular.ttf"),
    "inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
    "inter-semibold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
    "inter-extrabold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "inter-black": require("./assets/fonts/Inter-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1">
      <GestureHandlerRootView>
        <View className="h-full w-full" onLayout={onLayoutRootView}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="HomeTab"
                component={HomeTab}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Expense"
                component={Expense}
                options={{
                  headerTitleAlign: "center",
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontFamily: "inter-semibold",
                  },
                  headerStyle: {
                    backgroundColor: "#FD3C4A",
                    // backgroundColor: '#00A86B'
                  },
                }}
              />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </NavigationContainer>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
