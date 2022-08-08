import React from "react";
import { View } from "./sections";
import { AppContextProvider } from "./contexts/appContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/:type" element={<View />} />
        <Route path="*" element={<View />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
