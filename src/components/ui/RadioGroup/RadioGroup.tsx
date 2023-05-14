import { View } from "react-native";

import { cn } from "@/lib/utils";

import { Radio } from "./components";
import { RadioGroupProvider } from "./RadioGroup.context";
import { RadioGroupProps } from "./RadioGroup.types";

export default function RadioGroup({
  children,
  value,
  onChange,
  style,
  orientation = "vertical",
  ...props
}: RadioGroupProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <RadioGroupProvider
      value={value}
      onChange={onChange}
      orientation={orientation}
    >
      <View
        className={cn(isHorizontal ? "flex-row justify-between" : "")}
        style={[{ gap: 8 }, style]}
        {...props}
      >
        {children}
      </View>
    </RadioGroupProvider>
  );
}

RadioGroup.Radio = Radio;
