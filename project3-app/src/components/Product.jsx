import React from 'react'
import ProductCard from '../layouts/ProductCard'

const Product = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
        <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>Our Products</h1>

        <div className='flex flex-col lg:flex-row gap-12 justify-center'>
            <ProductCard img={"https://th.bing.com/th/id/R.62a30bbbfcfc99c3e25502b6e92ef238?rik=Y84tLXw4feuRRw&pid=ImgRaw&r=0"} title="Nespresso"/>
            <ProductCard img={"https://thebarn.de/cdn/shop/articles/IMG_3391.jpg?v=1675164469"} title="AeroPress"/>
            <ProductCard img={"https://cdn.drweil.com/wp-content/uploads/2020/06/28120750/filtered-coffee-a-healthy-brew-QA-1178643994-copy.jpg"} title="Chemex"/>
        </div>
    </div>
  )
}

export default Product
