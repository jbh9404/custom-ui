import React, { useEffect } from "react";
import { useToast } from "../../libs/hooks/useToast";
import SampleOne from "../Modals/SampleOne";
import ToastMessage from "../Toast/ToastMessage";

const ToastPage = () => {
  const handleToast = useToast((state: any) => state.handleToast);

  return (
    <div>
      <button
        onClick={() => {
          console.log("hello");
          handleToast(
            <ToastMessage message="Sample Toast" exp="Sample Completed" />
          );
        }}
      >
        Example 1
      </button>
    </div>
  );
};

export default ToastPage;
