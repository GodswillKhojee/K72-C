import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex justify-center item-center gap-8'>
      <div className='leading-[7vw] h-[110px] hover:border-[#D3FD50] hover:text-[#D3FD50] flex item-center px-10 border-2 border-white rounded-full uppercase'>
        <Link to='/projects' className='text-[7vw] mt-3'>Projects</Link>
      </div>
      <div className='leading-[7vw] h-[110px] hover:border-[#D3FD50] hover:text-[#D3FD50] flex itm-center px-10 border-2 border-white rounded-full uppercase'>
        <Link to='/agency' className='text-[7vw] mt-3'>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
