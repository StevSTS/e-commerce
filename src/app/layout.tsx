"use client"

import { GiCrossMark } from "react-icons/gi"; 
import { AiOutlineMessage } from "react-icons/ai"; 
import { CgMenuLeftAlt } from "react-icons/cg"; 
import { CgMenuLeft } from "react-icons/cg"; 
import { AiFillShopping } from "react-icons/ai"; 
import { AiOutlineShop } from "react-icons/ai"; 
import { RxHome } from "react-icons/rx"; 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import inf from '../app/Images/infi.jpg';
import Image from "next/image";
import { useState } from "react";
import { RecoilRoot } from "recoil";


const inter = Inter({ subsets: ["latin"] });


// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };


const navLinks = [
  {title: 'Home' , path: '/' , icon: <RxHome /> },
  {title: 'Shop', path: '/products' , icon: <AiOutlineShop />},
  {title: 'Cart', path: '/' , icon: <AiFillShopping />},
  {title: 'Cntact Us', path: '/' , icon: <AiOutlineMessage />},
]






export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {

  const [menu , setMenu] = useState(false)
  return (
    <RecoilRoot>

    <html lang="en">
      <body>
            <div className="flex justify-between ">

            <div className="flex flex-col w-[calc(100vw-110px)] max-lg:w-[100vw]  ">
                <nav className="bg-white shadow-lg w-full">
                    <div className=" ">
                      <div className={`container max-sm:px-7 duration-300 px-5 ${menu ? 'xl:px-8' : '' }`} >
                        <ul className="flex items-center justify-between py-4">
                          <Link href={'/'} className="flex items-center justify-between gap-4 duration-500 active:scale-[.85] ">
                            <Image className="w-[90px] " src={inf} alt="" />
                            <strong className="textGrad ">įղƒ-Ɱąɾҟҽէ</strong>
                          </Link>
                          <div className="flex items-center justify-between gap-7 text-[17px]">
                            <li className="max-sm:hidden textGrad"><Link href={'/'}>Home</Link></li>
                            <li className="max-sm:hidden textGrad"><Link href={'/products'}>Products</Link></li>
                            <li><div onClick={() => {setMenu(!menu)}} className="cursor-pointer text-[18px] text-blue-400 ">{menu ? <CgMenuLeftAlt /> : <CgMenuLeft />}</div></li>
                          </div>
                        </ul>
                      </div>

                    </div>
                </nav>
                <div className="h-[calc(100vh-97.45px)] overflow-y-auto">
                  <div className={`container max-sm:px-7 duration-300 ${menu ? 'xl:px-8' : '' } `} >
                      {children}
                  </div>
                </div>
            </div>
              


          {/* <div className=" "> */}

              <div className={`menuu bg-[white] h-[100vh] duration-300 ${menu ? 'w-[280px] shadow-xl' : 'w-[110px] max-lg:hover:w-0 overflow-hidden shadow-md max-lg:w-0'} max-xl:absolute max-xl:right-0  `}>
                  <div onClick={() => { setMenu(false) }} className={`text-[20px] text-blue-400 xl:hidden absolute p-3 cursor-pointer z-50 ${menu ? 'block' : 'hidden' }`}><GiCrossMark /></div>
                    <div className="flex justify-center mt-5 mb-6 ">
                    <Image className={`logoMen ${menu ? 'ani w-[140px]' : 'w-[80px]'} duration-500`} src={inf} alt="" />
                  </div>
                  {
                    navLinks.map((link,index) => {
                      return (
                        <Link onClick={() => { setTimeout(() => {setMenu(false)},60) }} key={index} href={link.path} className={`butn my-[13px] text-white py-2 pe-2 rounded-md flex items-center flex-row-reverse gap-[10px]  duration-500 ${menu ? 'hover:pe-5 mx-4' : 'mx-8'}  `}>
                          <div className="text-[28px] ">
                            {link.icon}
                          </div>
                          <p className={`parag duration-300 ${menu ? 'opacity-100 text-[16px]' : 'opacity-0 text-[9px]'} `} >{link.title}</p>
                        </Link>
                      )
                    })
                  }
              </div>
              
          {/* </div> */}
      </div>    






      </body>
    </html>
    </RecoilRoot>
  );
}
