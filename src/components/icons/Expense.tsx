import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"

const Expense = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill={props.fill}
      d="M23 14H9a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-6a5 5 0 0 0-5-5Zm-7 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
    />
    <Path
      fill={props.fill}
      d="M16 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16.71 2.29a1 1 0 0 0-1.42 0l-4.24 4.25A1.015 1.015 0 0 0 12.46 8L15 5.41V11a1 1 0 0 0 2 0V5.41L19.54 8a1 1 0 0 0 .7.29A1 1 0 0 0 21 8a1 1 0 0 0 0-1.41l-4.29-4.3Z"
    />
  </Svg>
)
const Memo = memo(Expense)
export default Memo
