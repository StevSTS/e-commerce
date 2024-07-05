import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-[calc(100vh-97.45px)]'>
        <div className='animate-spin border-b-4 border-b-blue-400 w-[200px] h-[200px] rounded-full '></div>
    </div>
  )
}

export default Loading