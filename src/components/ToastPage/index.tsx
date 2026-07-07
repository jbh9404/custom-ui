import React, { useEffect } from "react";
import { useToast } from "../../libs/hooks/useToast";
import SampleOne from "../Modals/SampleOne";
import ToastMessage from "../Toast/ToastMessage";

const ToastPage = () => {
  const handleToast = useToast((state) => state.handleToast);

  return (
    <div>
      <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Toast</h3>
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
