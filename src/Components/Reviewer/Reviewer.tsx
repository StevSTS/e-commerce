import Image from 'next/image'
import React from 'react'
import user from '../../app/Images/user-icon2.png'
import Stars from '../StarsReviws/Stars'

type Iprop = {
    name?: string,
    stars?: number,
    comment?: string,
    date?: string,
}

const Reviewer = ({name, stars, comment, date} : Iprop) => {
  return (
    <div className="reviwer mt-6 pb-5 border-b-[1px] ">
        <div className='flex items-start gap-3'>
            <div className="w-[45px] h-[45px] ">
                <Image className="w-full h-full rounded-full object-contain " src={user} alt="user"></Image>
            </div>
            <div>
                <p className="text-[20px] font-[600] ">{name}</p>
                <div className="flex mt-1">
                    <Stars stars={stars} />
                </div>
            </div>
        </div>
        <p className='mt-2'>{comment}</p>
        <p className='text-[#00000091] text-[13px]'>Reviwed at {date}</p>
    </div>
  )
}

export default Reviewer