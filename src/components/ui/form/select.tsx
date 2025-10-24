import React, { ComponentProps, forwardRef, useContext } from "react";
import clsx from "clsx";
import FieldContext from "@/components/ui/form/field-context";
import sytles from "@/components/ui/form/styles.module.css";

type Props = ComponentProps<"select">;
const Select = forwardRef<HTMLSelectElement, Props>(
  ({ children, className, id, ...props }, ref) => {
    const { controlId, error, errorId } = useContext(FieldContext);
    return (
      <select
        {...props}
        ref={ref}
        aria-invalid={props["aria-invalid"] || error?.length ? true : undefined}
        aria-errormessage={error?.length ? errorId : undefined}
        className={clsx(sytles.select, className)}
        id={id || controlId?.length ? controlId : undefined}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";
export default Select;
