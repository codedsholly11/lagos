import React from 'react'

const Speak = () => {
  return (
    <div className='px-[80px] '>
        <div>
            <h1 className='text-4xl'>Web3 Lagos Conference 3.0: Speaker Form</h1>
            <div>
                <h2 className='text-3xl'>Register Now!</h2>
                <p>Be a part of the Event</p>
            </div>
            <h3 className='text-2xl'>Fill in the information carefully</h3>
        </div>
        <form>
            <h2 className='text-3xl font-semibold'>Speaker's Details</h2>
            <div className='flex flex-col'>
                <div className='flex'>
                    <div>
                        <div className=''>
                            <p>First Name <span>*</span></p>
                            <input type="text" className='w-[40vw] h-[8vh] border-2 rounded-lg px-[15ps]' placeholder='Enter your first name' />
                        </div>
                        <div>
                            <p>Email Address</p>
                            <input type="text"placeholder='Enter your email' />
                        </div>
                        <div>
                            <p>Company's Name as Applicable. If not applicable, place N/A in the box.</p>
                            <input type="text"placeholder='Enter your company name' />
                        </div>
                        <div>
                            <p>Your X Handle</p>
                            <input type="text"placeholder='Your X Handle' />
                        </div>
                        <div>
                            <p>Category <span>*</span></p>
                            <select name="" id="">
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
                    <div>
                        <div>
                            <p className='w-[40vw] h-[8vh] border-2 rounded-lg px-[15ps]'>Other Names <span>*</span></p><input type="text"placeholder='Other Names' />
                        </div>
                        <div>
                            <p>Phone number</p>
                            <input type="text"placeholder='Enter your phone number' />
                        </div>
                        <div>
                            <p>Link to Your Website or Link to Your (Portfolio/Resume/GitHub)</p>
                            <input type="text"placeholder='' />
                        </div>
                        <div>
                            <p>Lecture Title <span>*</span></p>
                            <input type="text"placeholder='The tittle of your lecture' />
                        </div>
                        <div>
                            <p>Session type <span>*</span></p>
                            <select name="" id="">
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
                <div className='bg-red-400'>
                    <p>Write a compelling session abstract that showcases your content (if applicable else N/A).</p>
                    <textarea name="" id="">Brief description of your session</textarea>
                </div>
                <div className='flex'>
                    <div>
                        <div>
                            <p>What Best Describes Your Role In Web3 <span>*</span></p>
                            <select name="" id="">
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
                        <div>
                            <p>Location <span>*</span></p>
                            <input type="text"placeholder='Enter your location' />
                        </div>
                        <div>
                            <p>Pitch Story</p>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div>
                            <p>Gender</p>
                            <select name="" id="">
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Are You Available To Speak On Any Of The Three Days <span>*</span></p>
                            <select name="" id="">
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                        <div>
                            <p>Your Telegram ID <span>*</span></p>
                            <input type="text"placeholder='Enter your telegram id.' />
                        </div>
                        <div>
                            <p>Spoken at Web3 Before <span>*</span></p>
                            <select name="" id="">
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                        <div>
                            <p>Profile Pic Url <span>*</span></p>
                            <input type="text"placeholder='Enter the Url of your profile picture' />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <button></button>
                <button>sumit</button>
            </div>
        </form>
      
    </div>
  )
}

export default Speak
