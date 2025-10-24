import React, { ComponentProps, forwardRef, ReactNode } from "react";
import clsx from "clsx";
import Field from "@/components/ui/form/field";
import Input from "@/components/ui/form/input";
import FieldLabel from "@/components/ui/form/field-label";
import Select from "@/components/ui/form/select";
import Checkbox from "@/components/ui/form/checkbox";
import TextArea from "@/components/ui/form/text-area";

interface Props extends ComponentProps<"form"> {
  className?: string;
  children: ReactNode;
}

const Form = forwardRef<HTMLFormElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <form {...props} ref={ref} className={clsx("form", className)}>
        {children}
      </form>
    );
  }
);
Form.displayName = "Form";

type FormComponent = typeof Form & {
  Checkbox: typeof Checkbox;
  Field: typeof Field;
  Input: typeof Input;
  Label: typeof FieldLabel;
  Select: typeof Select;
  TextArea: typeof TextArea;
};

const CForm = Object.assign(Form, {
  Checkbox: Checkbox,
  Field: Field,
  Input: Input,
  Label: FieldLabel,
  Select: Select,
  TextArea: TextArea,
}) as FormComponent;

export default CForm;
