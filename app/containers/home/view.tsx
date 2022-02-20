import CATEGORIES from "constants/categories";
import Image from "next/image";
import Link from "next/link";

import styles from "./Home.module.scss";

const HomeView = () => (
  <div>
    <h2 className={styles.categoriesTitle}>Our Categories</h2>
    <div className={styles.categoryList}>
      {CATEGORIES.map((category) => (
        <div key={category.name} className={styles.categoryWrapper}>
          {/* TODO add real links */}
          <Link href="/">
            <a className={styles.categoryLink}>
              <Image
                src={category.image}
                alt={category.name}
                height={90}
                width={90}
              />
              <div className={styles.categoryName}>{category.longName}</div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default HomeView;
