import React from "react";
import CustomCheckbox from "../UI/Checkbox";

const CheckboxPage = () => {
  return (
    <div>
      <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Checkbox</h3>
      <CustomCheckbox color="skyblue" />
      <CustomCheckbox color="orange" />
      <CustomCheckbox color="pink" />
      <CustomCheckbox color="coral" />
      <CustomCheckbox color="blueviolet" />
    </div>
  );
};

export default CheckboxPage;
