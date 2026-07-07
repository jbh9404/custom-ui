import React, { useState } from "react";
import CustomTabs from "../UI/Tabs";
import CustomAccordion from "../UI/Accordion";
import CustomPagination from "../UI/Pagination";
import CustomDrawer from "../UI/Drawer";

const NavigationPage = () => {
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerPlacement, setDrawerPlacement] = useState<"left" | "right" | "top" | "bottom">("right");

  const tabItems = [
    { key: "tab1", label: "Tab 1", children: <div style={{ padding: '16px', background: '#fafafa' }}>Content of Tab Pane 1</div> },
    { key: "tab2", label: "Tab 2", children: <div style={{ padding: '16px', background: '#fafafa' }}>Content of Tab Pane 2</div> },
    { key: "tab3", label: "Tab 3", children: <div style={{ padding: '16px', background: '#fafafa' }}>Content of Tab Pane 3</div> },
  ];

  const accordionItems = [
    { id: "1", title: "What is React?", content: <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.</p> },
    { id: "2", title: "Why use SCSS?", content: <p>SCSS provides variables, nesting, and mixins, making CSS more maintainable and cleaner.</p> },
    { id: "3", title: "How to build custom UI?", content: <p>By understanding CSS and React state, you can build accessible and reusable components from scratch.</p> },
  ];

  const openDrawer = (placement: "left" | "right" | "top" | "bottom") => {
    setDrawerPlacement(placement);
    setDrawerOpen(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px 0' }}>
      
      <section>
        <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Tabs</h3>
        <div style={{ maxWidth: '600px' }}>
          <CustomTabs items={tabItems} />
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Accordion (Collapse)</h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h4 style={{ fontFamily: 'sans-serif', margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>Single Active (Default)</h4>
            <CustomAccordion items={accordionItems} />
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h4 style={{ fontFamily: 'sans-serif', margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>Multiple Active</h4>
            <CustomAccordion items={accordionItems} allowMultiple />
          </div>
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Pagination</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <CustomPagination current={page} total={50} pageSize={10} onChange={setPage} />
          <CustomPagination current={page} total={100} pageSize={10} onChange={setPage} color="#52c41a" />
          <div style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#666' }}>Current Page: {page}</div>
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: '16px', fontFamily: 'sans-serif', fontSize: '24px' }}>Drawer (Sidebar)</h3>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }} onClick={() => openDrawer("left")}>Open Left</button>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }} onClick={() => openDrawer("right")}>Open Right</button>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }} onClick={() => openDrawer("top")}>Open Top</button>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }} onClick={() => openDrawer("bottom")}>Open Bottom</button>
        </div>
      </section>

      <CustomDrawer 
        open={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
        placement={drawerPlacement}
        title={`Drawer - ${drawerPlacement}`}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </CustomDrawer>
      
    </div>
  );
};

export default NavigationPage;
