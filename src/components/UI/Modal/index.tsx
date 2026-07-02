import React, { useEffect, useState, ReactNode } from "react";
import styles from "../../../../styles/modals/modalType.module.scss";
import { useModal } from "@/libs/hooks/useModal";

interface ModalTypeAProps {
  width?: string;
  children: ReactNode;
  trigger: boolean;
  setTrigger: (trigger: boolean) => void;
}

const ModalTypeA = ({ width, children, trigger, setTrigger }: ModalTypeAProps) => {
  const handleModal = useModal((state) => state.handleModal);

  const [on, setOn] = useState(false);

  useEffect(() => {
    if (trigger) {
      setOn(false);
      setTrigger(false);
      setTimeout(function () {
        handleModal();
      }, 500);
    }
  }, [trigger, setTrigger, handleModal]);

  useEffect(() => {
    setOn(true);
  }, []);

  return (
    <div className={styles.outerBackgroundA}>
      <div
        className={styles.backColor}
        onClick={() => {
          setOn(false);
          setTimeout(function () {
            handleModal();
          }, 500);
        }}
      ></div>
      <div
        className={styles.innerWrap}
        style={{
          width: width,
          opacity: on ? 1 : 0,
          transform: on ? "translateY(0)" : "translateY(300px)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalTypeA;
