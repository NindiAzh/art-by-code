import React from 'react'
import JudulProject from './JudulProject'
import Button from './Button'

const Footer = () => {
  return (
    <section className=''>
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
       <a className='mx-auto font-nuni mt-20 border border-puerto-rico-500 text-puerto-rico-500 font-extrabold py-3 px-4 rounded-lg'>
          Hubungi Kami
        </a>
    </div>

    </div>


     
    </section>
  )
}

export default Footer

{/* <div>
<JudulProject>Apakah kamu siap?</JudulProject>
<p className='text-lg font-medium pt-10'>Beritahu kami apa yang mau kamu bangun atau kesulitan</p>
   <p className='text-lg font-medium'> apa yang kamu hadapi</p>
</div> */}
