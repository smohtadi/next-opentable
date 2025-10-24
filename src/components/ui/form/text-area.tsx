import clsx from "clsx";
import React, { ComponentProps, forwardRef, useContext } from "react";
import FieldContext from "@/components/ui/form/field-context";
import styles from "@/components/ui/form/styles.module.css";

interface Props extends ComponentProps<"textarea"> {
  className?: string;
  id?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, id, ...props }, ref) => {
    const { controlId, error, errorId } = useContext(FieldContext);
    return (
      <textarea
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

TextArea.displayName = "Text Area";
export default TextArea;
