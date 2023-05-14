import { ReactNode } from "react";
import { ViewProps } from "react-native";

type Orientation = "horizontal" | "vertical";

export type RadioGroupContextProps = {
  value: string;
  onChange: (value: string) => void;
  orientation?: Orientation;
};

export type RadioGroupProviderProps = RadioGroupContextProps & {
  children: ReactNode;
};

export type RadioGroupProps = ViewProps & RadioGroupContextProps;
