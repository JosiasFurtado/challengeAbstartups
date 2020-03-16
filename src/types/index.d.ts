import { ReactSVG } from 'react-svg'

declare module '*.svg' {
  const content: ReactSVG
  export default content
}
