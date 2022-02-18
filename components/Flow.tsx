import React from 'react'
import Design from './Design'

const Flow = () => {
  return (
    <>
        <section className='flex justify-between py-32 xl:mx-20'>

            <div className='overlay text-center mx-6 mr-28 py-6 w-full sm:text-left'>
                <Design
                    image="/lima.svg"
                    imgcClassName="py-2 pl-8 w-2/4"
                    para="FLOW AUTOMATION"
                    judul="Kamu masih hobi ngerjain
                            administrasi berulang?"
                    text="Biarkan proses administrasi manual dan tumpukan dokumen fisik
                            menjadi cerita dan kenangan lama (jangan yang lain-lain ya)"
                    button="Ayo buat cerita baru!"
                />
                            
             </div>



        </section>

    </>
  )
}

export default Flow