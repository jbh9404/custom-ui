import "./App.css";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Modal from "@/components/Modals/Modal";
import Toast from "@/components/Toast/Toast";
import ButtonPage from "@/components/ButtonPage";
import CheckboxPage from "@/components/CheckboxPage";
import ModalPage from "@/components/ModalPage";
import IconPage from "@/components/IconPage";
import DropdownPage from "@/components/DropdownPage";
import ToastPage from "@/components/ToastPage";
import ColorPage from "@/components/ColorPage";

const tabItems: TabsProps["items"] = [
  { key: "1", label: "Button", children: <ButtonPage /> },
  { key: "2", label: "Checkbox", children: <CheckboxPage /> },
  { key: "3", label: "Modal", children: <ModalPage /> },
  { key: "4", label: "Icon", children: <IconPage /> },
  { key: "5", label: "Dropdown", children: <DropdownPage /> },
  { key: "6", label: "Toast", children: <ToastPage /> },
  { key: "7", label: "Color", children: <ColorPage /> },
];

function App() {
  return (
    <div style={{ padding: "5px 30px 0 30px" }}>
      <Tabs items={tabItems} />
      <Modal />
      <Toast />
    </div>
  );
}

export default App;
