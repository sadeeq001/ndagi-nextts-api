import { DashboardPreview } from '@/components/front/dashboard-preview'
import GridFeatures from '@/components/front/grid-features'
import HeroSection from '@/components/front/hero-section'
import Partners from '@/components/front/partners'
import Pricing from '@/components/front/pricing'
import React from 'react'

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Partners />
      <DashboardPreview />
      <GridFeatures />
      <Pricing />
    </main>
  )
}
