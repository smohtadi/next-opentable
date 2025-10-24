"use client";
import { CalendarIcon, ClockIcon, SearchIcon, UserIcon } from "lucide-react";
import Form from "../ui/form/form";
import Button from "../ui/button/button";
import styles from "./styles.module.css";

const times = ["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM"];
const personCounts = Array.from({ length: 20 }, (_, i) => i + 1);

export default function Searchbar() {
  return (
    <Form className={styles.searchbar}>
      <div className={styles.col1}>
        <div className={styles.cell}>
          <Form.Input name="date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
          <CalendarIcon size={20} className={styles.cellIcon} />
        </div>
        <div className={styles.cell}>
          <Form.Select name="time">
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Form.Select>
          <ClockIcon size={20} className={styles.cellIcon} />
        </div>
        <div className={styles.cell}>
          <Form.Select name="personCount">
            {personCounts.map((count) => (
              <option key={count} value={count}>
                {count} {count === 1 ? "person" : "people"}
              </option>
            ))}
          </Form.Select>
          <UserIcon size={20} className={styles.cellIcon} />
        </div>
      </div>
      <div className={styles.combobox}>
        <Form.Input className={styles.search} name="search" type="text" />
        <SearchIcon size={20} className={styles.searchIcon} />
      </div>
      <Button variant="primary">Let&apos;s go</Button>
    </Form>
  );
}
