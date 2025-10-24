import React, {
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useId,
  useMemo,
} from "react";
import clsx from "clsx";
import FieldContext from "@/components/ui/form/field-context";
import styles from "@/components/ui/form/styles.module.css";

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  controlId: string;
  error?: string;
}

const Field = forwardRef<HTMLElement, Props>(
  (
    { as: Component = "div", children, className, controlId, error, ...props },
    ref
  ) => {
    const errorId = useId();
    const context = useMemo(
      () => ({
        controlId: controlId || "",
        error: error || "",
        errorId: errorId,
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [controlId, error]
    );
    return (
      <FieldContext.Provider value={context}>
        <Component {...props} ref={ref} className={clsx(styles.field, className)}>
          {children}
          <ErrorAlert error={context.error} errorId={errorId} />
        </Component>
      </FieldContext.Provider>
    );
  }
);
Field.displayName = "Field";

function ErrorAlert({ errorId, error }: { errorId?: string; error?: string }) {
  if (!errorId || !error || !errorId.length || !error.length) return null;
  return (
    <span id={errorId} className={clsx(styles.fieldError)} role="alert">
      {error}
    </span>
  );
}
export default Field;
