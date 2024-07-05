"use client"

import Stars from '@/Components/StarsReviws/Stars'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import test from '../../Images/1.png'
import test2 from '../../Images/2.png'
import Image from 'next/image'
import { useParams } from 'next/navigation'


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

  const [singleDataProduct, setSingleDataProduct] =  useState<Product>();
  
  
  const params = useParams()
  const [mainImg, setMainImgs] = useState<Product>()
  
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.single}`)
    .then(res => {
      setSingleDataProduct(res.data)
      setMainImgs(res.data.thumbnail)
    })
    .catch(err => console.log(err))
  },[])
  console.log(mainImg)


  // let count = 0
  // singleProduct?.reviews.map((review : any) => {
  //       count += review.rating
  //       return count
  //   })

    
    // let rev = count / singleProduct?.reviews?.length
    // console.log('count: ' ,count)
    // console.log('reviews: ' , singleProduct?.reviews?.length)
    // console.log('reviews: ' , rev.toFixed(1) )
    // console.log('reviews: ' , Math.round(rev))


    


  return (
    <>
    <main className='px-5 flex gap-14 justify-between items-start'>
      <div className='w-[45%] sticky top-14 mt-14 flex gap-3'>
        <div className='AotherImgs w-[22%] xl:w-[18%] h-full flex flex-col gap-2 '>
        {
          singleDataProduct?.images.map((img : any) => {
            return (
                <Image onClick={() => setMainImgs(img) } className='w-full h-full object-cover rounded-xl border-2 border-green-40 cursor-pointer' src={img} width={450} height={450} alt=''></Image>
              )
            })
          }
          </div>
        <div className='h-auto w-full'>
            <Image src={mainImg} className='w-full h-full ' width={450} height={450} alt='' />
        </div>
      </div>

      <div className='flex flex-col flex-1 mt-14'>
        <h4 className='text-[38px] font-[600] '>{singleDataProduct?.title}</h4>
        <p className='mt-3 mb-1'>{singleDataProduct?.description}</p>
        {
          singleDataProduct?.brand ? (
            <span className='text-[#007185] text-[14px]'>Brand: {singleDataProduct?.brand}</span>
          ) : ''
        }
      </div>
      
    </main>
    </>

  )
}

export default page