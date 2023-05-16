import { ReactNode } from "react";
import { ViewProps } from "react-native";

import { BaseFormElementProps } from "@/types/form";

type Orientation = "horizontal" | "vertical";

export type RadioGroupContextProps = {
  value: string;
  onChange: (value: string) => void;
  orientation?: Orientation;
  error?: BaseFormElementProps["error"];
};

export type RadioGroupProviderProps = RadioGroupContextProps & {
  children: ReactNode;
};

export type RadioGroupProps = ViewProps &
  RadioGroupContextProps &
  BaseFormElementProps;
