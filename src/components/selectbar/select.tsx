import { ComponentProps } from "react";
import clsx from "clsx";
import Form from "../ui/form/form";
import styles from "./styles.module.css";

interface IProps extends ComponentProps<"select"> {
  options: Array<{ value: number | string; label: string }>;
  icon?: React.ReactNode;
}

export default function Select({ className, options, icon, ...props }: IProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <Form.Select className={clsx(styles.select)} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
      {icon && icon}
    </div>
  );
}
