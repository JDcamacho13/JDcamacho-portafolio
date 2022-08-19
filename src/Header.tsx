import { LogoIcon } from "./components/icons/LogoIcon"
import { ToggleTheme } from "./components/ToggleTheme"
import { useTheme } from "./hooks/useTheme"

export const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="w-full p-3 fixed z-50 bg-slate-100/60 dark:bg-gray-900/30 backdrop-blur-sm" >
      <ul className=" flex max-w-screen-xl mx-auto content-center justify-between">
        <li className={`logo-${theme}`}>
          <LogoIcon width={32} height={32} />
        </li>
        <li className="self-center">
          <ToggleTheme theme={theme === "dark"} toggleTheme={toggleTheme} />
        </li>
      </ul>
    </header>
  )
}