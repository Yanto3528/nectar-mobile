import { Text, TextProps } from 'react-native'
import { cn } from '@/lib/utils'

export default function CustomText({ className, ...props }: TextProps) {
  return <Text className={cn('font-inter text-dark', className)} {...props} />
}