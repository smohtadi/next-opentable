import { UserIcon } from "lucide-react";
import styles from "./styles.module.css";
import Select from "./select";

const personCounts = Array.from({ length: 20 }, (_, i) => i + 1);

export default function SelectPeople({ ...props }) {
  return (
    <Select
      {...props}
      icon={<UserIcon size={20} className={styles.icon} />}
      options={personCounts.map((count) => ({
        value: count,
        label: `${count} ${count === 1 ? "person" : "people"}`,
      }))}
    />
  );
}
