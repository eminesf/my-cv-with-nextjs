import Link from "next/link";
import styles from "./styles.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <div className={styles.logo}>logo</div>
        </a>
      </Link>
      <div>
        <ul className={styles.container_list}>
          <Link href="/">
            <a>
              <li className={styles.line}>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li className={styles.line}>About me</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li className={styles.line}>Contact</li>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <li className={styles.line}>Blog</li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
}
