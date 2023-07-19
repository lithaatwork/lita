import React from 'react'
import Container from './Container'
import { HiChevronRight } from 'react-icons/hi2'
import Image from 'next/image'

const HeroSetion = () => {
  return (
  <Container>
    <section className=" rounded-md my-8">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-5">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">Effective Immigration Services</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">From temporay residence permits to permanent residency.We are at your service</p>
            <button  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-900 ">
                Talk to a Consultant
                <HiChevronRight/>
            </button>
            
        </div>
        <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
            <Image src='/lithapro.jpg' width={1280} height={558} alt='pro-image' className='rounded-md' />
        </div>                
    </div>
</section>
  </Container>
  )
}

export default HeroSetion