import { Control } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { BaseFormElementProps } from '@/types/form';

export type InputProps = TextInputProps &
  BaseFormElementProps & {
    name: string;
    control: Control;
  };
