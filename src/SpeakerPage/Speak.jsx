import React from 'react'

const Speak = () => {
  return (
    <div className='px-[80px] '>
        <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='text-4xl text-red-400'>Web3 Lagos Conference 3.0: Speaker Form</h1>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-3xl text-blue-600'>Register Now!</h2>
                <p>Be a part of the Event</p>
            </div>
            <h3 className='text-2xl'>Fill in the information carefully</h3>
        </div>
        <form>
            <h2 className='text-3xl font-semibold py-[30px]'>Speaker's Details</h2>
            <div className='flex flex-col'>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>First Name <span className='text-red-400'>*</span></p>
                            <input type="text" className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]' placeholder='Enter your first name' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Email Address</p>
                            <input type="text" className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'placeholder='Enter your email' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Company's Name as Applicable. If not applicable, place N/A in the box.</p>
                            <input type="text" className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'placeholder='Enter your company name' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Your X Handle</p>
                            <input type="text" className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'placeholder='Your X Handle' />
                        </div>
                        <div>
                            <p className='font-bold'>Category <span className='text-red-400'>*</span></p>
                            <select className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'>
                                <option value="">please select an option</option>
                                <option value="">I am new to blockchain/Web3</option>
                                <option value="">Developer</option>
                                <option value="">Desighner</option>
                                <option value="">Content Creator</option>
                                <option value="">Community Manager</option>
                                <option value="">Investor</option>
                                <option value="">Researchers</option>
                                <option value="">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Other Names <span className='text-red-400'>*</span></p>
                            <input type="text" className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'placeholder='Other names' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Phone number</p>
                            <input type="text" className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'placeholder='Enter your phone number' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Link to Your Website or Link to Your (Portfolio/Resume/GitHub)</p>
                            <input type="text" className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'placeholder='' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Lecture Title <span className='text-red-400'>*</span></p>
                            <input type="text" className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'placeholder='The tittle of your lecture' />
                        </div>
                        <div>
                            <p className='font-bold'>Session Type <span className='text-red-400'>*</span></p>
                            <select className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'>
                                <option value="">Select your option type</option>
                                <option value="">Talk (25 + 5QA) (30 minutes)</option>
                                <option value="">Workshop 1hr</option>
                                <option value="">Workshop (30 munites)</option>
                                <option value="">Workshop 2hrs</option>
                                <option value="">Lightening talk(10 minutes)</option>
                                <option value="">Panel</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 py-[20px]'>
                    <p className='font-bold'>Write a compelling session abstract that showcases your content (if applicable else N/A).</p>
                    <textarea className='w-[100%] h-[30vh] border-2 rounded-lg px-[15px]'>Brief description of your session</textarea>
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <p className='font-bold'>What Best Describes Your Role In Web3 <span className='text-red-400'>*</span></p>
                            <select className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'>
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
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Location <span className='text-red-400'>*</span></p>
                            <input className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]' type="text"placeholder='Enter your location' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Pitch Story</p>
                            <textarea className='w-[43vw] h-[11vh] border-2 rounded-lg px-[15px]'  placeholder='Share your story with us'></textarea>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Gender</p>
                            <select className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'>
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Are You Available To Speak On Any Of The Three Days <span className='text-red-400'>*</span></p>
                            <select className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Your Telegram ID <span className='text-red-400'>*</span></p>
                            <input className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]' type="text"placeholder='Enter your telegram id.' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Spoken at Web3 Before <span className='text-red-400'>*</span></p>
                            <select className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]'>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Profile Pic Url <span className='text-red-400'>*</span></p>
                            <input className='w-[43vw] h-[8vh] border-2 rounded-lg px-[15px]' type="text"placeholder='Enter the Url of your profile picture' />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='flex justify-between py-[30px]'>
                <button>Clear form</button>
                <button className='bg-blue-700 px-[20px] py-[6px] rounded-lg text-white '>sumit</button>
            </div>
        </form>
      
    </div>
  )
}

export default Speak
