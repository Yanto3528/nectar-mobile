import { View } from 'react-native';

import { cn } from '@/lib/utils';

import { FormLabel, FormErrorMessage } from '../Form';

import { Radio } from './components';
import { RadioGroupProvider } from './RadioGroup.context';
import { RadioGroupProps } from './RadioGroup.types';

export default function RadioGroup({
  children,
  value,
  onChange,
  style,
  orientation = 'vertical',
  label,
  labelClassName,
  error,
  ...props
}: RadioGroupProps) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <RadioGroupProvider value={value} onChange={onChange} orientation={orientation} error={error}>
      <View>
        {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
        <View
          className={cn(isHorizontal ? 'flex-row justify-between' : '')}
          style={[{ gap: 8 }, style]}
          {...props}
        >
          {children}
        </View>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </View>
    </RadioGroupProvider>
  );
}

RadioGroup.Radio = Radio;
