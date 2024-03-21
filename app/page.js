import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Андрей пидр</h1>
      <p>Прикинь versel позволяет деплоить Next.js проекты в 2 клика через аккаунт на github </p>
    </main>
  );
}
