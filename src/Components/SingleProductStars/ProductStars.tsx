import { AiFillCaretDown } from "react-icons/ai"; 
import { FaStar } from "react-icons/fa"; 
import { FaStarHalfAlt } from "react-icons/fa"; 
import { AiOutlineStar } from "react-icons/ai"; 
import React, { CSSProperties } from 'react'

type IProp = {
    stars: any,
    styles?: CSSProperties;
}

const ProductStars = ({ stars, styles } : IProp) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <span key={index} style={styles} className="text-[18px] text-[#ffff00e7] me-[2px] ">
                {stars >= index + 1 ? (
                    <FaStar />
                ) : stars >= number ? (
                    <FaStarHalfAlt />
                ) : (
                    <AiOutlineStar />
                )}
            </span>
        );
    });



  return (
    <>
        {ratingStar}
    </>
  )
}

export default ProductStars