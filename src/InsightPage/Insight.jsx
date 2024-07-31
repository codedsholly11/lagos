import React from 'react'
import registration from '../images/registration.svg'
import pew from '../images/pew.svg'
import attendance from '../images/attendance.svg'
import play from '../images/play.svg'

const Insight = () => {
  return (
    <div className='flex flex-col gap-[40px]'>
        <div className='flex flex-col gap-[50px] py-[30px] '>
            <div className='px-[70px] flex flex-col gap-[30px]'>
                <h1 className='text-5xl font-semibold '>Event Overview</h1>
                <p className='border-b-2'></p>
            </div>
            <div className='flex gap-[20px] overflow-x-scroll items-center justify-center w-[70%] px-[30px] ml-[200px] pb-[60px]'>
                <div className='flex gap-[30px] rounded-xl items-center justify-center p-[20px] shadow-xl w-[120%] h-[30vh] bg-blue-400'>
                    <img src={registration} alt="" />
                    <div>
                        <h1 className='text-4xl font-semibold'>369</h1>
                        <p className='text-2xl'>Total Registration</p>
                    </div>
                </div>
                <div className='flex gap-[30px] rounded-xl items-center justify-center p-[20px] shadow-xl w-[40%] h-[30vh] bg-blue-400'>
                    <img src={attendance} alt="" />
                    <div>
                        <h1 className='text-4xl font-semibold'>2447</h1>
                        <p className='text-2xl'>Total Attendance</p>
                    </div>
                </div>
                <div className='flex gap-[30px] rounded-xl p-[30px] items-center justify-center shadow-xl w-[40%] h-[30vh] bg-blue-400'>
                    <img src={pew} alt="" />
                    <div>
                        <h1 className='text-4xl font-semibold'>18</h1>
                        <p className='text-2xl'>Speakers</p>
                    </div>
                </div> 
                <div className='flex gap-[30px] rounded-xl p-[30px] items-center justify-center shadow-xl w-[40%] h-[30vh] bg-blue-400'>
                    <img src={play} alt="" />
                    <div>
                        <h1 className='text-4xl font-semibold'>3,161</h1>
                        <p className='text-2xl'>Total Streams</p>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='bg-slate-200 px-[70px] gap-[50px] flex flex-col py-[40px]'>

            <div>
                    <h1 className='text-5xl font-semibold'>Registration Breakdown</h1>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <div className='flex gap-[20px]'>
                    <div className=' w-[28vw] h-[11vh] rounded-lg bg-white text-2xl pl-[20px] py-[20px]'>
                        <h1>23 States in Nigeria</h1>
                    </div>
                    <div className=' w-[28vw] h-[11vh] rounded-lg bg-white text-2xl pl-[20px] py-[20px]'>
                        <h1>14 African Countries</h1>
                    </div>
                    <div className=' w-[28vw] h-[11vh] rounded-lg bg-white text-2xl pl-[20px] py-[20px]'>
                        <h1>3 European Countries</h1>
                    </div>
                </div>

                <div className='flex gap-[20px]'>
                    <div className=' w-[28vw] h-[11vh] rounded-lg bg-white text-2xl pl-[20px] py-[20px]'>
                        <h1>3 Asian Countries</h1>
                    </div>
                    <div className=' w-[28vw] h-[11vh] rounded-lg bg-white text-2xl pl-[20px] py-[20px]'>
                        <h1>USA and UK</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-cyan-200 flex flex-col px-[70px] gap-[50px] py-[40px]'>
            <div>
                <h1 className='text-5xl font-semibold'>Attendance Breakdown</h1>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <div className='flex gap-[20px]'>
                    <div className=' w-[28vw] h-[11vh] rounded-lg bg-white text-2xl pl-[20px] py-[20px]'>
                        <h1>Day 1: States in Nigeria</h1>
                    </div>
                    <div className=' w-[28vw] h-[11vh] rounded-lg bg-white text-2xl pl-[20px] py-[20px]'>
                        <h1>Day 2: African Countries</h1>
                    </div>
                    <div className=' w-[28vw] h-[11vh] rounded-lg bg-white text-2xl pl-[20px] py-[20px]'>
                        <h1>Day 3: European Countries</h1>
                    </div>
                </div>
            </div>
          
        </div>
        <div className='bg-green-200 flex flex-col px-[70px] gap-[50px] py-[40px]'>
            <div>
                <h1 className='text-5xl font-semibold'>Attendance Breakdown</h1>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <div className='flex gap-[20px]'>
                    <div className=' w-[28vw] h-[11vh] rounded-lg bg-white text-2xl pl-[20px] py-[20px]'>
                        <h1>Day 1: States in Nigeria</h1>
                    </div>
                    <div className=' w-[28vw] h-[11vh] rounded-lg bg-white text-2xl pl-[20px] py-[20px]'>
                        <h1>Day 2: African Countries</h1>
                    </div>
                    <div className=' w-[28vw] h-[11vh] rounded-lg bg-white text-2xl pl-[20px] py-[20px]'>
                        <h1>Day 3: European Countries</h1>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Insight
