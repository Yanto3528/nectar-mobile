import { VariantProps } from 'class-variance-authority';
import { TouchableOpacityProps } from 'react-native';

import { radioStyles } from './Radio.styles';

type RadioStylesProps = VariantProps<typeof radioStyles>;

export type RadioProps = TouchableOpacityProps &
  Pick<RadioStylesProps, 'bordered'> & {
    value: string;
  };
