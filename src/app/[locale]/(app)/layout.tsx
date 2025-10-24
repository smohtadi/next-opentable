import AppHeader from "@/components/layout/app-header/app-header";
import styles from "@/app/[locale]/(app)/page.module.css";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>{children}</main>
    </>
  );
}
