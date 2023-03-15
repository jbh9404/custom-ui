import React from "react";
import styles from "../../../styles/pages/colorPage.module.scss";

const ColorPage = () => {
  return (
    <div className={styles.colorPage}>
      <div className={styles.grayA}>gray-a</div>
      <div className={styles.grayB}>gray-b</div>
      <div className={styles.greenA}>green-a</div>
      <div className={styles.greenB}>green-b</div>
      <div className={styles.greenC}>green-c</div>
      <div className={styles.greenD}>green-d</div>
      <div className={styles.blueA}>blue-a</div>
      <div className={styles.blueB}>blue-b</div>
      <div className={styles.blueC}>blue-c</div>
      <div className={styles.blueD}>blue-d</div>
      <div className={styles.blueE}>blue-e</div>
    </div>
  );
};

export default ColorPage;
