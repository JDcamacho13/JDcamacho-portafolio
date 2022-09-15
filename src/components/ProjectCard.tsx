import { FC } from "react"
import { Project } from "../types"
import { GitHubIcon } from "./icons/GitHubIcon"
import { RedirectIcon } from "./icons/RedirectIcon"
import { useTheme } from "../hooks/useTheme"

export const ProjectCard: FC<Project> = ({ title, description, image, technologies, linkRepo, linkDemo }) => {
  const { theme } = useTheme()

  return (
    <div className="w-80 md:w-96 mx-auto rounded-xl bg-gray-50 shadow-lg dark:bg-gray-800 overflow-hidden">
      <div className="w-full bg-slate-900 dark:bg-sky-700 px-8 py-2">
        <h2 className="text-sky-50 font-extrabold text-xl" >{title}</h2>
      </div>
      <picture className="w-full" >
        <img className="object-contain" src={image} alt={title} />
      </picture>
      <div className="px-8 py-2">
        <div className="min-h-[200px]">
        <h2 className="text-sky-600 font-bold text-xl my-2">Descripción</h2>
        <p className="text-lg text-gray-600 dark:text-slate-400 mb-4">{description}</p>
        </div>
        <h2 className="text-sky-600 font-bold text-xl">Tecnologías usadas</h2>
        <div className="w-full flex flex-wrap gap-2 px-4 py-2 content-center">{
          technologies.map((technology) => (
            <div className="">
              {technology}
            </div>
          ))
        }</div>
        <div className="flex flex-row justify-center py-8 gap-8 items-center">
          <a href={linkDemo} target="_blank" rel="noopener nofollow"  >
            <button className="rounded border border-sky-800 dark:border-sky-600 w-32 bg-sky-200 dark:bg-sky-800 dark:text-sky-200 text-blue-900 hover:bg-sky-400 hover:dark:bg-sky-600 font-bold p-2 flex items-center justify-center transition gap-2">
              <span className="text-sm">Demo</span>
              <RedirectIcon color={theme === "light" ? "rgb(30 58 138)" : "rgb(186 230 253)" }  />
            </button>
          </a>
          <a href={linkRepo} target="_blank" rel="noopener nofollow"  className="p-2 border border-transparent hover:bg-sky-400 hover:border-sky-800 hover:dark:border-sky-600 hover:dark:bg-sky-800 transition rounded-full" >
            <GitHubIcon color={theme === "light" ? "#000" : "#fff" } width="28" height="28" />
          </a>
        </div>
      </div>
    </div>
  )
}
