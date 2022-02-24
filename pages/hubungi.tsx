import React from 'react'
import Contact from '../components/Contact'
import Image from 'next/image'
import Hub from '../public/contact.svg'
import {IoIosArrowDown} from 'react-icons/io'

const hubungi = () => {
    return (
       <>
        <section className='flex justify-between py-18 xl:mx-20 font-nuni'>
            <div className='overlay text-center mx-4 ml-10 py-28 sm:text-left'>
                <p className="inline-block pt-8 px-5 text-puerto-rico-500 text-xs">
                CONTACT US</p>
                <h1 className="font-light text-5xl mb-4 px-4 w-2/2 leading-snug">Apakah <span className="font-black"> kamu siap?</span></h1>
                <p className="text-lg font-normal px-4 w-9/12">Kami selalu siap untuk menjawab segala pertanyaan dan kebuthan kamu</p>


                <form>
                    <Contact
                        name="Beritahu kamu nama kamu ..."
                    />
                    <Contact
                        name="Beritahu kami nama organisasi kamu ..."
                    />
                    <Contact
                        name="Beritahu kami peranmu di dalam organisasi ..."
                    />
                    <Contact
                    name="Beritahu kami email kamu ..."
                    />

                    <div className='w-10/12 '>
                            <button className='ring-1 ring-star-dust-500 rounded-md w-full px-4 py-3 mx-4 mt-3 outline-none text-lg font-nuni text font-black inline-flex items-center'>
                                Web Development <IoIosArrowDown className='ml-auto' />
                    
                            </button>
                    </div>

                </form>

                <button className="bg-puerto-rico-500 text-white-50 text-lg font-black py-3 px-6 mt-10 mx-4 items-center rounded-md w-10/12">
                Aku siap! Kirimkan pesan!
                </button>

                
            </div>

                <div className='py-40 pr-8'>
                    <Image className='' src={Hub} alt="appdev"/>
                </div>




</section>
       </>

    )
}

export default hubungi
