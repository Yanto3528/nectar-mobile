import { VariantProps } from 'class-variance-authority';
import { TouchableOpacityProps } from 'react-native';

import { buttonStyles } from './Button.styles';

type ButtonStylesProps = VariantProps<typeof buttonStyles>;

export type ButtonProps = TouchableOpacityProps &
  ButtonStylesProps & {
    textClassName?: string;
  };
