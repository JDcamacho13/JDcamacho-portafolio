import { FC, useEffect, useState } from "react"

type Props = {
  waitTime: number,
  width: number,
  height: number
  children: JSX.Element
}

export const IconAnimated: FC<Props> = ({ waitTime = 0, width, height, children }) => {
  const getRamdomPostion = (width : number, height: number) => {
    const x = Math.floor(Math.random() * (width - 84))
    const y = Math.floor(Math.random() * (height - 84))

    return { x, y }
  }

  const [position, setPostion] = useState(getRamdomPostion(width, height))
  const [animation, setAnimation] = useState("")

  useEffect(() => {
    setAnimation("")
    setPostion(getRamdomPostion(width, height))
    const time = waitTime ? Math.floor(Math.random() * 10000) : waitTime
    setTimeout(() => {
      setAnimation("animation-icon")
    }, time)
  }, [width, height])

  const animationEnd = () => {
    console.log('end')
    setPostion(getRamdomPostion(width, height))
  }

  return (
    <div key={`icon-${width}-${height}`} className={"icon-bg " + animation} style={{ top: position.y, left: position.x }} onAnimationIteration={animationEnd}>
      {children}
    </div>
  )
}