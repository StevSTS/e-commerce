import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { RxHome } from 'react-icons/rx'



const Buttons = ({icon , name , src} : {icon:any , name: string, src:string}) => {
    
    const router = useRouter();

  return (
    <Link href={src} className="butn text-black py-2 pe-2 rounded-md flex items-center mt-8 flex-row-reverse gap-2 mx-8 duration-500 hover:pe-5 ">
        <div className="text-[25px] ">
            {icon}
        </div>
        <p>{name}</p>
    </Link>
  )
}

export default Buttons