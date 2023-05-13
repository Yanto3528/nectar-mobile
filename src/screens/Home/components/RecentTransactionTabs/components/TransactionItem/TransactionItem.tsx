import { View } from "react-native";

import { CustomText } from "@/components/ui";

export default function TransactionItem() {
  return <View className='flex-row p-4'>
    <View className='flex-row justify-between w-full'>
      <View className='w-1/2'>
        <CustomText className='text-xs text-dark-25'>11 May 2023 10:00AM</CustomText>
        <CustomText className='text-dark-25 text-xs'>2 Products</CustomText>
        <CustomText className='font-inter-medium truncate' numberOfLines={1}>Test Product</CustomText>
      </View>
      <View className='items-end'>
        <CustomText className='text-dark-25 text-xs'>Settled</CustomText>
        <CustomText className='text-green font-inter-semibold'>+ $120.00</CustomText>
        <CustomText className='font-inter-semibold text-red text-xs'>Cost: - $60.00</CustomText>
      </View>
    </View>
  </View>
}