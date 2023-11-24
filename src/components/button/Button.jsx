import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text }) => {
  return (
    <button value='Send' type="submit" className={styles.container}>{text}</button>
  );
};

export default Button;