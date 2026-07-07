import React, { useEffect } from "react";
import { useModal } from "../../libs/hooks/useModal";
import SampleOne from "../Modals/SampleOne";

const ModalPage = () => {
  const handleModal = useModal((state) => state.handleModal);

  return (
    <div>
      <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Modal</h3>
      <button
        onClick={() => {
          console.log("hello");
          handleModal(<SampleOne />);
        }}
      >
        Example 1
      </button>
    </div>
  );
};

export default ModalPage;
