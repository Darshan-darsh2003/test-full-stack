import React from "react";
import "@mantine/core/styles.css";
import MainAppShell from "./appshell/MainAppShell";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MyComponent: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MainAppShell />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyComponent;
