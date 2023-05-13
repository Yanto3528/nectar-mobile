import { View, TextInput } from 'react-native'

import { cn } from '@/lib/utils'

import { FormLabel, FormErrorMessage } from '../Form'
import { InputProps } from './Input.types'
import { inputStyles } from './Input.styles'

export default function Input({ className, label, labelClassName, error, ...props }: InputProps) {
  return <View>
    {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
    <TextInput className={cn(inputStyles({ error: !!error, className }))} {...props} />
    {error && <FormErrorMessage>{error}</FormErrorMessage>}
  </View>
}