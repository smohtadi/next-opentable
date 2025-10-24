import Image, { StaticImageData } from "next/image";
import Card from "../ui/card/card";
import { StarIcon, TrendingUpIcon } from "lucide-react";
import Button from "../ui/button/button";
import styles from "./styles.module.css";
import { Link } from "@/i18n/navigation";

interface IProps {
  title: string;
  rating: number;
  reviews: number;
  cuisine: string;
  priceRange: number;
  location: string;
  bookingTrend: number;
  bookingTimes: string[];
  href: string;
  image: StaticImageData | string;
}

export default function RestaurantCard({
  href,
  title,
  rating,
  reviews,
  cuisine,
  priceRange,
  location,
  bookingTrend,
  bookingTimes,
  image,
}: IProps) {
  return (
    <Card className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={href}>
          <Image alt="Image description" className={styles.image} src={image} />
        </Link>
      </div>
      <div className={styles.contents}>
        <h1 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h1>
        <div className={styles.ratings}>
          <span>
            {Array(Math.floor(rating))
              .fill(0)
              .map((_, index) => (
                <StarIcon
                  key={index}
                  className={styles.star}
                  size={20}
                  stroke="none"
                />
              ))}
          </span>
          <span className={styles.ratingCount}>{reviews} reviews</span>
        </div>
        <div>
          <span className={styles.detail}>{cuisine}</span>
          <span className={styles.detail}>${priceRange}</span>
          <span className={styles.detail}>{location}</span>
        </div>
        <p className={styles.bookingStat}>
          <TrendingUpIcon size={20} />
          Booked {bookingTrend} times today
        </p>
        <div className={styles.bookingsContainer}>
          <div className={styles.bookings}>
            {bookingTimes.map((time) => (
              <Button key={time} className={styles.booking} variant="primary">
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
