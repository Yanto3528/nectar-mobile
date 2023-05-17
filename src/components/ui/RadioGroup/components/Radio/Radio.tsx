import { View, TouchableOpacity } from 'react-native';

import CustomText from '@/components/ui/CustomText';
import { cn } from '@/lib/utils';

import { useRadioGroupContext } from '../../RadioGroup.context';

import { radioStyles, radioIndicatorStyles, radioActiveIndicatorStyles } from './Radio.styles';
import { RadioProps } from './Radio.types';

export default function Radio({ children, className, value, bordered, ...props }: RadioProps) {
  const { value: radioValue, onChange, orientation, error } = useRadioGroupContext();
  const isChecked = value === radioValue;

  const onRadioPress = () => {
    onChange?.(value);
  };

  return (
    <TouchableOpacity
      className={cn(
        radioStyles({
          bordered,
          checked: isChecked,
          orientation,
          error: !!error,
          className,
        })
      )}
      activeOpacity={0.6}
      onPress={onRadioPress}
      {...props}
    >
      <View className={cn(radioIndicatorStyles({ checked: isChecked, error: !!error }))}>
        {isChecked && <View className={cn(radioActiveIndicatorStyles({ error: !!error }))} />}
      </View>
      <CustomText className="ml-2">{children}</CustomText>
    </TouchableOpacity>
  );
}
