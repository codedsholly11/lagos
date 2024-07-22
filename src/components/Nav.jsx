import React from 'react'

const Nav = () => {
  return (
    <div className='flex items-center justify-between py-[10px] px-[70px] '>
        <ul className='flex gap-[20px]'>
            <li className='text-2xl'>Home</li>
            <li className='text-2xl'>Insights</li>
            <li className='text-2xl'>Sponsorships</li>
        </ul>
        <div>
            <button className='border-2 border-black rounded-lg h-[13vh] w-[12vw] text-2xl'>Hackatoon Registration</button>
            <button className='border-2 border-black rounded-lg h-[13vh] w-[12vw] text-2xl'>Register as a Speaker</button>
            <button className='border-2 border-black rounded-lg h-[13vh] w-[10vw] text-2xl bg-black text-white'>Register Here</button>
        </div>
      
    </div>
  )
}

export default Nav
