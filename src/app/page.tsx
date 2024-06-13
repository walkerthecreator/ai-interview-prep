import { HTMLProps } from 'react'

interface BackgroundGridProps {
  color: string
  cellSize: string | number
  strokeWidth: number | string
  className?: string
  fade?: boolean
}

const BackgroundGrid = ({
  color = '#a1a1a1',
  cellSize = '30px',
  strokeWidth = '3px',
  className,
  fade = true,
  // ...props
}: Partial<BackgroundGridProps> & HTMLProps<HTMLDivElement>) => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${color}' stroke-width='${strokeWidth}' fill-opacity='0.4' >
      <path d='M 100 0 L 100 200'/>
      <path d='M 0 100 L 200 100'/>
    </svg>
  `
  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

  return (
    <div
      className={`pointer-events-none absolute -z-10 inset-0 left-0 top-0 flex h-full w-full ${className}`}
      style={{
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: cellSize,
        maskImage: fade
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
        WebkitMaskImage: fade
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
      }}>
    </div>
  )
}

const Home = ()=>{
  return <div>
    <BackgroundGrid />
    <div className='w-3/5 mx-auto flex flex-col min-h-screen justify-around items-center '>
      <span className='bg-zinc-700 text-sm text-white p-1 px-4 rounded-full'>Free 100 Credits</span>
      <h1 className='text-6xl text-center text-zinc-700 font-extrabold'>Ace your Next Interview, Practice Before give </h1>
      <div className='mt-10 w-73 gap-2 flex justify-center h mx-auto z-10'>
        <button className='p-1 bg-green-600 text-white px-3 rounded-md'>Get Started For Free</button>
        <button className='p-1 text-white bg-zinc-700  px-3 rounded-md'>Github</button>
      </div>
    </div>
  </div>  
}





export default Home