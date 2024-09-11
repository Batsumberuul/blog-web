import { createContext, use, useState } from "react";
import useSWR from "swr";

export const ThemeContext = createContext("light");

export const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
  );
};
