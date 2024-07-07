import React, { CSSProperties } from 'react'

type Iprop = {
    star: string,
    percent: number,
    styles: CSSProperties
}

const PercentileRating = ({star, percent, styles} : Iprop) => {
  return (
    <div className='flex items-center gap-3 mb-3 '>
        <span className='text-[#007185]'>{star} star</span>
        <div className='relative bg-[#e0e0e0] rounded-xl w-[196px] h-[28px] '>
            <div style={styles} className={`absolute bg-[#ffff00e7] h-full rounded-xl `} ></div>
        </div>
        <p className='text-[#007185]'>{percent}%</p>
    </div>
  )
}

export default PercentileRating