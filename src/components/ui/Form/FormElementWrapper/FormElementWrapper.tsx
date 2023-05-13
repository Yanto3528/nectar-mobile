import { View } from 'react-native'

import { FormElementWrapperProps } from './FormElementWrapper.types'
import { elementWrapperStyles } from './FormElementWrapper.styles'
import { cn } from '@/lib/utils'

export default function FormElementWrapper({ children, ...props }: FormElementWrapperProps) {
  return <View className={cn(elementWrapperStyles({ size: 'md' }))} {...props}>
    {children}
  </View>
}