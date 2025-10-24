import clsx from "clsx";
import React, { ComponentProps, forwardRef, useContext } from "react";
import FieldContext from "@/components/ui/form/field-context";
import styles from "@/components/ui/form/styles.module.css";

interface Props extends ComponentProps<"input"> {
  className?: string;
  id?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, id, ...props }, ref) => {
    const { controlId, error, errorId } = useContext(FieldContext);
    return (
      <input
        {...props}
        ref={ref}
        aria-invalid={props["aria-invalid"] || error?.length ? true : undefined}
        aria-errormessage={
          props["aria-errormessage"] || error?.length ? errorId : undefined
        }
        className={clsx(styles.input, className)}
        id={id || controlId.length > 0 ? controlId : undefined}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
