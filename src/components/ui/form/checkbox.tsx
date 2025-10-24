import React, { ComponentProps, forwardRef } from "react";
import clsx from "clsx";
import styles from "@/components/ui/form/styles.module.css";

interface Props extends ComponentProps<"input"> {
  className?: string;
  id?: string;
  label?: string;
  type?: "checkbox" | "radio";
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ className, id, label, type = "checkbox", ...props }, ref) => {
    return (
      <div className={styles.checkboxField}>
        <input
          {...props}
          ref={ref}
          className={clsx(styles.checkbox, className)}
          id={id}
          type={type}
        />
        {label && <label className={styles.checkboxLabel}>{label}</label>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
