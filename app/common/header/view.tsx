import User from "@mui/icons-material/AccountCircleOutlined";
import Wishlist from "@mui/icons-material/FavoriteBorderOutlined";
import Cart from "@mui/icons-material/ShoppingCartOutlined";
import LogoIcon from "common/icons/Logo";
import CATEGORIES from "constants/categories";
import Link from "next/link";

import BurgerMenu from "../icons/BurgerMenu";
import styles from "./Header.module.scss";

const TOP_HEADER_OPTIONS = ["Contact us", "About us"];
const MIDDLE_HEADER_OPTIONS = ["Hot Deals", "New", "Top-Seller", "Bargains"];
const ICON_MENU = [User, Wishlist, Cart];

const HeaderView = () => (
  <div>
    <div className={styles.headerWrapper}>
      <div className={styles.topHeaderWrapper}>
        <div className={styles.topHeaderMenu}>
          {TOP_HEADER_OPTIONS.map((item) => (
            <Link key={item} href="/">
              {/* TODO add real link */}
              <a className={styles.link}>
                <div>{item}</div>
              </a>
            </Link>
          ))}
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Sparrow</div>
          <div className={styles.logo}>
            <LogoIcon sx={{ fontSize: "3.3rem" }} />
          </div>
        </div>
        <div></div>
      </div>
      <div className={styles.middleHeaderWrapper}>
        <div className={styles.middleHeaderMenuWrapper}>
          <BurgerMenu />
          <div className={styles.middleHeaderMenu}>
            {MIDDLE_HEADER_OPTIONS.map((item) => (
              <Link key={item} href="/">
                {/* TODO add real link */}
                <a className={styles.link}>
                  <div>{item}</div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.iconMenu}>
          {ICON_MENU.map((Item, i) => (
            <Link key={i} href="/">
              {/* TODO */}
              <a className={styles.iconLink}>
                <Item fontSize="large" />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className={styles.bottomHeaderWrapper}>
      <div className={styles.bottomHeaderMenuInner}>
        {CATEGORIES.map((item) => (
          <Link key={item.name} href="/">
            <a className={styles.menuLink}>
              <div>{item.name}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default HeaderView;
