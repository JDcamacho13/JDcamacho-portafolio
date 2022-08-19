import { useEffect, useContext } from "react"
import { Context } from "../context/AppContext"
import { Theme } from "../types"

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(Context)
  
  const prevTheme = theme === "light" ? "dark" : "light"  

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(prevTheme)
    root.classList.add(theme)

    localStorage.setItem("theme", theme)
  }, [theme, prevTheme])

  return { theme, toggleTheme }
}