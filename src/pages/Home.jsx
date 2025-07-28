import React from 'react'
import HeroSection from '../components/HeroSection'
import HeroSection2 from '../components/HeroSection2'
import HeroSection3 from '../components/HeroSection3'
import HeroSection4 from '../components/HeroSection4'
import HeroSection5 from '../components/HeroSection5.jsx'

function Home() {
  return (
    // Main div ko flex container banaya gaya hai aur children ko column mein arrange kiya gaya hai.
    // 'space-y-0' direct children (HeroSection components) ke beech ke vertical space (margins) ko hata dega.
    // 'overflow-x-hidden' kisi bhi horizontal overflow ko rokne ke liye hai, jo responsive layouts mein helpful hai.
    // 'min-h-screen' ensure karta hai ki content area kam se kam viewport jitna bada ho.
    <div className="flex flex-col min-h-screen overflow-x-hidden space-y-0">
      <HeroSection/>
      <HeroSection2/>
      <HeroSection3/>
      <HeroSection4/>
      <HeroSection5/>
    </div>
  )
}

export default Home