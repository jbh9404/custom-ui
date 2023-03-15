import React from "react";
import {
  ArrowIcon,
  BookmarkIcon,
  BookmarkOnIcon,
  FacebookIcon,
  GoogleIcon,
  LinkedinIcon,
  TrashIcon,
} from "../../assets/icons/Icons";
import styles from "../../../styles/pages/iconPage.module.scss";

const IconPage = () => {
  return (
    <div className={styles.iconPage}>
      <div className={styles.iconWrap}>
        <BookmarkIcon width="20px" height="20px" color="blue" />
      </div>
      <div className={styles.iconWrap}>
        <BookmarkOnIcon width="20px" height="20px" color="blue" />
      </div>
      <div className={styles.iconWrap}>
        <FacebookIcon width="30px" height="30px" />
      </div>
      <div className={styles.iconWrap}>
        <GoogleIcon width="30px" height="30px" />
      </div>
      <div className={styles.iconWrap}>
        <LinkedinIcon width="30px" height="30px" />
      </div>
      <div className={styles.iconWrap}>
        <TrashIcon width="20.8px" height="24px" color="gray" />
      </div>
      <div className={styles.iconWrap}>
        <ArrowIcon width="16px" height="16px" color="gray" />
      </div>
    </div>
  );
};

export default IconPage;
