import { ChevronDown, MapPin, Search } from "lucide-react";
import Button from "@/components/ui/button/button";
import styles from "@/components/layout/app-header/styles.module.css";

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <span className={styles.logo}></span>
        <h1 className={styles.brand}>OpenTable</h1>
      </div>
      <div className={styles.utility}>
        <Button appearance="ghost" aria-label="Toggle location picker">
          <MapPin />
          <ChevronDown size={16} />
        </Button>
      </div>
      <div className={styles.actions}>
        <Button
          appearance="ghost"
          className={styles.headerBtn}
          variant="secondary"
        >
          Join Rewards
        </Button>
        <Button className={styles.headerBtn} variant="accent">
          Sign In
        </Button>
      </div>
      <div className={styles.search}>
        <Search />
      </div>
    </header>
  );
}
