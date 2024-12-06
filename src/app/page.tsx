import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import { ctx as store } from '../../ctx'
import Gallery from '@/components/Gallery'
import Category from '@/components/Category'
import Product from '@/components/Product'
import Footer from '@/components/Footer'

export default function LandingPage() {
  return (
    <div>
      <Navbar store={store} />
      <Header />
      <HeroSection />
      <Gallery />
      <Category />
      <Product />
      <Footer />

    </div>
  )
}

