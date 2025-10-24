"use client"
import { ReactNode, useEffect, useId, useRef, useState } from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/button/button";
import styles from "./styles.module.css";

interface IProps {
  title: string;
  description?: string;
  action?: ReactNode;
  children?: ReactNode;
}

export default function RestuarantSlider({
  title,
  description,
  action,
  children,
}: IProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const sliderId = useId();

  const checkScrollButtons = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.clientWidth * 0.8;
    const newScrollLeft =
      direction === "left"
        ? sliderRef.current.scrollLeft - scrollAmount
        : sliderRef.current.scrollLeft + scrollAmount;

    sliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section aria-labelledby={sliderId} className={styles.slider}>
      <header className={styles.header}>
        <div>
          <h2 id={sliderId} className={styles.title}>
            {title}
          </h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {action && action}
      </header>
      <div
        className={styles.inner}
        ref={sliderRef}
        onScroll={checkScrollButtons}
      >
        {children}
      </div>
      {showLeftButton && (
        <Button
          appearance="ghost"
          className={clsx(styles.scrollControl, styles.scrollControlPrev)}
          onClick={() => scroll("left")}
        >
          <ChevronLeft />
        </Button>
      )}
      {showRightButton && (
        <Button
          appearance="ghost"
          className={clsx(styles.scrollControl, styles.scrollControlNext)}
          onClick={() => scroll("right")}
        >
          <ChevronRight />
        </Button>
      )}
    </section>
  );
}
