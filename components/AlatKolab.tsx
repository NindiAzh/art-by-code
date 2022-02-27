import JudulProject from './JudulProject'
import Image from 'next/image'
import Tele from '../public/tele.svg'
import GoogleDocs from '../public/gdocs.svg'
import Microsoft from '../public/microsoft.svg'
import Figma from '../public/figma.svg'
import Whimsical from '../public/whimsical.svg'
import Footer from './Footer'

const AlatKolab = () => {
  return (
    <>
    <section className='py-44'>
        <div className='container mx-auto px-10 2xl:px-10'>
          <svg className='mx-auto' width="40" height="5" viewBox="0 0 40 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="5" rx="2.5" fill="#1DC0AD"/>
          </svg>
          <JudulProject><p className='font-black'>Alat Kolaborasi</p></JudulProject>
        </div>

        <div className='flex mx-24 mt-20 ml-36 w-5/6 flex-wrap'>
            <article className='flex w-2/2'>
            <div className="px-4 mt-6 lg:w-8/12 md:w-7/12">
                <Image src={Tele} alt="tele"/>
                <h1 className='text-2xl font-nuni font-black text-cerulean-500 mt-2'>Telegram</h1>
                <p className='text-lg font-nuni mt-2 w-2/3'>for ongoing communication with the team</p>
            </div>
            <div className="pr-10 lg:w-8/12 md:w-7/12">
              <div className=''>
                <Image src={Microsoft} alt="tele"/>
                </div>
                <h1 className='text-2xl font-nuni font-black text-cerulean-blue-500 w-2/3'>Microsoft Teams</h1>
                <p className='text-lg font-nuni mt-0 w-2/2'>for video conferencing and coordination</p>
            </div>
            <div className="mt-3 lg:w-8/12 md:w-7/12">
                <Image src={GoogleDocs} alt="tele"/>
                <h1 className='text-2xl font-nuni font-black text-dodger-blue-500 mt-3'>Google Docs</h1>
                <p className='text-lg font-nuni mt-2 w-2/3'>for dynamic collaboration n documentation</p>
            </div>
            <div className="mt-3 lg:w-8/12 md:w-7/12">
                <Image src={Figma} alt="tele"/>
                <h1 className='text-2xl font-nuni font-black text-pomegranate-500 mt-3'>Figma</h1>
                <p className='text-lg font-nuni mt-2 w-2/3'>for designing and presenting the mockup design</p>
            </div>
            <div className="mt-3 lg:w-8/12 md:w-7/12">
                <Image src={Whimsical} alt="tele"/>
                <h1 className='text-2xl font-nuni font-black text-purple-heart-500 mt-3'>Whimsical</h1>
                <p className='text-lg font-nuni mt-2 w-2/3'>for designing and presenting the wireframe</p>
            </div>
            </article>
        </div>

                  <Footer/>

    </section>

    </>
  )
}

export default AlatKolab