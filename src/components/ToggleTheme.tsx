import { FC, ChangeEventHandler } from 'react'

type Props = {
  theme: boolean,
  toggleTheme: ChangeEventHandler<HTMLInputElement>
}

export const ToggleTheme: FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <>
      <label className="switch p-2 cursor-pointer">
        <input type="checkbox" className={`toggle ${theme ? "dark-icon" : "ligth-icon"}`} checked={theme} onChange={toggleTheme} />
      </label>
    </>
  )
}