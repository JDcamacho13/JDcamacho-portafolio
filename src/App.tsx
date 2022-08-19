import { Header } from "./Header"
import { CardProfile } from './components/CardProfile'
import { Skills } from './components/Skills'
import { AboutMe } from "./components/AboutMe"
import { useTheme } from "./hooks/useTheme"
import { Projects } from "./components/Projects"
import { ContactMe } from "./components/ContactMe"

function App() {
  const { theme } = useTheme()

  return (
    <div className="dark:bg-gray-900 bg-slate-100 min-h-screen transition duration-200">
      <Header />
      <div className="relative z-10 overflow-hidden ">
        <div className="max-w-screen-xl mx-auto ">
          <div className={`min-h-screen py-32 md:py-56  ${theme === "dark" ? "bg-p" : "bg-l"}`}>
            <CardProfile />
          </div>
          <div className="min-h-[500px] my-52">
            <AboutMe />
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default App
