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

        <div className='flex mx-14 2xl:mx-14 mt-20  flex-wrap'>
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

        <div className='flex mx-14 2xl:mx-14 mt-20  flex-wrap'>
          <div className='flex justify-between mx-20 pl-52 pr-6'>
              <Image src={Sebelas} alt="sebelas"/>
          </div>
          <div className='flex justify-between'>
              <Image src={DuaBelas} alt="duabelas"/>
          </div>
        </div>


        <div className='container mx-auto px-10 2xl:px-10'>
          <svg className='mx-auto' width="420" height="293" viewBox="0 0 420 293" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_49_846)">
          <path d="M0 202.067L11.6667 201.367C23.3333 200.667 46.6667 199.267 70 195.3C93.3333 191.333 116.667 184.8 140 188.767C163.333 192.733 186.667 207.2 210 216.16C233.333 225.073 256.667 228.527 280 224.14C303.333 219.8 326.667 207.667 350 198.707C373.333 189.793 396.667 184.007 408.333 181.16L420 178.267" stroke="#1DC0AD" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round"/>
          </g>
          <g clip-path="url(#clip1_49_846)">
          <path d="M0 215.067L11.6667 214.367C23.3333 213.667 46.6667 212.267 70 208.3C93.3333 204.333 116.667 197.8 140 201.767C163.333 205.733 186.667 220.2 210 229.16C233.333 238.073 256.667 241.527 280 237.14C303.333 232.8 326.667 220.667 350 211.707C373.333 202.793 396.667 197.007 408.333 194.16L420 191.267" stroke="#1DC0AD" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round"/>
          </g>
          <defs>
          <clipPath id="clip0_49_846">
          <rect width="420" height="280" fill="white"/>
          </clipPath>
          <clipPath id="clip1_49_846">
          <rect width="420" height="280" fill="white" transform="translate(0 13)"/>
          </clipPath>
          </defs>
          </svg>

          <JudulProject>Apakah kamu siap?</JudulProject>
     

      <div className='flex mx-14 2xl:mx-14 mt-8  flex-wrap'>
        <div className='flex justify-between mx-auto' >
          <h1 className='text-lg'>Beritahu kami apa yang mau kamu bangun atau kesulitan</h1>
        </div>
      </div>

      <div className='flex justify-between' >
        <h1 className='text-lg mx-auto'>apa yang kamu hadapi</h1>
      </div>

      
      <div className='flex justify-between'>
       <a className='mx-auto mt-20 border border-puerto-rico-500 text-puerto-rico-500 font-extrabold py-3 px-4 rounded-lg'>
          Hubungi Kami
        </a>
    </div>

    </div>

        </section>
    </>
  )
}

export default KlienHome