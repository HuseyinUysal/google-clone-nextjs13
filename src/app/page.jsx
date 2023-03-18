import React from 'react'
import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import myImg from './baharlogo.jpg'

export default function Home() {
  return (
    <>
    <HomeHeader/>


    <div className="flex flex-col items-center mt-24">
      <Image
      src={myImg}
      width="300"
      height="100"
      alt="bahar logo"
      />
      <HomeSearch/>

    </div>
    </>
  )
}
