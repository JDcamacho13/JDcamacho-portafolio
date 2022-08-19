import { BackgroundAnimated } from './BackgroundAnimated'
import { MyAvatar } from './MyAvatar'

export const CardProfile = () => {
  return (
    // <BackgroundAnimated>
    //   <div className='w-48 rounded-md bg-slate-600 shadow-md text-white'>
    //     <h1>Hola!!👋, Soy José Camacho</h1>
    //   </div>
    // </BackgroundAnimated>
    <div className='rounded-md p-10 flex flex-col mx-auto md:flex-row'>
      <MyAvatar />
      <div className='text-center md:text-left' >
        <h1 className='text-4xl md:text-8xl font-bold  text-sky-600 dark:text-sky-500 mb-9'>José Camacho</h1>
        <div className='md:ml-4'>
          <h2 className='text-sky-900 dark:text-teal-400 font-extrabold text-xl'>Desarrollador frontend </h2>
          <h2 className='text-sky-900 dark:text-teal-400 font-extrabold text-xl'>Ingeniero en Sistemas</h2>
        </div>
      </div>
    </div>
  )
}