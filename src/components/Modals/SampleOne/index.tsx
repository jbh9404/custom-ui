import React, { useState } from "react";
import styles from "../../../../styles/modals/sampleOne.module.scss";
import ModalTypeA from "../../UI/Modal";
import CustomButton from "../../UI/Button";

const SampleOne = () => {
  const [trigger, setTrigger] = useState(false);

  const close = () => {
    setTrigger(true);
  };
  return (
    <ModalTypeA width="380px" trigger={trigger} setTrigger={setTrigger}>
      <div className={styles.sampleOne}>
        <div className={styles.title}>Welcome Back!</div>
        <div className={styles.explain}>
          This is Test Modal.
          <br />
          Come back any time.
        </div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <CustomButton kind="ghost" width="120px" onClick={close}>
            Cancel
          </CustomButton>
          <CustomButton kind="primary" width="120px" onClick={close}>
            Ok
          </CustomButton>
        </div>
      </div>
    </ModalTypeA>
  );
};

export default SampleOne;
