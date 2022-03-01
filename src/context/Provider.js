import { useState } from "react";
import { Context } from "./Context";

export default function Provider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Context.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </Context.Provider>
  );
}
