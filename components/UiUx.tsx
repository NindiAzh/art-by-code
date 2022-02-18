import React from 'react'
import Design from './Design'
import Image from 'next/image'
import Tiga from '../public/tiga.svg'

const uiux = () => {
  return (
    <>
         <section className='flex justify-between py-32 xl:mx-20'>

                <div className='overlay text-center mx-6 mr-28 py-6 w-full sm:text-left'>
                    {/* <Design
                        image="/tiga.svg"
                        imgcClassName="py-2 pl-8 w-2/4"
                        para="UI / UX DESIGN"
                        judul="Website / aplikasi dengan 
                                tampilan “lama”, masih?"
                        text="Apa yang dilihat pertama kali oleh pengunjung ketika mereka membuka
                                suatu website/aplikasi? Jelas penampilannya dan kemudian pengunaannya"
                        button="Mau kece dong!"
                    /> */}
                    <div className='py-20 pr-10 w-2/3'>
                                    <Image className='' src={Tiga} alt="appdev"/>
                                </div>
                    <p className="inline-block py-4 px-5 text-puerto-rico-500 text-xs">
                                UI / UX DESIGN</p>
                    <h1 className="font-black text-5xl mb-4 px-2 w-2/2 leading-snug">Website / aplikasi dengan 
                                tampilan “lama”, masih?</h1>
                    <p className="text-lg font-normal px-4 w-3/2">Apa yang dilihat pertama kali oleh pengunjung ketika mereka membuka
                                suatu website/aplikasi? Jelas penampilannya dan kemudian pengunaannya</p>
                    <button className="bg-puerto-rico-500 text-white-50 text-sm py-2 px-4 mt-14 mx-5 inline-flex items-center rounded-md">
                                Mau kece dong!!
                    </button>
                </div>
                                
                                {/* </div> */}

      
   
        </section>
    </>
  )
}

export default uiux