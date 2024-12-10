import React from 'react'

import Hero from './components/hero'
import Brands from './components/brands/brands'
import { NewArrivals } from './components/new-arrivals'
import { TopSelling } from './components/topSelling'
import DressStyle from './components/dressStyle'
import { Reviews } from './components/review'
import { Newsletter } from './components/newslater'
import { Footer } from './components/footer'
import { Header } from './components/header'
// import TabsComponent from './components/ui/tabs'
// import ProductCard from './components/productCard'

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <ProductCard  /> */}
      <Brands />
      <NewArrivals />
      <TopSelling />
      <DressStyle />.
      <Reviews />
      <Newsletter />
      <Footer />
      {/* <TabsComponent /> */}
    </div>
  )
}

export default page
