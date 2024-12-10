import React from 'react'

import Hero from './components/hero'
import { NewArrivals } from './components/new-arrivals'
import { TopSelling } from './components/topSelling'
import DressStyle from './components/dressStyle'
import { Reviews } from './components/review'
import { Newsletter } from './components/newslater'
import { Footer } from './components/footer'
import { Header } from './components/header'
// import ProductCard from './components/productCard'

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <ProductCard  /> */}
      
      <NewArrivals />
      <TopSelling />
      <DressStyle />.
      <Reviews />
      <Newsletter />
      <Footer />
      z
    </div>
  )
}

export default page
