import imgHome from '../public/home1.svg'
import Image from 'next/image'
import JudulProject from './JudulProject'
import SolusiHome from './SolusiHome'
import KlienHome from './KlienHome'
import Footer from './Footer'

const Hero = () => {
    return (
    <>

        <section className='md:flex justify-between py-28 xl:mx-20'>
            <div className='overlay text-center mx-14 py-28 sm:text-left'>
            <p className="inline-block py-4 px-5 text-gray-500 mb-3 text-2xl">
                Kami adalah <span className='text-puerto-rico-500 font-bold font-mons'>Art By Code <span>&#10072;</span> ABC</span></p>
            <h1 className="font-black text-5xl mb-4 px-4 w-6/6 leading-snug font-nuni">Ayo ciptakan sesuatu yang indah dari sebuah kode</h1>
            <button className="bg-puerto-rico-500 text-white-50 text-sm mx-4 py-3 px-6 inline-flex items-center rounded-md mt-6">
              mau tau lebih banyak
          </button>

            </div>
            <div className='py-14 pr-18 w-full'>
                <Image className='hero_img' src={imgHome} alt="imghome" />
            </div>
        </section>
        {/* <section className='grid grid-cols-2 gap-4 mt-20  max-w-screen-xl mx-auto px-4 items-center'>
            <div className='flex flex-col'>
            <p className="inline-block py-4 px-5 text-gray-500 mb-3 text-2xl">
                Kami adalah <span className='text-puerto-rico-500 font-bold font-mons'>Art By Code <span>&#10072;</span> ABC</span></p>
            <h1 className="font-black text-5xl mb-4 px-4 w-6/6 leading-snug font-nuni">Ayo ciptakan sesuatu yang indah dari sebuah kode</h1>
            <button className="bg-puerto-rico-500 text-white-50 text-sm mx-4 py-3 px-6 inline-flex items-center rounded-md mt-6">
              mau tau lebih banyak
          </button>

          <div className='flex items-center justify-center'>
              <img src="/home1.svg" alt="home1" />
          </div>

            </div>
        </section> */}

        <SolusiHome/>
        <KlienHome/>
        
    </>
    )
}

export default Hero

