import React from "react";
import CustomButton from "../UI/Button";
import styles from "../../../styles/pages/buttonPage.module.scss";
import { kind } from "../UI/Button/index.d";

const kindData = [
  { id: 1, name: "primary" },
  { id: 2, name: "secondary" },
  { id: 3, name: "disabled" },
  { id: 4, name: "ghost" },
];

const sizeData = [
  { id: 1, number: 100 },
  { id: 2, number: 200 },
  { id: 3, number: 300 },
];

const ButtonPage = () => {
  return (
    <div className={styles.buttonPage}>
      <div>
        <div className={styles.title}>Types</div>
        {kindData.map((n, index) => (
          <div key={n.id} style={{ marginBottom: "10px" }}>
            <CustomButton kind={n.name as kind} width="300px">
              Submit
            </CustomButton>
          </div>
        ))}
      </div>
      <div>
        <div className={styles.title}>Sizes</div>
        {sizeData.map((n, index) => (
          <div key={n.id} style={{ marginBottom: "10px" }}>
            <CustomButton kind="primary" width={`${n.number}px`}>
              Submit
            </CustomButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonPage;
