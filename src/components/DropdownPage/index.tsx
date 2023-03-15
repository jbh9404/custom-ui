import classNames from "classnames";
import React, { useState } from "react";
import { ArrowIcon, BookmarkIcon } from "../../assets/icons/Icons";
import ClickAwayHandler from "../ETC/ClickAwayHandler";
import styles from "../../../styles/pages/dropdownPage.module.scss";
import FbDropdown from "../UI/Dropdown/FBDropdown";

const listData = [
  "List one",
  "List two",
  "List three",
  "List four",
  "List five",
  "List six",
  "List seven",
];

const DropdownPage = () => {
  const [isSelectOn, setIsSelectOn] = useState(false);
  const [issue, setIssue] = useState("SELECTBOX SAMPLE");

  const ctrlSelect = () => {
    if (isSelectOn) {
      setIsSelectOn(false);
    } else {
      setIsSelectOn(true);
    }
  };

  return (
    <div>
      <ClickAwayHandler handler={() => setIsSelectOn(false)}>
        <div
          className={classNames(
            styles.feedInput,
            isSelectOn && styles.clickedInput
          )}
          onClick={() => ctrlSelect()}
        >
          <span>{issue}</span>
          <ArrowIcon width="8px" height="8px" color="gray" />
          {isSelectOn && (
            <FbDropdown
              setIsSelectOn={setIsSelectOn}
              listData={listData}
              setIssue={setIssue}
              issue={issue}
            />
          )}
        </div>
      </ClickAwayHandler>
    </div>
  );
};

export default DropdownPage;
