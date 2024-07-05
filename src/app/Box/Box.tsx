"use client"

import { BsCart4 } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi"; 
import { CgShoppingCart } from "react-icons/cg"; 
import { CgDollar } from "react-icons/cg"; 
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import expand from '../Images/expand.png'
import Image from 'next/image'
import Stars from "@/Components/StarsReviws/Stars";

type myBox = {
    title: string,
    desc: string,
    price: number,
    reviews: any,
    img: any,
    ratingsT: number,
    link: any
}

const Box = ({title, desc, price, reviews, img, ratingsT , link} : myBox ) => {

    const[view, setView] = useState(false)

    let count = 0
    reviews?.map((review : any) => {
        count += review.rating
        return count
    })

    // console.log("Re " , reviews , ' Stars ' , ratingsT )
    
    // useEffect(() => {
    //     // editRate = Math.round(Number(ratingsT))
    //     // rateProd = editRate
    //     console.log(rateProd)
    //     let stars = document.querySelectorAll('.ratings span')
    //     stars.forEach(star => {
    //         // star.addEventListener('click' , () => {
    //             // star.setAttribute('cheked' , 'true')
    //         // })
    //         // star.setAttribute('cheked' , 'false')
    //         let rating = star.dataset.rating;
            
    //         if(Math.round(rates) == Number(rating)) {
    //             star.setAttribute('cheked' , 'true')
    //         }else{
    //             star.setAttribute('cheked' , 'false')
                
    //         }
    //     });
        
    // },[rates])

    





  return (
    <>
    <div className="w-[32.1%] allCont max-lg:w-[32.2%] max-md:w-[49%] max-sm:w-full max-sm:px-2 max-smm:px-0 mb-7">
    {/* w-[32.1%] max-xl:w-[31.90%] */}
        <div className='box flex flex-col gap-2 '>

            <div className='boxImg relative rounded-tr-[12px] rounded-bl-[12px] bg-[#b1c3faa2] overflow-hidden'>
                <Link href={link}>
                    <Image width={280} height={200} className='w-full h-full object-cover' loading="lazy" src={img} alt='' />
                </Link>
                <div className="View absolute opacity-0 top-0 p-2 duration-300">
                    <button onClick={() => { setView(!view) }} className="duration-[.1s] rounded-md py-1 px-2 active:scale-90 w-[36px] rotate-12"><Image src={expand} alt=""/></button>
                </div>
                <div className="butn mt-[16px] cursor-pointer w-fit hover:translate-y-[-2px] cartIcon rounded-full absolute bottom-0 right-0 duration-300 text-[20px] p-2 m-2 text-white opacity-0 ">
                    <CgShoppingCart />
                </div>
            </div>
            <div className=''>
                <div className="flex items-center justify-between ">
                    <span className='text-[28px] flex items-center text-blue-400 textGrad font-[700] '>
                        <CgDollar />
                        {price}
                    </span>
                    <button className="butn text-white py-[5px] rounded-tr-xl rounded-bl-xl px-8 duration-300 hover:translate-y-[-3px] block w-fit">Buy</button>
                </div>
                <p className="mt-2 ">{title}</p>
            </div>
            
        </div>
    </div>
    <div className={`absolute z-[900] bg-white w-[65vw] max-md:h-[calc(100vh-100px)] max-lg:w-[85vw] left-1/2 -translate-x-1/2 top-1/2 h-[500px] duration-300 shadow-xl ${view ? 'translate-y-[-50%] opacity-100 visible' : 'opacity-0 translate-y-[-47%] invisible'} `}>
        <div onClick={() => { setView(false) }} className="w-fit text-blue-500 p-3 text-[22px] z-50 cursor-pointer">
            <GiCrossMark />
        </div>
        <div className="p-5 md:flex md:gap-8 ">
            <div className="relative w-[45%] max-md:w-full max-md:h-[250px] max-sm:h-[200px] h-[415px] bg-[#b1c3faa2] rounded-lg ">
                <Image width={280} height={200} className='w-full h-full object-contain ' loading="lazy" src={img} alt='' />
                <div className={`ratings p-3 duration-300 overflow-hidden absolute flex gap-[3px] flex-row-reverse justify-end text-[23px] mt-5 ${view ? 'bottom-0' : 'bottom-[-40px]'} `}>
                <div className="flex items-center gap-[3px] ">
                    <Stars stars={ratingsT} />
                    <p className="text-white text-[14px] ms-2 hover:underline">Reviews {reviews.length}</p>
                </div>
                </div>
            </div>
            <div className="w-[50%] max-sm:flex-col max-md:w-full max-md:justify-between max-md:flex ">
                <div className="max-md:w-[60%] max-sm:w-[80%]  ">
                    <h3 className="text-[25px] font-[600] mb-3 max-md:mt-3 max-sm:text-[22px] ">{title}</h3>
                    <p className="max-sm:text-[15px] ">{desc}</p>
                </div>
                <div>
                    <div className="flex items-center gap-10 ">
                        <div className='text-[40px] mt-2 max-sm:text-[35px] flex items-center text-blue-400 textGrad font-[600] '>
                            <CgDollar />
                            {price}
                        </div>
                        <div className="butn max-sm:hidden mt-[16px] cursor-pointer w-fit hover:translate-y-[-2px] cartIcon rounded-full duration-300 text-[20px] p-2 text-white">
                            <BsCart4 />
                        </div>
                    </div>
                    <Link href={''} className="butn mt-4 max-sm:hidden text-white py-[5px] rounded-tr-xl rounded-bl-xl px-8 duration-300 hover:translate-y-[-3px] block w-fit">Visit</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Box