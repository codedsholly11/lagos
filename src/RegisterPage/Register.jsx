import React from 'react'

const Register = () => {
  return (
    <div className='px-[40px]'>
         <div className='flex flex-col items-center justify-center gap-4 py-[30px]'>
            <h1 className='text-4xl text-red-400'>Web3 Lagos Conference 3.0: Registration Form</h1>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-3xl text-blue-600'>Register Now!</h2>
                <p>Be a part of the Event</p>
            </div>
            <h3 className='text-2xl'>Fill in the information carefully</h3>
        </div>
        <div>
            <p className='border-b-2'></p>
        </div>
        <div>
            <h2 className='text-3xl font-bold py-[40px]'>Personal Details</h2>
            <div className='px-[40px] py-[20px] border-2 rounded-xl flex flex-col gap-5'>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold'>Name</p>
                    <input className='border-2 w-[86vw] h-[8vh] rounded-lg px-[15px]' type="text" placeholder='Put in your fullname' />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold'>Email Address</p>
                    <input className='border-2 w-[86vw] h-[8vh] rounded-lg px-[15px]' type="text" placeholder='Enter your email' />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold'>Phone Number</p>
                    <input className='border-2 w-[86vw] h-[8vh] rounded-lg px-[15px]' type="text" placeholder='Put in your phone number'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold'>Country</p>
                    <input className='border-2 w-[86vw] h-[8vh] rounded-lg px-[15px]' type="text" placeholder='the country you are coming from'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold'>Location</p>
                    <input className='border-2 w-[86vw] h-[8vh] rounded-lg px-[15px]' type="text" placeholder='e.g lagos'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold'>Telegrame Username</p>
                    <input className='border-2 w-[86vw] h-[8vh] rounded-lg px-[15px]' type="text" placeholder='Put in your telegrame ID' name="" id="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold'>X Handle</p>
                    <input className='border-2 w-[86vw] h-[8vh] rounded-lg px-[15px]' type="text" placeholder='Put in your xhandle' name="" id="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold'>Gender</p>
                    <select className='border-2 w-[86vw] h-[8vh] rounded-lg px-[15px]'>
                        <option value="">pleas select an option</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                        <option value="">Others</option>
                    </select>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold'>What Best Describes Your Role In Web3</p>
                    <select className='border-2 w-[86vw] h-[8vh] rounded-lg px-[15px]'>
                                <option value="">Select your role</option>
                                <option value="">Developer</option>
                                <option value="">Investor</option>
                                <option value="">Community Manager/Community Builder</option>
                                <option value="">Traders</option>
                                <option value="">Newbies</option>
                                <option value="">Desighner</option>
                                <option value="">Marketer</option>
                                <option value="">Product Manager</option>
                                <option value="">Content</option>
                                <option value="">Researchers</option>
                                <option value="">others</option>
                    </select>
                    
                </div>
                
                <div className='flex justify-between py-[30px]'>
                    <button>Clear form</button>
                    <button className='bg-blue-700 px-[20px] py-[6px] rounded-lg text-white '>sumit</button>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Register
