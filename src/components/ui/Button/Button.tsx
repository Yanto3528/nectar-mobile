import { TouchableOpacity } from 'react-native'

import CustomText from '../CustomText'
import { buttonStyles, buttonTextStyles } from './Button.styles'
import { ButtonProps } from './Button.types'

export default function Button({ children, className, variant, textClassName, ...props }: ButtonProps) {
  return (
    <TouchableOpacity className={buttonStyles({ variant: variant, className })} activeOpacity={0.6} {...props}>
      <CustomText className={buttonTextStyles({ variant: variant, className: textClassName })}>{children}</CustomText>
    </TouchableOpacity>
  )
}