import { cva } from 'class-variance-authority';

export const elementWrapperStyles = cva(
  'flex-row items-stretch rounded-lg focus-within:border-primary border border-light-20',
  {
    variants: {
      size: {
        sm: 'h-8',
        md: 'h-10',
      },
    },
  }
);
