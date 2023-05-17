import { View } from 'react-native';

import { cn } from '@/lib/utils';

import { elementWrapperStyles } from './FormElementWrapper.styles';
import { FormElementWrapperProps } from './FormElementWrapper.types';

export default function FormElementWrapper({ children, ...props }: FormElementWrapperProps) {
  return (
    <View className={cn(elementWrapperStyles({ size: 'md' }))} {...props}>
      {children}
    </View>
  );
}
