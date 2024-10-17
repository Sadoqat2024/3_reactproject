import React from 'react'
import MenuCard from '../layouts/MenuCard'

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
        <h1 className='font-semibold text-center text-4xl mt-24 mb-8'>Our Menu</h1>

        <div className='flex flex-wrap gap-5 pb-8 justify-center lg:px-32 px-5 bg-backgroundColor'>
            <MenuCard img={"https://th.bing.com/th/id/R.8ae5ee5772355bdc771fa115cce6bc5f?rik=BnQ0NIV6Ko3%2b9w&pid=ImgRaw&r=0"} title="Espresso"/>
            <MenuCard img={"https://th.bing.com/th/id/R.886588ac3800875a20cd58d415c490ae?rik=BIPaNOozi61N%2bQ&pid=ImgRaw&r=0"} title="Cappuccino"/>
            <MenuCard img={"https://img.freepik.com/free-photo/cappuccino-coffee-glass-with-spoon-wooden-table_23-2147908372.jpg?t=st=1727852574~exp=1727856174~hmac=5120fbd351c54f4bac438a831ea1a8b47993b7f76bb5f65f164ebead00ff8417&w=740"} title="Latte"/>
            <MenuCard img={"https://th.bing.com/th/id/OIP.BSP4bZJ0kWXLzrBgU_L0IQHaE8?rs=1&pid=ImgDetMain"} title="Americano"/>
            <MenuCard img={"https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-a-macchiato-008.jpg"} title="Macchiato"/>
            <MenuCard img={"https://th.bing.com/th/id/R.eeeb00c6ead818189e83dd15c3dc699a?rik=kVacMAeSs2akzw&pid=ImgRaw&r=0"} title="Doppio"/>
        </div>
    </div>
  )
}

export default Menu
