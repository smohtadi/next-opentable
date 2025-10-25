import { ComponentProps } from "react";
import clsx from "clsx";
import { CalendarIcon } from "lucide-react";
import Form from "../ui/form/form";
import styles from "./styles.module.css";

interface IProps extends ComponentProps<"input"> {
  icon?: React.ReactNode;
}

export default function SelectDate({ className, ...props }: IProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <Form.Input
        {...props}
        type="date"
        className={clsx(styles.input)}
      />
      <CalendarIcon size={20} className={styles.icon} />
    </div>
  );
}
