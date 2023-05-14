import { useContext, createContext, useMemo } from "react";

import {
  RadioGroupContextProps,
  RadioGroupProviderProps,
} from "./RadioGroup.types";

const RadioGroupContext = createContext<RadioGroupContextProps>({
  value: "",
  onChange: () => {},
  orientation: "vertical",
});

export function useRadioGroupContext() {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error(
      "useRadioGroupContext must be used within a RadioGroupProvider"
    );
  }

  return context;
}

export function RadioGroupProvider({
  value,
  onChange,
  orientation,
  children,
}: RadioGroupProviderProps) {
  const contextValue = useMemo(() => {
    return {
      value,
      onChange,
      orientation,
    };
  }, [value, onChange, orientation]);

  return (
    <RadioGroupContext.Provider value={contextValue}>
      {children}
    </RadioGroupContext.Provider>
  );
}
