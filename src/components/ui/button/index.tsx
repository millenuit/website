'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import styles from './index.module.css';
import { Link } from '@/i18n/navigation';

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      ghost: styles.ghost,
    },
    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },
    fullWidth: {
      true: styles.fullWidth,
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type ButtonAsLink = ButtonBaseProps & {
  as: 'link';
  href: string;
};

type ButtonProps =
  | (ButtonAsButton & VariantProps<typeof buttonVariants>)
  | (ButtonAsLink & VariantProps<typeof buttonVariants>);

export default function Button({
  children,
  className,
  as = 'button',
  variant,
  size,
  fullWidth,
  ...props
}: ButtonProps) {
  const classes = clsx(buttonVariants({ variant, size, fullWidth }), className);

  if (as === 'link') {
    const { href, ...rest } = props as ButtonAsLink;

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
