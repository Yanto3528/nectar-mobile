import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "@/components/ui";
import { HomeTabParamList } from "@/types/common";

import Home from "./Home";
import Account from "../Account";

const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: "inter-medium",
        },
        tabBarActiveTintColor: "#7F3DFF",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Icon name="Home" fill={color} />,
          header: () => null,
        }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
