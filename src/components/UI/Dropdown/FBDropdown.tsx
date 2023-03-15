import React, { useRef, useEffect } from "react";
// import styles from "./FbDropdown.module.scss";
import styles from "../../../../styles/ui/dropdown.module.scss";
import classNames from "classnames";

const FbDropdown = ({ setIsSelectOn, listData, setIssue, issue }: any) => {
  const clickOption = (e: any, value: any) => {
    e.stopPropagation();
    setIssue(value);
    setIsSelectOn(false);
  };

  return (
    <div className={styles.fbDropdown}>
      {listData?.map((n: any, index: number) => (
        <div
          key={index}
          className={classNames(
            styles.feedSelectOptionEach,
            issue === n && styles.on
          )}
          onClick={(e) => clickOption(e, n)}
        >
          {n}
        </div>
      ))}
    </div>
  );
};

export default FbDropdown;
