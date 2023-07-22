'use client'
import data from './data/info.json'
import Element from './components/Element'
import { useEffect } from 'react'

export default function Home() {

  return(
    <div className='flex flex-col px-10 w-full min-h-screen bg-stone-200 items-center justify-center'>
      <div className="grid grid-cols-18 grid-rows-9 gap-x-2 gap-y-1 w-full">
        {data.elements.map(element => <Element number={element.number} letter={element.symbol} element={element.name} mass={element.atomic_mass} cat={element.category} x={element.xpos} y={element.ypos} />)}
        {useEffect(() => {
          data.elements.forEach(element => document.querySelector(`.${element.name}`).style.gridColumnStart = element.xpos)
          data.elements.forEach(element => document.querySelector(`.${element.name}`).style.gridRowStart = element.ypos)
        }, [])}
        <div className="p-8 flex justify-center row-start-1 row-end-4 col-start-3 col-end-13">
          <h1 className="text-5xl font-Poppins text-red-700 drop-shadow-lg shadow-red-600"><bold className='font-bold'>Tableau périodique</bold> des <pre className='font-Poppins'>   éléments</pre></h1>
        </div>
      </div>
    </div>
  )
}