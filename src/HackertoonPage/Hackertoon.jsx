import React from 'react'

const Hackertoon = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[100vw] '>
        <div className='flex flex-col border-2 border-black w-[50vw] h-[90vh] items-center justify-center gap-[30px] rounded-xl'>
            <div className='flex flex-col gap-[13px] items-start text-start w-[46vw]'>
                <h1 className='text-3xl font-bold '>Login</h1>
                <p className='text-xl'>Enter your details to login to your account</p>
            </div>
            <form className='flex flex-col gap-[40px]'>
               <div>
                    <p className='font-semibold text-xl'>Email</p>
                    <input className='h-[8vh] px-[20px] border-2 border-black w-[46vw] shadow-red-400'  type="text" placeholder='Email' />
               </div>
                <div>
                    <p className='font-semibold text-xl'>Password</p>
                    <input className='h-[8vh] px-[20px] border-2 border-black w-[46vw]' type="text" placeholder='Password' />
                    <p className='text-blue-900 text-xl'>Forgot Password?</p>
                </div>
                <div>
                    <button className='bg-black text-white w-[46vw] h-[8vh]'>Login</button>
                    <p className='text-xl'>Don’t have an account? <span className='text-blue-800'>Sign Up</span></p>
                </div>

            </form>
        </div>
      
    </div>
  )
}

export default Hackertoon
