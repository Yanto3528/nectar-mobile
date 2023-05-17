import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { View, ScrollView, SafeAreaView, Button } from 'react-native';

import { CustomText, Icon } from '@/components/ui';

import { RecentTransactionTabs } from './components';

type HomeProps = NativeStackScreenProps<any>;

export default function Home({ navigation }: HomeProps) {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        <View className="bg-light h-full">
          <LinearGradient colors={['#FFF6E5', '#F8EDD84D']} className="p-4 rounded-b-3xl">
            <View className="h-16" />
            <Button title="Create expense" onPress={() => navigation.navigate('Expense')} />
            <CustomText className="text-center text-dark-25 font-inter-medium mb-4">
              Account Balance
            </CustomText>
            <CustomText className="text-center font-inter-semibold text-4xl">$9,400</CustomText>
            <View className="mt-6">
              <View className="flex-row items-center p-4 bg-green rounded-3xl">
                <View className="rounded-2xl bg-light w-12 h-12 items-center justify-center">
                  <Icon name="Income" fill="currentColor" className="text-green" />
                </View>
                <View className="ml-3">
                  <CustomText className="font-inter-medium text-light">Income</CustomText>
                  <CustomText className="font-inter-semibold text-2xl text-light">
                    $ 5,000
                  </CustomText>
                </View>
              </View>
              <View className="flex-row items-center p-4 bg-red rounded-3xl mt-4">
                <View className="rounded-2xl bg-light w-12 h-12 items-center justify-center">
                  <Icon name="Expense" fill="currentColor" className="text-red" />
                </View>
                <View className="ml-3">
                  <CustomText className="font-inter-medium text-light">Income</CustomText>
                  <CustomText className="font-inter-semibold text-2xl text-light">
                    $ 5,000
                  </CustomText>
                </View>
              </View>
            </View>
          </LinearGradient>
          <RecentTransactionTabs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// export default function Home() {
//   return (
// <TransactionScreen />
// <Stack.Navigator>
//   <Stack.Screen name='Transaction' component={TransactionScreen} options={{ headerShown: false }} />
//   <Stack.Screen name='Expense' component={Expense} options={{
//     headerTitleAlign: 'center',
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontFamily: 'inter-semibold',
//     },
//     headerStyle: {
//       backgroundColor: '#FD3C4A'
//       // backgroundColor: '#00A86B'
//     },
//   }} />
// </Stack.Navigator>
//   );
// }
