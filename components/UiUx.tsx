import React from 'react'
import Design from './Design'
import Image from 'next/image'
import Tiga from '../public/tiga.svg'

const uiux = () => {
  return (
    <>
         <section className='flex justify-between py-32 xl:mx-20'>

                <div className='overlay text-center mx-6 mr-28 py-6 w-full sm:text-left'>
                    <Design
                        image="/tiga.svg"
                        imgcClassName="py-2 pl-8 w-2/4"
                        para="UI / UX DESIGN"
                        judul="Website / aplikasi dengan 
                                tampilan “lama”, masih?"
                        text="Apa yang dilihat pertama kali oleh pengunjung ketika mereka membuka
                                suatu website/aplikasi? Jelas penampilannya dan kemudian pengunaannya"
                        button="Mau kece dong!"
                    />
                                
                                </div>

      
   
        </section>
    </>
  )
}

export default uiux