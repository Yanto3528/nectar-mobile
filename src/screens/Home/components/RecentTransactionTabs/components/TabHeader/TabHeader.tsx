import { TouchableOpacity, View } from 'react-native';

import { CustomText } from '@/components/ui';

export default function TabHeader() {
  return (
    <View className="p-4 flex-row justify-between items-center">
      <CustomText className="text-xl font-inter-bold">Recent transaction</CustomText>
      <TouchableOpacity className="py-2 px-4 bg-primary-20 rounded-full">
        <CustomText className="text-primary font-inter-medium">See all</CustomText>
      </TouchableOpacity>
    </View>
  );
}
