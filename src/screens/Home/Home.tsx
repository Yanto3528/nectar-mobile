import { View, Text } from 'react-native'
import { CustomText } from '@/components/ui'
import { HomeIcon } from '@/components/icons'

export default function Home() {
  return (
    <View className='p-4 bg-white h-full'>
      <HomeIcon width={40} height={40} fill='#ff0000' />
      <CustomText className='text-center'>Inter text!!</CustomText>
      <Text>Hello from home</Text>
    </View>
  )
}