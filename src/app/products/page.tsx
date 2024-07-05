'use client'


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Box from '../Box/Box'
import Loading from '@/Components/Loading/Loading'
import Link from 'next/link'
import { AiOutlineRight } from 'react-icons/ai'

interface Prod {
  id?: number,
  title?: string,
  description?: string,
  price?: number,
  reviews?: number,
  thumbnail?: any,
  rating?: number
}

const Page = () => {
  const [productsData, setProductsData] = useState<Prod[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res: any) => setProductsData(res.data.products))
      .catch((err: any) => console.log(err))
      setIsLoading(false)
    }, [])
    console.log(productsData)
    
    const [categories , setCategories] = useState(false)

  return (
    

    <>


    {
      isLoading ? (
      <Loading />
      ) : (
      <main className='flex justify-between gap-8 mx-4 allCont'>
        <aside className='bg-[#e1dbdbcc] sticky top-10 mt-10 rounded-lg max-xl:hidden w-[22%] h-[calc(100vh-170px)] p-3'>
          <div>
            <Link onClick={() => {setCategories(!categories)}} className="flex items-center gap-1 hover:gap-2 duration-300" href={''}>
              Electronics 
              <div className={`mt-[5px] duration-300 ${categories ? 'rotate-90' : 'rotate-0'} `}>
                <AiOutlineRight />
              </div>
            </Link>
            <div className={`ms-7 flex flex-col mt-2 h-0 overflow-hidden ${categories ? 'h-[100px] opacity-100 duration-300' : 'h-0 overflow-hidden opacity-0 duration-300' } `} >
                <Link href={''}>Phones</Link>
                <Link href={''}>Phones</Link>
                <Link href={''}>Phones</Link>
                <Link href={''}>Phones</Link>
            </div>
          </div>
        </aside>

        <div className='sm:flex sm:flex-wrap sm:gap-3 pt-10 flex-1 max-sm:grid max-sm:grid-cols-2 max-smm:grid-cols-1 '>
          {
            productsData.map((product, index) => {
              return (
                <Box key={index} link={`/products/${product?.id}`} img={product?.thumbnail} title={`${product?.title}`} desc={`${product?.description}`} price={Number(product?.price)} reviews={product?.reviews} ratingsT={Number(product?.rating)} />
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

export default Page
