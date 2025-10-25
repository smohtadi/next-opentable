import { use } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { IPageParamsProps } from "@/types";
import Image from "next/image";
import food2 from "#/public/images/food-2.jpg";
import { StarIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Button from "@/components/ui/button/button";
import Card from "@/components/ui/card/card";
import styles from "@/app/[locale]/(app)/[id]/styles.module.css";
import ReservationCard from "@/components/reservation-card/reservation-card";

export async function generateMetadata({ params }: IPageParamsProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "IndexPage.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RestaurantPage({ params }: IPageParamsProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return (
    <>
      <Image className={styles.imageCover} src={food2} alt="Restaurant Page" />
      <div className="container">
        <div className={styles.row}>
          <div className={styles.col1}>
            <header className={styles.header}>
              <h1 className={styles.title}>Earls Kitchen + Bar - Vancouver</h1>
              <div>
                <span className={styles.detail}>
                  <StarIcon
                    className={styles.starIcon}
                    size={16}
                    stroke="none"
                  />{" "}
                  4.5(200)
                </span>
                <span className={styles.detail}>CAN$31 to CAN$50</span>
                <span className={styles.detail}>American, Contemporary</span>
              </div>
            </header>
            <div className={styles.toc}>
              <Link href="#overview">Overview</Link>
              <Link href="#experiences">Experiences</Link>
              <Link href="#private-dining">Private Dining</Link>
            </div>
            <section className={styles.section} id="overview">
              <h2 className={styles.sectionTitle}>About this restaurant</h2>
              <p className={styles.sectionDescription}>
                Earls Kitchen + Bar in Vancouver offers a vibrant dining
                experience with a diverse menu featuring contemporary American
                cuisine. Known for its lively atmosphere and exceptional
                service, Earls is a popular choice for both casual meals and
                special occasions. The restaurant boasts a stylish interior, a
                well-curated drink selection, and a commitment to quality
                ingredients, making it a standout destination in the city&apos;s
                culinary scene.
              </p>
            </section>
            <section className={styles.section} id="experiences">
              <h2 className={styles.sectionTitle}>Experiences</h2>
              <Card className={styles.experienceCard}>
                <h3 className={styles.experienceTitle}>Dinner Reservation</h3>
                <p className={styles.experienceDescription}>
                  Enjoy a delightful dinner experience with a reservation at
                  Earls Kitchen + Bar. Savor a variety of dishes crafted from
                  fresh, high-quality ingredients in a vibrant atmosphere.
                </p>
                <Button variant="primary">Book Now</Button>
              </Card>
            </section>
            <section className={styles.section} id="private-dining">
              <h2 className={styles.sectionTitle}>Private Dining</h2>
              <p className={styles.sectionDescription}>
                Earls Kitchen + Bar offers private dining options for special
                occasions and corporate events. Enjoy an exclusive dining
                experience with personalized service and a tailored menu to suit
                your needs.
              </p>
              <Button variant="secondary">Inquire Now</Button>
            </section>
          </div>
          <div className={styles.col2}>
            <ReservationCard />
          </div>
        </div>
      </div>
    </>
  );
}
