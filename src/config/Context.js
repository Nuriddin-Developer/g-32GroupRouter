import React, { createContext, useContext, useState } from "react";

export const ContextData = createContext();

export default function ContextProvider({ children }) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const refreshData = () => {
    setData(JSON.parse(localStorage.getItem("data")) || []);
  };

  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    userName: "",
    password: "",
    email: "",
  });
  const clearInputData = () => {
    setInputData({
      id: "",
      name: "",
      userName: "",
      password: "",
      email: "",
    });
  };

  return (
    <ContextData.Provider
      value={{
        data,
        setData,
        refreshData,
        inputData,
        setInputData,
        clearInputData,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}
