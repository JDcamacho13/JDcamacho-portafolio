import { createContext, useState , FC } from "react";
import { AppContext, Theme } from "../types";

export const Context = createContext<AppContext>({
  theme: "light",
  toggleTheme: () => {},
});

type Props = {
  children: JSX.Element
}

export const Provider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() : Theme => {
    const themeInitial = localStorage.getItem("theme")

    const defaultOption = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"

    return themeInitial as Theme || defaultOption
  })
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const value = {
    theme,
    toggleTheme
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}