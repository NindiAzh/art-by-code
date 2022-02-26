import React from 'react'
import JudulProject from './JudulProject'
import Image from 'next/image'
import Satu from '../public/ctcrop.svg'
import Dua from '../public/trans.svg'
import Tiga from '../public/kyoob.svg'
import Empat from '../public/mufit.svg'
import Lima from '../public/vbd.svg'
import Enam from '../public/sm.svg'
import Tujuh from '../public/smaislam.svg'
import Delapan from '../public/peradi.svg'
import Sembilan from '../public/menbiska.svg'
import Sepuluh from '../public/medco.svg'
import Sebelas from '../public/bank.svg'
import DuaBelas from '../public/docotel.svg'
import Footer from './Footer'


const KlienHome = () => {
  return (
    <>
        <section className='py-52'>
        <div className='container mx-auto px-10 2xl:px-10'>
          <svg className='mx-auto' width="40" height="5" viewBox="0 0 40 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="5" rx="2.5" fill="#1DC0AD"/>
          </svg>
          <JudulProject><p>Klien Kami</p></JudulProject>
        </div>

        <div className='md:flex mx-14 2xl:mx-14 mt-20  flex-wrap'>
          <div className='flex justify-between mx-20'>
              <Image src={Satu} alt="satu"/>
          </div>
          <div className='flex justify-between mx-18'>
              <Image src={Dua} alt="dua"/>
          </div>
          <div className='flex justify-between mx-12 pl-10'>
              <Image src={Tiga} alt="tiga"/>
          </div>
          <div className='flex justify-between mx-12'>
              <Image src={Empat} alt="empat"/>
          </div>
          <div className='flex justify-between mx-10'>
              <Image src={Lima} alt="lima"/>
          </div>
          <div className='flex justify-between mx-10'>
              <Image src={Enam} alt="enam"/>
          </div>
        </div>

        <div className='flex mx-14 2xl:mx-14 mt-20  flex-wrap'>
          <div className='flex justify-between mx-20'>
              <Image src={Tujuh} alt="tujuh"/>
          </div>
          <div className='flex justify-between mx-18'>
              <Image src={Delapan} alt="lapan"/>
          </div>
          <div className='flex justify-between mx-12 pl-10'>
              <Image src={Sembilan} alt="sembilan"/>
          </div>
          <div className='flex justify-between mx-12'>
              <Image src={Sepuluh} alt="sepuluh"/>
          </div>
        </div>


 <Footer/>
        </section>
    </>
  )
}

export default KlienHome