import { useRef, useState, useEffect, FC } from "react"
import { JsIcon } from "./icons/JsIcon"
import { ReactIcon } from "./icons/ReactIcon"
import { TailwindIcon } from "./icons/TailwindIcon"
import { TsIcon } from "./icons/TsIcon"
import { IconAnimated } from "./IconAnimated"
import { NodeIcon } from "./icons/NodeIcon"
import { HtmlIcon } from "./icons/HtmlIcon"
import { CssIcon } from "./icons/CssIcon"
import { ExpressIcon } from "./icons/ExpressIcon"
import { NextIcon } from "./icons/NextIcon"
import { GqIcon } from "./icons/GqIcon"
import { GitIcon } from "./icons/GitIcon"

type Props = {
  children: JSX.Element,
  theme: string,
}

export const BackgroundAnimated: FC<Props> = ({ children, theme }) => {
  const [widthBg, setWidth] = useState(0)
  const [heightBg, setHeight] = useState(0)
  const background = useRef<HTMLDivElement>(null)  

  useEffect(() => {
    if( background.current !== null) {
      const { width, height } = background.current.getBoundingClientRect()
      setWidth(width)
      setHeight(height)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("resize", () => {
      if( background.current !== null) {
        const { width, height } = background.current.getBoundingClientRect()
        setWidth(width)
        setHeight(height)
      }
    })
  }, [])

  return (
    <div className="bg-animated bg-sky-300 dark:bg-sky-800 transition-all" ref={background}>
      <IconAnimated width={widthBg} height={heightBg} waitTime={0} >
        <GitIcon color={ theme === "dark" ? "white" : "#313131" } />
      </IconAnimated>
      <IconAnimated width={widthBg} height={heightBg} waitTime={500} >
        <GqIcon color={ theme === "dark" ? "white" : "#313131" } />
      </IconAnimated>
      <IconAnimated width={widthBg} height={heightBg} waitTime={2000} >
        <NextIcon color={ theme === "dark" ? "white" : "#313131" } />
      </IconAnimated>
      <IconAnimated width={widthBg} height={heightBg} waitTime={1400} >
        <ExpressIcon color={ theme === "dark" ? "white" : "#313131" } />
      </IconAnimated>
      <IconAnimated width={widthBg} height={heightBg} waitTime={1000} >
        <JsIcon color={ theme === "dark" ? "white" : "#313131" } />
      </IconAnimated>
      <IconAnimated width={widthBg} height={heightBg} waitTime={700}>
        <ReactIcon color={ theme === "dark" ? "white" : "#313131" } />
      </IconAnimated>
      <IconAnimated width={widthBg} height={heightBg} waitTime={4000}>
        <TailwindIcon color={ theme === "dark" ? "white" : "#313131" } />
      </IconAnimated>
      <IconAnimated width={widthBg} height={heightBg} waitTime={2500}>
        <TsIcon color={ theme === "dark" ? "white" : "#313131" } />
      </IconAnimated>
      <IconAnimated width={widthBg} height={heightBg} waitTime={3000}>
        <NodeIcon color={ theme === "dark" ? "white" : "#313131" } />
      </IconAnimated>
      <IconAnimated width={widthBg} height={heightBg} waitTime={4500}>
        <HtmlIcon color={ theme === "dark" ? "white" : "#313131" } />
      </IconAnimated>
      <IconAnimated width={widthBg} height={heightBg} waitTime={2700}>
        <CssIcon color={ theme === "dark" ? "white" : "#313131" } />
      </IconAnimated>
      {children}
    </div>
  )
}