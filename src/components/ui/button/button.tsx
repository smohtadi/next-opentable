import React, { ComponentProps, forwardRef, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import styles from "@/components/ui/button/styles.module.css";

interface Props extends ComponentProps<"button"> {
  appearance?: "ghost" | "outline";
  asChild?: boolean;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: "accent" | "danger" | "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      appearance,
      asChild = false,
      children,
      className,
      disabled = false,
      isLoading = false,
      variant,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        {...props}
        className={clsx(
          styles.btn,
          { [styles["btn-" + variant]]: variant !== undefined },
          {
            [styles["btn-" + (variant ? variant + "-" : "") + "ghost"]]:
              appearance == "ghost",
          },
          {
            [styles["btn-" + (variant ? variant + "-" : "") + "outline"]]:
              appearance === "outline",
          },
          className
        )}
        disabled={disabled || isLoading}
      >
          {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";
export default Button;
