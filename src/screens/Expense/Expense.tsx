import { View } from 'react-native'

import { CustomText, Input, DatePicker } from '@/components/ui'

export default function Expense() {
  return (
    <View className='flex-1 p-4 bg-light'>
      <CustomText className='font-inter-bold text-lg mb-2'>Total Expense</CustomText>
      <View style={{ gap: 16 }}>
        <Input keyboardType='decimal-pad' placeholder='Enter amount' error='This field is required' />
        <Input placeholder='Enter amount' />
      </View>
      <DatePicker label='Select date' error='Date is required' />
    </View>
  )
}