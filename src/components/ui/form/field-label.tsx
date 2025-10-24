import clsx from "clsx";
import React, {
  ComponentProps,
  forwardRef,
  ReactNode,
  useContext,
} from "react";
import FieldContext from "@/components/ui/form/field-context";
import styles from "@/components/ui/form/styles.module.css";

interface Props extends ComponentProps<"label"> {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
}

const FieldLabel = forwardRef<HTMLLabelElement, Props>(
  ({ children, className, htmlFor, ...props }, ref) => {
    const { controlId } = useContext(FieldContext);
    return (
      <label
        {...props}
        ref={ref}
        className={clsx(styles.fieldLabel, className)}
        htmlFor={htmlFor || controlId?.length ? controlId : undefined}
      >
        {children}
      </label>
    );
  }
);

FieldLabel.displayName = "FieldLabel";
export default FieldLabel;
