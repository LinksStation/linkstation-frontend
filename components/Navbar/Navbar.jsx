import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "react-transition-group";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

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
        <p itemType="button">Sign in</p>
        <button type="button">Sign up</button>
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
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
