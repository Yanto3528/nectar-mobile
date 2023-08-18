import { useController } from 'react-hook-form';
import { View, TextInput } from 'react-native';

import { cn } from '@/lib/utils';

import { FormLabel, FormErrorMessage } from '../Form';

import { inputStyles } from './Input.styles';
import { InputProps } from './Input.types';

export default function Input({
  className,
  label,
  labelClassName,
  error,
  name,
  control,
  ...props
}: InputProps) {
  const { field } = useController({ name, control });

  return (
    <View>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <TextInput className={cn(inputStyles({ error: !!error, className }))} {...props} {...field} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </View>
  );
}
