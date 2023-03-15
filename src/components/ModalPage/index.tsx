import React, { useEffect } from "react";
import { useModal } from "../../libs/hooks/useModal";
import SampleOne from "../Modals/SampleOne";

const ModalPage = () => {
  const handleModal = useModal((state: any) => state.handleModal);

  return (
    <div>
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
