import { AiFillStar } from "react-icons/ai"; 
import React, { useEffect, useRef } from 'react'

const UserStars = () => {

    
    
    const ra = useRef<HTMLParagraphElement>(null)
    useEffect(() => {
        let stars = document.querySelectorAll('.ratings .span')
        stars.forEach(star => {
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

            {/* <input name='rating' id='star5' type="radio" value={5} /> */}
            {/* <input name='rating' id='star4' type="radio" value={4} /> */}
            {/* <input name='rating' id='star3' type="radio" value={3} /> */}
            {/* <input name='rating' id='star2' type="radio" value={2} /> */}
            {/* <input name='rating' id='star1' type="radio" value={1} /> */}
            {/* <input name='rating' id='star2.5' type="radio" value={2.5} /><label htmlFor="star2.5" className='half'></label> */}
            {/* <input name='rating' id='star1.5' type="radio" value={1.5} /><label htmlFor="star1.5" className='half'></label> */}
            {/* <input name='rating' id='star4.5' type="radio" value={4.5} /><label htmlFor="star4.5" className='half'></label> */}
            {/* <input name='rating' id='star3.5' type="radio" value={3.5} /><label htmlFor="star3.5" className='half'></label> */}
            {/* <input name='rating' id='star0.5' type="radio" value={0.5} /><label htmlFor="star0.5" className='half'></label> */}


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