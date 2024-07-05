import React from 'react'

const Parag = ({text} : {text: string}) => {
  return (
    <p className="relative before:absolute before:w-[12px] before:h-[12px] before:rounded-full before:left-[-20px] before:top-[7px] before:bg-gradient-to-r before:from-[#7367F0] before:to-[#7367f0b3] ">{text}</p>
  )
}

export default Parag