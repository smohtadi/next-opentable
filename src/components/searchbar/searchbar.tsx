"use client";
import { CalendarIcon, ClockIcon, SearchIcon, UserIcon } from "lucide-react";
import Form from "../ui/form/form";
import Button from "../ui/button/button";
import styles from "./styles.module.css";

const times = ["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM", "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"];
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
