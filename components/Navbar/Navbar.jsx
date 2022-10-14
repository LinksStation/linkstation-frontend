import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Button from "../../UI/Button/Button";

import styles from "./Navbar.module.css";

const Menu = () => (
  <>
    <p>
      <a href="#whatlinkstation">What is LinkStation?</a>
    </p>
    <p>
      <a href="#posibility">Pricing</a>
    </p>
    <p>
      <a href="#features">About</a>
    </p>
    <p>
      <a href="#blog">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const user = useContext(UserContext);
  return (
    <div className={styles["linkstation__navbar"]}>
      <div className={styles["linkstation__navbar-links"]}>
        <div className={styles["linkstation__navbar-links_logo"]}>
          {/* <Image src={``} alt="logo" /> */}
          <h1>
            <Link href="/"> LinkStation</Link>
          </h1>
        </div>
        <div className={styles["linkstation__navbar-links_container"]}>
          <Menu />
        </div>
      </div>
      <div className={styles["linkstation__navbar-sign"]}>
        {user?.isLoggedIn === true && (
          <Button>{user.userData?.firstName}</Button>
        )}
        {!user?.isLoggedIn && (
          <>
            <Link href="/auth/login">
              <p>Sign in</p>
            </Link>
            <Button href="/auth/signup">Get Started!</Button>
          </>
        )}
      </div>
      <div className={styles["linkstation__navbar-menu"]}>
        {toggleMenu ? (
          <RiCloseLine
            color="fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={`${styles["linkstation__navbar-menu_container"]} ${styles["slide-left"]}`}
          >
            <div className={styles["linkstation__navbar-menu_container-links"]}>
              <Menu />
              <div
                className={
                  styles["linkstation__navbar-menu_container-links-sign"]
                }
              >
                {user.userData?.isLoggedIn ? (
                  <Button>{user.userData?.firstName}</Button>
                ) : (
                  <>
                    <Link href="/auth/login">
                      <p>Sign in</p>
                    </Link>
                    <Button href="/auth/signup">Get Started!</Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
