import { LinkedinIcon } from "./icons/LinkedinIcon"
import { MailIcon } from "./icons/MailIcon"
import { useTheme } from "../hooks/useTheme"

export const ContactMe = () => {
  const { theme } = useTheme()

  return (
    <div className="bg-slate-900 dark:bg-sky-900">
      <div className="max-w-screen-md m-auto py-40 px-4 text-center">
        <h3 className='font-extrabold text-sky-400 dark:text-sky-400 text-4xl md:text-6xl mb-8'>
          Contacto
        </h3>
        <p className="mb-8 ml-2 text-lg text-sky-200">Me puedes contactar de las siguientes formas</p>
        <div className="flex  items-center flex-col gap-10 md:flex-row md:justify-center">
          <a href="mailto:j.d.camacho27@gmail.com" target="_blank" >
            <button className="rounded-lg w-40 border border-sky-800 dark:border-sky-600 px-6 bg-sky-200 dark:bg-sky-800 dark:text-sky-200 text-blue-900 hover:bg-sky-400 hover:dark:bg-sky-600 font-bold p-2 flex items-center justify-center transition gap-2">
              <span>Correo</span>
              <MailIcon color={theme === "light" ? "rgb(7 89 133)" : "rgb(186 230 253)"} width="40" height="40" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/jos%C3%A9-daniel-camacho-976957236/" target="_blank">
            <button className="rounded-lg w-40 border border-sky-800 dark:border-sky-600 px-6 bg-sky-200 dark:bg-sky-800 dark:text-sky-200 text-blue-900 hover:bg-sky-400 hover:dark:bg-sky-600 font-bold p-2 flex items-center justify-center transition gap-2">
              <span>Linkedin</span>
              <LinkedinIcon width="40" height="40" />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}