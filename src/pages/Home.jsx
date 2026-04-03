import React from 'react'
import Video from '../components/Home/Video'
import HomeBottomText from '../components/Home/HomeBottomText'
import HomeHeroText from '../components/Home/HomeHeroText'

const Home = () => {
  return (
    <div className='selection:bg-[#d3fd51] selection:text-black'>
        <div className='w-full h-screen bg-red-700 fixed'>
         <Video />
        </div>
        <div className='h-screen w-screen pb-4 overflow-hidden relative flex flex-col justify-between'>
            <HomeHeroText />
            <HomeBottomText />

        </div>
    </div>
  )
}

export default Home
