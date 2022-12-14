import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/git-logo.svg" width="60" height="60" alt="DS" />
      </div>
      <div className={styles.links}>
        {navigation.map((e) => (
          <Link key={e.id} legacyBehavior href={e.path}>
            <a className={pathname === e.path ? styles.active : null}>
              {e.title}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
