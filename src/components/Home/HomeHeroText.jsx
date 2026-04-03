import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center'>
      <div className='text-[9.5vw] justify-center flex item-center uppercase leading-[15vh]'>The spark for</div>
      <div className='text-[9.5vw] justify-center flex item-center uppercase leading-[15vh]'>all<div className='h-[7vw] w-[15vw] -m-2 rounded-full overflow-hidden'><Video /></div>things</div>
      <div className='text-[9.5vw] justify-center flex item-center uppercase leading-[15vh]'>creative</div>
    </div>
  )
}

export default HomeHeroText
