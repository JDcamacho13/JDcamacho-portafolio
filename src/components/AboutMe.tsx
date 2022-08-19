import { CardWindowIOS } from "./CardWindowIOS"

export const AboutMe = () => {
  return (
    <div className=" flex items-center gap-y-8 flex-col md:flex-row-reverse md:gap-x-8 ">
      <CardWindowIOS>
        <div className="py-8 px-4 md:p-8">
          <h3 className="font-extrabold text-sky-600 text-4xl">Sobre mi!!</h3>
          <p className="my-6 text-lg text-gray-600 md:text-xl dark:text-slate-400">Hola 👋 soy <span className="text-sky-700 dark:text-teal-400 font-bold" >José Daniel Camacho</span>, llevo programando desde hace tres años especializándome en tecnologías web como <span className="text-yellow-600 dark:text-yellow-400 font-bold">JavaScript</span> y <span className="text-sky-500 font-bold">React</span></p>
          <p className="my-6 text-lg text-gray-600 md:text-xl dark:text-slate-400">Una de mis <span className="font-bold text-gray-800 dark:text-slate-300">metas</span> 🏅 es vivir de crear soluciones para problemas a través de código, lo cual disfruto.</p>
          <p className="my-6 text-lg text-gray-600 md:text-xl dark:text-slate-400">Me considero <span className=" font-bold text-gray-800 dark:text-slate-300">trabajador</span> 👨‍💻 y <span className=" font-bold text-gray-800 dark:text-slate-300">empático</span> con mis compañeros de trabajo. Tengo buena habilidad para para <span className=" font-bold text-gray-800 dark:text-slate-300">identificar y resolver problemas.</span></p>
          <p className="my-6 text-lg text-gray-600 md:text-xl dark:text-slate-400">Además de programar también me gusta hacer <span className="font-bold text-gray-800 dark:text-slate-300">deporte</span> ⚽ y jugar <span className=" text-gray-800 dark:text-slate-300 font-bold">videojuegos</span> 🎮</p>
        </div>
      </CardWindowIOS>
      <div className="img-levitating md:w-[45%]">
        <img className=" drop-shadow-xl " src="./bg.png" alt="bg" />
      </div>
    </div>
  )
}