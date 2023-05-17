import { cva } from 'class-variance-authority';

export const inputStyles = cva('border border-light-20 py-2 px-4 rounded-xl focus:border-primary', {
  variants: {
    error: {
      true: 'border-red focus:border-red',
    },
  },
});
