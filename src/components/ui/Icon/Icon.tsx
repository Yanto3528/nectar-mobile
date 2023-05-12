import { SvgProps } from 'react-native-svg'

import * as Icons from '@/components/icons'

type IconName = keyof typeof Icons

type IconProps = SvgProps & {
  name: IconName
}

export default function Icon({ name, ...props }: IconProps) {
  const IconComponent = Icons[name]

  return <IconComponent {...props} />
}