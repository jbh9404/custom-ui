import { useState } from "react";
import "./App.css";
import { Tabs } from "antd";
import Modal from "./components/Modals/Modal";
import Toast from "./components/Toast/Toast";
import ButtonPage from "./components/ButtonPage";
import CheckboxPage from "./components/CheckboxPage";
import ModalPage from "./components/ModalPage";
import IconPage from "./components/IconPage";
import DropdownPage from "./components/DropdownPage";
import ToastPage from "./components/ToastPage";

const { TabPane } = Tabs;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "5px 30px 0 30px" }}>
      <Tabs>
        <TabPane tab="Button" key={1}>
          <ButtonPage />
        </TabPane>
        <TabPane tab="Checkbox" key={2}>
          <CheckboxPage />
        </TabPane>
        <TabPane tab="Modal" key={3}>
          <ModalPage />
        </TabPane>
        <TabPane tab="Icon" key={4}>
          <IconPage />
        </TabPane>
        <TabPane tab="Dropdown" key={5}>
          <DropdownPage />
        </TabPane>
        <TabPane tab="Toast" key={6}>
          <ToastPage />
        </TabPane>
      </Tabs>
      <Modal />
      <Toast />
    </div>
  );
}

export default App;
