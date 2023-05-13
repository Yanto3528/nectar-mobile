import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "w-full py-2 px-4 rounded-md border border-transparent flex-row items-center justify-center",
  {
    variants: {
      variant: {
        solid: "bg-primary",
        outline: "bg-transparent border-primary",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
);

export const buttonTextStyles = cva("font-inter-semibold uppercase", {
  variants: {
    variant: {
      solid: "text-light",
      outline: "text-primary",
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});
