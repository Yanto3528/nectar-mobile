import { TextProps } from 'react-native'

import { cn } from '@/lib/utils';

import CustomText from "../../CustomText";

export default function FormErrorMessage({ children, className, ...props }: TextProps) {
  return <CustomText className={cn('text-red', className)} {...props}>{children}</CustomText>
}