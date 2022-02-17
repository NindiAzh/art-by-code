import React from 'react'
import JudulProject from './JudulProject'
import Image from 'next/image'
import webdev from '../public/webdev.svg'
import appdev from '../public/appdev.svg'
import uiux from '../public/uiux.svg'
import machine from '../public/machine.svg'
import workflow from '../public/workflow.svg'
import brand from '../public/brand.svg'
import Button2 from './Button2'



const SolusiHome = () => {
  return (
    <>
      <section className='py-20'>
        <div className='container mx-auto px-10 2xl:px-10'>
          <svg className='mx-auto' width="40" height="5" viewBox="0 0 40 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="5" rx="2.5" fill="#1DC0AD"/>
          </svg>
          <JudulProject><p className='font-black'>Solusi Kami</p></JudulProject>
        </div>

      <div className='flex mx-14 2xl:mx-14 mt-20  flex-wrap'>
          <div className='flex justify-between mx-20 w-60'>
            <Image src={webdev} alt="webdev" />
          </div>
          <div className='mx-24 w-60'>
            <Image src={appdev} alt="appdev" />
          </div>
          <div className='mx-16 w-60'>
            <Image src={uiux} alt="uiux" />
          </div>
       </div>
       <div className='flex mx-14 2xl:mx-14 mt-20  flex-wrap'>
          <div className='flex justify-between mx-20 w-60'>
            <Image src={machine} alt="machine" />
          </div>
          <div className='mx-24 w-60'>
            <Image src={workflow} alt="workflow" />
          </div>
          <div className='mx-16 w-60'>
            <Image src={brand} alt="brand" />
          </div>

          <button className="bg-puerto-rico-500 text-white-50 text-sm mx-auto py-3 px-6 inline-flex items-center rounded mt-24">
              lihat detailnya dong
          </button>



       </div>
      </section>
    </>
  )
}

export default SolusiHome