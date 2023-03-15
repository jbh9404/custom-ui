import React, { useState } from "react";
import styles from "../../../../styles/modals/sampleOne.module.scss";
import ModalTypeA from "../../UI/Modal";

const SampleOne = () => {
  const [trigger, setTrigger] = useState(false);

  const close = () => {
    setTrigger(true);
  };
  return (
    <ModalTypeA width="350px" trigger={trigger} setTrigger={setTrigger}>
      <div className={styles.sampleOne}>
        <div className={styles.title}>테스트 팝업 1</div>
        <div className={styles.explain}>
          테스트 팝업 1 입니다.
          <br />
          감사합니다.
          <br />
        </div>
        <button onClick={close}>확인</button>
      </div>
    </ModalTypeA>
  );
};

export default SampleOne;
