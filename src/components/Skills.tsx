import { BackgroundAnimated } from './BackgroundAnimated'
import { SkillCard } from './SkillCard'
import { useTheme } from '../hooks/useTheme'

import { ReactIcon } from "./icons/ReactIcon"
import { TailwindIcon } from "./icons/TailwindIcon"
import { NodeIcon } from "./icons/NodeIcon"
import { HtmlIcon } from "./icons/HtmlIcon"
import { CssIcon } from "./icons/CssIcon"
import { ExpressIcon } from "./icons/ExpressIcon"
import { GqIcon } from "./icons/GqIcon"
import { GitIcon } from "./icons/GitIcon"
import { GitHubIcon } from './icons/GitHubIcon'
import { JsIconBg } from './icons/JsIconBg'
import { NextIconBg } from './icons/NextIconBg'
import { TsIconBg } from './icons/TsIconBg'
import { PostmanIcon } from './icons/PostmanIcon'
import { StyledComponentsIcon } from './icons/StyledComponentsIcon'
import { MySqlIcon } from './icons/MySqlIcon'
import { MongoDBIcon } from './icons/MongoDBIcon'

export const Skills = () => {
  const { theme } = useTheme()

  return (
    <BackgroundAnimated theme={theme}>
      <div className='max-w-screen-xl m-auto py-40 px-4 relative z-10'>
        <h3 className='font-extrabold text-slate-900 dark:text-sky-400 text-4xl md:text-6xl mb-24'>
          Tecnologías
        </h3>
        <div className='grid grid-cols-1 gap-4 gap-y-16 mx-auto justify-items-center sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4'>
          <SkillCard name="JavaScript" >
            <JsIconBg color="#FFCA15" />
          </SkillCard>
          <SkillCard name="React" >
            <ReactIcon color="#61DAFB" />
          </SkillCard>
          <SkillCard name='Tailwind' >
            <TailwindIcon color="#00D1B2" />
          </SkillCard>
          <SkillCard name='TypeScript' >
            <TsIconBg color="#007ACC" />
          </SkillCard>
          <SkillCard name='NodeJS' >
            <NodeIcon color="#339933" />
          </SkillCard>
          <SkillCard name='HTML' >
            <HtmlIcon color="#E34C26" />
          </SkillCard>
          <SkillCard name='CSS' >
            <CssIcon color="#1572B6" />
          </SkillCard>
          <SkillCard name='Express' >
              <ExpressIcon color="#fff" />
          </SkillCard>
          <SkillCard name='NextJS' >
            <NextIconBg />
          </SkillCard>
          <SkillCard name='GraphQL' >
            <GqIcon color="#e535ab" />
          </SkillCard>
          <SkillCard name='Git' >
            <GitIcon color="#F05032" />
          </SkillCard>
          <SkillCard name='GitHub' >
            <GitHubIcon color={theme === "dark" ? "white" : "black"} />
          </SkillCard>
          <SkillCard name='Postman' >
            <PostmanIcon />
          </SkillCard>
          <SkillCard name='Styled Components'>
            <StyledComponentsIcon />
          </SkillCard>
          <SkillCard name='MySql'>
            <MySqlIcon />
          </SkillCard>
          <SkillCard name='MongoDB'>
            <MongoDBIcon />
          </SkillCard>
        </div>
      </div>
    </BackgroundAnimated>
  )
}