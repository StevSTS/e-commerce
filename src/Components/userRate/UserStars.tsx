import { AiFillStar } from "react-icons/ai"; 
import React, { useEffect, useRef } from 'react'

const UserStars = () => {

    
    
    const ra = useRef<any>(null)
    useEffect(() => {
        let stars = document.querySelectorAll('.ratings .span')
        stars.forEach((star : any) => {
            star.addEventListener('click' , () => {
                stars.forEach((star) => {
                    star.removeAttribute('checked')
                })
                let rating = star.dataset.rating;
                star.setAttribute('checked' , 'true')
                ra.current.innerHTML = rating + ' out of 5'
            })
        });
        
    },[])


  return (
    <div>
        <p className="text-center mb-2 " ref={ra}>0 out of 5</p>
        <div className='ratings flex items-center justify-center text-[30px] cursor-pointer flex-row-reverse'>
            <span data-rating="5" className="span py-1 px-2 cursor-pointer " ><AiFillStar /></span>
            <span data-rating="4" className="span py-1 px-2 cursor-pointer " ><AiFillStar /></span>
            <span data-rating="3" className="span py-1 px-2 cursor-pointer " ><AiFillStar /></span>
            <span data-rating="2" className="span py-1 px-2 cursor-pointer " ><AiFillStar /></span>
            <span data-rating="1" className="span py-1 px-2 cursor-pointer " ><AiFillStar /></span>
        </div>
    </div>
  )
}

export default UserStars