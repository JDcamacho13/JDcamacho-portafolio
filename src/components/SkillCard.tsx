import { FC } from "react"

type SkillCardProps = {
  name: string
  children: JSX.Element
}

export const SkillCard : FC<SkillCardProps> = ({ name, children }) => {
  return (
    <div className="rounded-lg min-h-[120px] bg flex flex-col justify-end w-52 items-center dark:bg-slate-900 bg-sky-900 shadow-xl overflow-hidden ">
      <div className="m-auto pt-3">
        {children}
      </div>
      <div className="bg-slate-900 dark:bg-sky-700 mt-3 w-full text-center">
        <p className="text-sky-200 font-bold">{name}</p>
      </div>
    </div>
  )
}