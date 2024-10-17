import React from 'react'
import ReviewCard from '../layouts/ReviewCard'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
      <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24'>Customer's Reviews</h1>

      <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8 '>
        <ReviewCard img={"https://randomuser.me/api/portraits/women/47.jpg"} title="Alivia Ava"/>
        <ReviewCard img={"https://randomuser.me/api/portraits/men/81.jpg"} title="Bety Aratou"/>
        <ReviewCard img={"https://randomuser.me/api/portraits/women/67.jpg"} title="Safia Zoe"/>
      </div>
    </div>
  )
}

export default Review
