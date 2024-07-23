import React from 'react'
import arrow from '../images/arrows.webp'

const Down = () => {
  return (
    <div className='img text-white flex flex-col gap-[30px] px-[60px] justify-center h-[70vh]'>
        <h1 className='text-6xl font-bold'>Our Success Story;</h1>
        <p className='text-3xl'>Check galary from the previous event</p>
        <div className='flex gap-[20px]'>
            <img src={arrow} alt="" />
            <p className='text-4xl'>W3LC 2022: Link Here</p>
        </div>
        <div className='flex gap-[20px]'>
            <img src={arrow} alt="" />
            <p className='text-4xl'>W3LC 2022: Link Here</p>
        </div>
    </div>
  )
}

export default Down
