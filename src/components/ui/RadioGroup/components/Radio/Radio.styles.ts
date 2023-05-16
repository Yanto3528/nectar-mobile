import { cva } from "class-variance-authority";

export const radioStyles = cva(
  "flex-row items-center border border-transparent rounded-lg",
  {
    variants: {
      bordered: {
        true: "border-light-20 p-2",
      },
      checked: {
        true: "",
      },
      orientation: {
        horizontal: "flex-1",
        vertical: "",
      },
      error: {
        true: "border-red",
      },
    },
    compoundVariants: [
      {
        checked: true,
        bordered: true,
        error: false,
        className: "border-primary",
      },
    ],
  }
);

export const radioIndicatorStyles = cva(
  "rounded-full h-4 w-4 border border-light-20 items-center justify-center",
  {
    variants: {
      checked: {
        true: "border-primary",
      },
      error: {
        true: "border-red",
      },
    },
  }
);

export const radioActiveIndicatorStyles = cva(
  "h-2 w-2 bg-primary rounded-full",
  {
    variants: {
      error: {
        true: "bg-red",
      },
    },
  }
);
