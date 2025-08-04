"use client";
import React, { createContext, useState } from "react";

// 1️⃣ Create the Context
export const Context = createContext();

// 2️⃣ Create the Provider Component
export default function ContextProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  const [currentNav, setCurrentNav] = useState(null);
  const [active, setActive] = useState(false);
  const [sidebar, setSidebar] = useState(true);

  const sidehandler = () => {
    setSidebar(!sidebar);
  };
  return (
    <Context.Provider
      value={{
        visible,
        setVisible,
        user,
        setUser,
        theme,
        setTheme,
        setSidebar,
        sidebar,
        sidehandler,
        currentNav,
        setCurrentNav,
        active,
        setActive,
        setSidebar,
      }}
    >
      {children}
    </Context.Provider>
  );
}
