import React from 'react'
import { CiLocationOn } from "react-icons/ci";
// import { FaPeopleGroup } from "react-icons/fa6";
import attendees from '../images/attendees.svg'
import speaker from '../images/speakers.svg'
import sponsor from '../images/sponsor.svg'

const Hero = () => {
  return (
    <div className='bg-blue-600 flex flex-col items-center justify-center gap-[30px] py-[30px]'>
        <div className='w-[60vw] items-center flex flex-col gap-[30px]'>
            <h1 className='text-6xl font-semi-bold text-white'>Web3 Lagos Conference 3.0</h1>
            <p className='text-white w-[45vw] text-center '>The Web3 Lagos Conference is the largest Web3 Event in Lagos, Nigeria. This conference will bring together Web3 enthusiasts from all over Nigeria and beyond.
                Here, community meets technology for three days of intensive Networking and Learning experiences. Future of money, you deserve to be in the know!</p>
        </div>
        <div className='flex gap-[30px]'>
            <button className='bg-black text-white rounded-lg px-[20px] py-[15] h-[7vh] w-[14vw]'>Register Here</button>
            <button className='border-2 border-white rounded-lg px-[20px] py-[15] h-[7vh] w-[14vw] text-white'>Sponsor's Deck</button>
        </div>
        <div className='flex gap-3 text-white items-center'>
            <CiLocationOn />
            <h3>The Zone, Gbagada, Lagos State.</h3>
        </div>
        <form>

        </form>
        <div className='flex gap-[30px]'>
            <div className='flex gap-4'>
                {/* <FaPeopleGroup /> */}
                <img src={attendees} alt="" />
                <div>
                    <h1 className='text-4xl text-white'>689</h1>
                    <p className='text-white'>Attendee</p>
                </div>
            </div>
            <div className='flex gap-4'>
                <img src={attendees} alt="" />
                <div>
                    <h1 className='text-4xl text-white'>--</h1>
                    <p className='text-white'>Hackers</p>
                </div>
            </div>
            <div className='flex gap-4'>
                <img src={speaker} alt="" />
                <div>
                    <h1 className='text-4xl text-white'>18</h1>
                    <p className='text-white'>speakers</p>
                </div>
            </div>
            <div className='flex gap-4'>
                <img src={sponsor} alt="" />
                <div>
                    <h1 className='text-4xl text-white'>15+</h1>
                    <p className='text-white'>Sponsors</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
