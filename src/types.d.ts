export type Theme = 'light' | 'dark'

export interface AppContext {
  theme: Theme
  toggleTheme: () => void
}

export interface Project {
  title: string,
  description: JSX.Element,
  image: string,
  technologies: Array<JSX.Element>,
  linkRepo: string,
  linkDemo: string
}
