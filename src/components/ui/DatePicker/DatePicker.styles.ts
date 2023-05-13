import { cva } from "class-variance-authority";

export const datePickerStyles = cva(
  "py-3 px-4 border border-light-20 rounded-xl flex-row items-center",
  {
    variants: {
      error: {
        true: "border-red",
      },
    },
  }
);
