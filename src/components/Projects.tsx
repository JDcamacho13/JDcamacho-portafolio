import { ProjectCard } from "./ProjectCard"
import { Project } from "../types"
import { JsIconBg } from "./icons/JsIconBg"
import { NextIconBg } from "./icons/NextIconBg"
import { ReactIcon } from "./icons/ReactIcon"
import { CssIcon } from "./icons/CssIcon"
import { StyledComponentsIcon } from "./icons/StyledComponentsIcon"
import { NodeIcon } from "./icons/NodeIcon"
import { VueIcon } from "./icons/VueIcon"

const size = {
  width: "32px",
  height: "32px",
}
  
const projects: Array<Project> = [
  {
    title: "Social Media App",
    description: <p>Una <span className="font-bold text-gray-800 dark:text-slate-300">app</span> para visualizar métricas de mis <span className="font-bold text-gray-800 dark:text-slate-300">redes sociales</span>.</p>,
    image: "./socialmedia-project.png",
    technologies: [
      <JsIconBg color="#FFCC15" {...size}  />, 
      <ReactIcon {...size} color="#61DAFB" /> , 
      <CssIcon {...size} color="#1572B6" />
    ],
    linkRepo: "https://github.com/JDcamacho13/social-media-dashboard",
    linkDemo: "https://social-media-dashboard-ochre-sigma.vercel.app/",
  },
  {
    title: "Weather app",
    description: <p><span className="font-bold text-gray-800 dark:text-slate-300">App</span> que muestra estadísticas del <span className="font-bold text-gray-800 dark:text-slate-300">clima</span> en distintas ciudades del mundo. <br /> Esta app fue hecha para el <span className="font-bold text-gray-800 dark:text-slate-300">hackaton de midudev</span></p>,
    image: "./weather-project.png",
    technologies: [
      <JsIconBg color="#FFCC15" {...size}  />, 
      <ReactIcon {...size} color="#61DAFB" /> , 
      <StyledComponentsIcon {...size} font="30" />,
      <NodeIcon {...size} color="#339933" />
    ],
    linkRepo: "https://github.com/JDcamacho13/weather-app",
    linkDemo: "https://weather-app-pied-one.vercel.app/"
  },
  {
    title: "Home Cloud",
    description: <p>Esta <span className="font-bold text-gray-800 dark:text-slate-300">app</span> esta pensada para ser usada en tu <span className="font-bold text-gray-800 dark:text-slate-300">casa</span> como un <span className="font-bold text-gray-800 dark:text-slate-300">storage</span> compartido en toda tu red.</p>,
    image: "./home-cloud.png",
    technologies: [
      <JsIconBg color="#FFCC15" {...size}  />,
      <NextIconBg {...size} />,
      <CssIcon {...size} color="#1572B6" />
    ],
    linkRepo: "https://github.com/JDcamacho13/home-cloud",
    linkDemo: "https://home-cloud.vercel.app/"
  },
  {
    title: "Coin market",
    description: <p>Pequeña <span className="font-bold text-gray-800 dark:text-slate-300">app</span> Para ver el precio de diferentes crypto moneda.</p>,
    image: "./coin-market-project.png",
    technologies: [
      <JsIconBg color="#FFCC15" {...size}  />,
      <VueIcon {...size} />,
      <CssIcon {...size} color="#1572B6" />
    ],
    linkRepo: "https://github.com/JDcamacho13/coin-market",
    linkDemo: "https://coin-market-sigma.vercel.app/"
  }
]

export const Projects = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-14 px-4 mb-36  ">
      <h3 className='font-extrabold text-slate-900 dark:text-sky-400 text-4xl my-24 md:text-6xl'>
        Proyectos
      </h3>
      <div className=" flex flex-wrap gap-8 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}