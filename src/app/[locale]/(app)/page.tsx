import Button from "@/components/ui/button/button";
import RestaurantCard from "@/components/restaurant-card/restaurant-card";
import { Link } from "@/i18n/navigation";
import RestuarantSlider from "@/components/home/restaurant-slider/restaurant-slider";
import Searchbar from "@/components/searchbar/searchbar";
import { Navigation } from "lucide-react";
import clsx from "clsx";
import styles from "@/app/[locale]/(app)/page.module.css";

type IRestaurant = {
  id: string;
  title: string;
  rating: number;
  reviews: number;
  cuisine: string;
  priceRange: number;
  location: string;
  bookingTrend: number;
  bookingTimes: string[];
  href: string;
};

const restaurants: IRestaurant[] = [
  {
    id: "1",
    title: "Earls Kitchen + Bar - Vancouver",
    rating: 4.5,
    reviews: 4018,
    cuisine: "Seafood",
    priceRange: 3,
    location: "Downtown",
    bookingTrend: 32,
    bookingTimes: ["6:00 PM", "6:15 PM", "6:30 PM", "7:00 PM"],
    href: "/1",
  },
  {
    id: "2",
    title: "Cactus Club Cafe - Coal Harbour",
    rating: 4.7,
    reviews: 5021,
    cuisine: "Canadian",
    priceRange: 3,
    location: "Coal Harbour",
    bookingTrend: 45,
    bookingTimes: ["6:00 PM", "6:20 PM", "6:40 PM", "7:10 PM"],
    href: "/2",
  },
  {
    id: "3",
    title: "Miku - Vancouver",
    rating: 4.8,
    reviews: 3500,
    cuisine: "Japanese",
    priceRange: 4,
    location: "Downtown",
    bookingTrend: 28,
    bookingTimes: ["6:05 PM", "6:25 PM", "6:55 PM", "7:15 PM"],
    href: "/3",
  },
  {
    id: "4",
    title: "Blue Water Cafe - Yaletown",
    rating: 4.6,
    reviews: 4200,
    cuisine: "Seafood",
    priceRange: 4,
    location: "Yaletown",
    bookingTrend: 37,
    bookingTimes: ["6:10 PM", "6:30 PM", "7:00 PM", "7:20 PM"],
    href: "/4",
  },
  {
    id: "5",
    title: "The Keg Steakhouse + Bar - Vancouver",
    rating: 4.4,
    reviews: 3800,
    cuisine: "Steakhouse",
    priceRange: 3,
    location: "Downtown",
    bookingTrend: 30,
    bookingTimes: ["6:15 PM", "6:35 PM", "7:05 PM", "7:25 PM"],
    href: "/5",
  },
  {
    id: "6",
    title: "Miku - Vancouver",
    rating: 4.8,
    reviews: 3500,
    cuisine: "Japanese",
    priceRange: 4,
    location: "Downtown",
    bookingTrend: 28,
    bookingTimes: ["6:05 PM", "6:25 PM", "6:55 PM", "7:15 PM"],
    href: "/6",
  },
  {
    id: "7",
    title: "Blue Water Cafe - Yaletown",
    rating: 4.6,
    reviews: 4200,
    cuisine: "Seafood",
    priceRange: 4,
    location: "Yaletown",
    bookingTrend: 37,
    bookingTimes: ["6:10 PM", "6:30 PM", "7:00 PM", "7:20 PM"],
    href: "/7",
  },
  {
    id: "8",
    title: "The Keg Steakhouse + Bar - Vancouver",
    rating: 4.4,
    reviews: 3800,
    cuisine: "Steakhouse",
    priceRange: 3,
    location: "Downtown",
    bookingTrend: 30,
    bookingTimes: ["6:15 PM", "6:35 PM", "7:05 PM", "7:25 PM"],
    href: "/8",
  },
];

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <Searchbar />
      </div>

      <div className={clsx(styles.container, styles.locationInquiry)}>
        <span>
          It looks like you&apos;re in Vancouver Suburbs. Not correct?
        </span>
        <Button variant="primary" appearance="ghost">
          <Navigation size={20} className={styles.locationIcon} />
          Get current location
        </Button>
      </div>

      <div className={styles.container}>
        <RestuarantSlider
          title="Available for dinner now"
          action={<Link href="/view-all">View All</Link>}
        >
          { restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              title={restaurant.title}
              rating={restaurant.rating}
              reviews={restaurant.reviews}
              cuisine={restaurant.cuisine}
              priceRange={restaurant.priceRange}
              location={restaurant.location}
              bookingTrend={restaurant.bookingTrend}
              bookingTimes={restaurant.bookingTimes}
              href={restaurant.href}
            />
          ))}
        </RestuarantSlider>
      </div>

      <div className={styles.highlightBanner}>
        <div className={styles.container}>
          <RestuarantSlider
            title="Introducing OpenTable Icons"
            action={
              <Button asChild variant="secondary" appearance="outline">
                <Link href="/view-all">View All</Link>
              </Button>
            }
          >
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                title={restaurant.title}
                rating={restaurant.rating}
                reviews={restaurant.reviews}
                cuisine={restaurant.cuisine}
                priceRange={restaurant.priceRange}
                location={restaurant.location}
                bookingTrend={restaurant.bookingTrend}
                bookingTimes={restaurant.bookingTimes}
                href={restaurant.href}
              />
            ))}
          </RestuarantSlider>
        </div>
      </div>
    </>
  );
}
