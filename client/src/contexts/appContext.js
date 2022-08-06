import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [prevFile, setPrevFile] = useState();

  const passFiles = (file) => {
    setPrevFile(file);
  };

  const cancelFiles = () => {
    setPrevFile("");
  };
  const values = {
    prevFile,
    passFiles,
    cancelFiles,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useUpload = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useUpload must be used within a AppContextProvider");
  }

  return context;
};
