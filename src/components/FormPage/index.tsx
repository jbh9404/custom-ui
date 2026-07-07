import React from "react";
import CustomInput from "../UI/Input";
import CustomRadio from "../UI/Radio";
import CustomSwitch from "../UI/Switch";
import CustomSlider from "../UI/Slider";

const FormPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px 0' }}>
      <section>
        <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Input & Textarea</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
          <CustomInput placeholder="Basic Input" />
          <CustomInput placeholder="Error State" error />
          <CustomInput placeholder="Disabled" disabled />
          <CustomInput placeholder="Textarea (multiline)" multiline />
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Radio Buttons</h3>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <CustomRadio name="colorGroup" label="Blue (Default)" defaultChecked />
          <CustomRadio name="colorGroup" label="Green" color="#52c41a" />
          <CustomRadio name="colorGroup" label="Red" color="#ff4d4f" />
          <CustomRadio name="colorGroup" label="Disabled" disabled />
          <CustomRadio name="colorGroup" label="Disabled Checked" disabled checked readOnly />
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Switch (Toggle)</h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <CustomSwitch label="Default" />
          <CustomSwitch label="Green" color="#52c41a" defaultChecked />
          <CustomSwitch label="Disabled" disabled />
          <CustomSwitch label="Disabled On" disabled defaultChecked />
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Slider</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
          <CustomSlider defaultValue={30} />
          <CustomSlider defaultValue={60} color="#eb2f96" />
          <CustomSlider defaultValue={50} disabled />
        </div>
      </section>
    </div>
  );
};

export default FormPage;
