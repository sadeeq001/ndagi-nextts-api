import Footer from '@/components/front/footer'
import Header from '@/components/front/header'
import React, { ReactNode } from 'react'

export default function FrontLayout({ children }:{ children:ReactNode }) {
  return (
    <div>
      <Header />
      { children }
      <Footer />
    </div>
  )
}
