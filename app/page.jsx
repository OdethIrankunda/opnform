import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import MoreFeatures from '@/components/more-features'
import Openai from '@/components/openai'
import Services from '@/components/services'
import React from 'react'

export default function OpnmForm() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <Openai/>
      <MoreFeatures/>
      <Contact/>
      <Footer/>
    </div>
  )
}
