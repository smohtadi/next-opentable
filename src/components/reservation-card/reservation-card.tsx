"use client";
import Button from "../ui/button/button";
import Form from "../ui/form/form";
import Card from "../ui/card/card";
import SelectPeople from "../selectbar/select-people";
import SelectTime from "../selectbar/select-time";
import styles from "./styles.module.css";
import SelectDate from "../selectbar/select-date";

export default function ReservationCard() {
  return (
    <Card className={styles.card}>
      <h2 className={styles.title}>Make a Reservation</h2>
      <Form className={styles.form}>
        <SelectPeople className={styles.people} name="personCount" />
        <SelectDate className={styles.date} name="date" />
        <SelectTime className={styles.time} name="time" />
      </Form>
      <h3 className={styles.availableTitle}>Available Times</h3>
      <ul className={styles.availableTimesList}>
        <li className={styles.availableTime}>
          <Button variant="primary">7:00 PM</Button>
        </li>
        <li className={styles.availableTime}>
          <Button variant="primary">8:00 PM</Button>
        </li>
        <li className={styles.availableTime}>
          <Button variant="primary">9:00 PM</Button>
        </li>
      </ul>
    </Card>
  );
}
