import { MyAvatar } from './MyAvatar'
import { DownloadIcon } from './icons/DownloadIcon'
import { Theme } from '../types'
import { FC } from 'react'

type Props = {
  theme: Theme
}

export const CardProfile: FC<Props> = ({ theme }) => {
  return (
    <div className='rounded-md p-10 flex flex-col mx-auto lg:flex-row'>
      <MyAvatar />
      <div className='text-center lg:text-left' >
        <h1 className='text-4xl md:text-8xl font-bold  text-sky-600 dark:text-sky-500 mb-9'>José Camacho</h1>
        <div className='flex flex-col gap-5 items-center justify-center md:flex-row md:gap-10 lg:justify-start'>
          <div className='md:ml-4'>
            <h2 className='text-sky-900 dark:text-teal-400 font-extrabold text-xl'>Desarrollador frontend </h2>
            <h2 className='text-sky-900 dark:text-teal-400 font-extrabold text-xl'>Ingeniero en Sistemas</h2>
          </div>
          <div>
            <a href='./CV-José-Camacho.pdf' download className=' w-48 mx-auto '>
              <button className='rounded-2xl cursor-pointer px-6 border border-sky-800 dark:border-sky-600 py-3 bg-sky-600 dark:bg-sky-800 dark:text-sky-200 text-slate-100 hover:bg-sky-500 hover:dark:bg-sky-600 font-bold p-2 flex items-center justify-center transition gap-2'>
                <span>Descargar CV</span>
                <DownloadIcon width='20' height='20' color={theme === "dark" ? "rgb(186 230 253)" : "rgb(241 245 249)"} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}