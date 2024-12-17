import React from 'react'

import Hero from './components/hero'
import { NewArrivals } from './components/new-arrivals'
import { TopSelling } from './components/topSelling'
import DressStyle from './components/dressStyle'
import { Reviews } from './components/review'
import { Newsletter } from './components/newslater'
import BrandLogos from './components/BrandLogos'


// import ProductCard from './components/productCard'

const page = () => {
  return (
    <div>
     
      <Hero />
      {/* <ProductCard /> */}
      <BrandLogos/>
      <NewArrivals />
      <TopSelling />
      <DressStyle />.
      <Reviews />
      <Newsletter />
     
  
    </div>
  )
}

export default page
