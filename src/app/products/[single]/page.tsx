"use client"

import { AiFillCaretUp } from "react-icons/ai"; 
import Stars from '@/Components/StarsReviws/Stars'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import test from '../../Images/1.png'
import test2 from '../../Images/2.png'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Loading from '@/Components/Loading/Loading'
import ProductStars from '@/Components/SingleProductStars/ProductStars'
import { AiFillCaretDown } from 'react-icons/ai'
import PercentileRating from "@/Components/percentile rating/PercentileRating";
import { CgDollar } from "react-icons/cg";
import Reviewer from "@/Components/Reviewer/Reviewer";
import UserRate from "@/Components/userRate/UserRate";
import UserStars from "@/Components/userRate/UserStars";
import { useRecoilState } from "recoil";
import CommentAtom from "@/app/atoms/CommentAtom";


interface Product {
  id: number;
  title: string;
  brand: string;
  description: string;
  price: number;
  rating: number;
  reviews?: any,
  thumbnail: any,
  images: any,
  // reviews: any[];
  // reviews: { rating: number }[];
  // Add other product properties if needed
}

const page = () => {

  const [singleProduct, setSingleProduct] =  useState<Product>();
  const [isLoading, setIsLoading] = useState(true)
  
  const params = useParams()
  const [mainImgs, setMainImgs] = useState<string>('')
  
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.single}`)
    .then(res => {



      // const storedComments = JSON.parse(localStorage.getItem('newComm') || '[]');

      // // If there are stored comments, use them. Otherwise, use comments from the response
      // const productWithComments = {
      //   ...res.data,
      //   reviews: storedComments.length > 0 ? storedComments : res.data.reviews,
      // };




      setSingleProduct(res.data)
      setMainImgs(res.data.thumbnail)
      setIsLoading(false)
      
    })
    .catch(err => console.log(err))
  },[])

  let count = 0

  let star5 = 0
  let star4 = 0
  let star3 = 0
  let star2 = 0
  let star1 = 0
  singleProduct?.reviews.map((review : any) => {
      review.rating == 5 ? star5++ : review.rating == 4 ? star4++ : review.rating == 3 ? star3++ : review.rating == 2 ? star2++ : star1++
        count += review.rating
        return count
    })

    // console.log('1 Star' ,star1)
    // console.log('2 Star' ,star2)
    // console.log('3 Star' ,star3)
    // console.log('4 Star' ,star4)
    // console.log('5 Star' ,star5)
    
    let rev = count / singleProduct?.reviews?.length

    // console.log(singleProduct)
    
    let st5 = Math.round((star5 / singleProduct?.reviews?.length) * 100 )
    let st4 = Math.round((star4 / singleProduct?.reviews?.length) * 100 )
    let st3 = Math.round((star3 / singleProduct?.reviews?.length) * 100 )
    let st2 = Math.round((star2 / singleProduct?.reviews?.length) * 100 )
    let st1 = Math.round((star1 / singleProduct?.reviews?.length) * 100 )

    // console.log(singleProduct)

    const [comm, setComm] = useState(false)

    const nameInp = useRef<HTMLInputElement>(null)
    const commInp = useRef<HTMLInputElement>(null)

    const [commAtom, setCommAtom] = useRecoilState(CommentAtom);


    function getVal() {
      const newComment = {
        rating: 3, // يمكنك تغيير هذا إلى القيمة المطلوبة
        comment: commInp.current?.value,
        date: new Date().toISOString(), // إضافة التاريخ الحالي
        reviewerName: nameInp.current?.value,
      };

      const newComm = [newComment, ...singleProduct?.reviews];

      // setSingleProduct(prev => ({ ...prev, reviews: newComm }));
      // setCommAtom(newComm);
      // localStorage.setItem('newComm', JSON.stringify(newComm));
    }
    
    // console.log( 'newComm ', commAtom)
    // console.log( 'singleProduct ', singleProduct)

  return (
    <>
    {
      isLoading ? (
        <Loading />
      ) : (
    <main className='allCont px-5 h-[200vh]'>
      <div className="flex gap-14 justify-between items-start">

        <div className='w-[45%] sticky top-14 mt-14 flex gap-3'>
          <div className='AotherImgs w-[22%] xl:w-[18%] h-[70px] flex flex-col gap-2 '>
          {
            singleProduct?.images.map((img : any, index : number) => {
              return (
                  <Image priority={false} loading='lazy' key={index} onClick={() => setMainImgs(img) } className='w-full h-full object-contain rounded-xl border-2 border-green-40 cursor-pointer' src={img} width={450} height={450} alt=''></Image>
                )
              })
            }
            </div>
          <div className='h-auto w-full'>
              <Image priority={false} loading='lazy' src={mainImgs} className='w-full h-full object-contain max-h-[462px] ' width={462} height={462} alt='' />
          </div>
        </div>

        <div className='flex flex-col flex-1 mt-14 bg-blue-40 h-[100vh]'>
          <h4 className='textGrad text-[38px] font-[600]'>{singleProduct?.title}</h4>
          <p className='mt-3 mb-1'>{singleProduct?.description}</p>
          {
            singleProduct?.brand ? (
              <span className='text-[#7bbaf9] text-[14px]'>Brand: {singleProduct?.brand}</span>
            ) : ''
          }
          <div className="flex items-center gap-2 mt-1">
            <div className='allStars relative w-fit mr-2 '>
              <div className="flex items-center cursor-pointer">
                <p className='mr-2'>{rev.toFixed(1)}</p>
                <ProductStars stars={rev} />
                <div className='text-[#888c8c] ' >
                  <AiFillCaretDown />
                </div>  
              </div>

              <div className='StarsInfo opacity-0 invisible duration-300 p-4 absolute arro border-[#888c8c4e] shadow-xl top-[calc(100%+8px)] left-1/2 -translate-x-1/2 border-[1px]  rounded-lg bg-[white] w-[332px] h-[325px]'>
                  <div className="text-[#888c8c4e] absolute bottom-[calc(100%-5px)] text-[20px] left-1/2 -translate-x-1/2 "><AiFillCaretUp /></div>
                  <div className="flex items-center ">
                    <ProductStars stars={rev} />
                    <p className='ml-[6px] text-[17px] font-[600]'>{rev.toFixed(1)} out of 5</p>
                  </div>
                  <p className="mt-2 mb-4 ">{singleProduct?.reviews?.length} global ratings</p>
                  <PercentileRating star="5" percent={st5} styles={{width: `${st5}%`}} />
                  <PercentileRating star="4" percent={st4} styles={{width: `${st4}%`}} />
                  <PercentileRating star="3" percent={st3} styles={{width: `${st3}%`}} />
                  <PercentileRating star="2" percent={st2} styles={{width: `${st2}%`}} />
                  <PercentileRating star="1" percent={st1} styles={{width: `${st1}%`}} />
              </div>
            </div>
            |
            <div>
              <a href="#revw" className="hover:underline "> {singleProduct?.reviews?.length} ratings</a>
            </div>
          </div>

          <div className='text-[40px] mt-2 max-sm:text-[35px] flex items-center text-blue-400 textGrad font-[600] '>
              <CgDollar />
              {singleProduct?.price}
          </div>
        </div>
      </div>
      

      <div id="revw" className="Reviewers bg-red-40 p-3">
          


          <div className='my-5 mb-9 '>

        <button onClick={() => setComm(true)} className='bg-green-500 duration-300 text-white py-[6px] hover:bg-green-600 px-5 rounded-xl '>Add Comment</button>
        <div className={`duration-300 ${comm ? ' opacity-100 visible' : 'opacity-0 invisible'} `}>
            <div onClick={() => setComm(false)} className='absolute bg-[#0000009b] opacity-20 w-[100vw] top-0 left-0 z-[800] h-[100vh] '></div>
            <div className={`duration-300 ${comm ? 'translate-y-[-50%]' : 'translate-y-[-47%]'} p-3 absolute z-[900] bg-white w-[310px] h-[340px] left-1/2 -translate-x-1/2 top-1/2 duration-300 shadow-xl `}>
                <UserStars />
                <form onSubmit={(e) => { 
                  e.preventDefault()
                  getVal()
                }} action="" className='mt-6 '>
                    <label htmlFor="name" className='mb-1 block text-[#000000aa] '>Your Name</label>
                    <input ref={nameInp} required id='name' className='shadow-lg h-[35px] px-3 rounded-lg outline-none bg-[#f1f1f1] w-full  ' type="text"  />
                    <label htmlFor="comm" className='mt-3 mb-1 block text-[#000000aa] '>Comment</label>
                    <input ref={commInp} required id='comm' className='shadow-lg h-[35px] px-3 rounded-lg outline-none bg-[#f1f1f1] w-full  ' type="text"  />
                    <div className='mx-auto w-fit'>
                        <button className='mt-11 bg-green-500 duration-300 text-white py-[6px] hover:bg-green-600 px-8 rounded-xl '>Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


          {
            singleProduct?.reviews.map((reviewer : any, index : number) => {
              return(
                <Reviewer key={index} name={reviewer.reviewerName} comment={reviewer.comment} date={reviewer.date} stars={reviewer.rating} />
              )
            })
          }

      </div>
    </main>

      )
    }
    </>

  )
}

export default page


