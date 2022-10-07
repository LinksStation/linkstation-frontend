/* eslint-disable react/no-unescaped-entities */
import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
}
