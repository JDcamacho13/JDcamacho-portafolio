import { FC } from "react"

type Props = {
  children: JSX.Element
}

export const CardWindowIOS : FC<Props> = ({ children }) => {
  return (
    <div className="border border-gray-400 rounded-md w-[90%] mx-auto overflow-hidden md:w-[65%] dark:border-slate-600">
      <div className=" bg-slate-200 w-full h-8 border-b border-gray-400 dark:bg-gray-700 dark:border-slate-600">
        <div className="flex mx-2 h-full max-w-[25%] items-center gap-x-2 ">
          <div className="rounded-full h-4 w-4 bg-red-500" ></div>
          <div className="rounded-full h-4 w-4 bg-yellow-500" ></div>
          <div className="rounded-full h-4 w-4 bg-green-500" ></div>
        </div>
      </div>
      {children}
    </div>
  )
}