import React from "react";
import { Upload, View } from "./sections";
import { AppContextProvider } from "./contexts/appContext";

function App() {
  return (
    <div className="app">
      <AppContextProvider>
        <Upload />
        <View />
      </AppContextProvider>
    </div>
  );
}

export default App;
