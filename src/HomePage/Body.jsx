import React from 'react'

const Body = () => {
  return (
    <div className='flex px-[70px] my-[50px] gap-[30px]'>
        <div className='flex flex-col border-2 px  rounded-2xl gap-[30px] w-[95vw] h-[70vh] shadow-xl pt-[30px]'>
           <div className='flex flex-col gap-[30px] px-[30px]'>
                <div className='flex flex-col gap-[30px] mb-[100px]'>
                    <h1 className='flex flex-col text-4xl gap-[30px]'>Our Goal</h1>
                    <p>At Web3bridge, we believe education is critical in the drive for adoption of blockchain technology. And we have set up Web3 Lagos conference to bring education across varying topics/subjects and comprehension of blockchain technology.</p>
                </div>
                    <p className='border-t-2'>Learn More</p>
           </div>
        </div>
        <div className='flex flex-col border-2 px rounded-2xl gap-[30px] w-[95%] shadow-xl pt-[30px]'>
            <div className='flex flex-col gap-[30px] px-[30px]'>
               <div className='flex flex-col gap-[30px] mb-[35px]'>
                    <h1 className='flex flex-col text-4xl gap-[30px]'>Event Overview</h1>
                    <p>Web3 Lagos Conference is a 3-day physical and virtual event comprising of hackathon, workshops, networking, career fair, panel session, talks, etc. The event focuses on onboarding and supporting the growth of individual new to the concept of blockchain and decentralisation, helping technical and non-technical blockchain native persons realise the endless possibilities and opportunities of the Blockchain & Ethereum ecosystem.</p>
               </div>
                <p className='border-t-2'>Visit X(Twitter) to Learn More</p>
            </div>
        </div>
      
    </div>
  )
}

export default Body
