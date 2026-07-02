import React from "react";
import styles from "../../../../styles/ui/dropdown.module.scss";
import classNames from "classnames";

interface FbDropdownProps {
  setIsSelectOn: (isOn: boolean) => void;
  listData: string[];
  setIssue: (issue: string) => void;
  issue: string;
}

const FbDropdown = ({ setIsSelectOn, listData, setIssue, issue }: FbDropdownProps) => {
  const clickOption = (e: React.MouseEvent, value: string) => {
    e.stopPropagation();
    setIssue(value);
    setIsSelectOn(false);
  };

  return (
    <div className={styles.fbDropdown}>
      {listData?.map((n: string, index: number) => (
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
