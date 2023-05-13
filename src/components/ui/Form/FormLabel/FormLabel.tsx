import { TextProps } from 'react-native'

import { cn } from '@/lib/utils'

import CustomText from '../../CustomText'

export default function FormLabel({ children, className, ...props }: TextProps) {
  return (
    <CustomText className={cn('font-inter-medium mb-2', className)} {...props}>{children}</CustomText>
  )
}