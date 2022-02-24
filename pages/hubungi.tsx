import React from 'react'
import Contact from '../components/Contact'
import Image from 'next/image'
import Panah from '../public/panah.svg'

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
                            <button className='ring-1 ring-star-dust-500 rounded-md w-full px-4 py-3 mx-4 mt-6 outline-none text-lg font-nuni text font-black'>
                                Web Development 
                                <span className=''>
                                <svg className='' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_57_870)">
                                    <path d="M8.56559 11.5709C8.64146 11.4953 8.70496 11.4121 8.76065 11.3255L14.5746 5.51153C15.1415 4.9441 15.1421 4.02421 14.5746 3.4565C14.0072 2.88961 13.0876 2.88907 12.5196 3.4565L7.51305 8.46359L2.47987 3.43121C1.91243 2.86405 0.992809 2.86378 0.425106 3.43121C0.141793 3.71533 -0.000536587 4.08689 1.52009e-06 4.45846C-0.000536587 4.83029 0.141793 5.20212 0.425644 5.48517L6.26491 11.3252C6.32061 11.4121 6.38464 11.495 6.46105 11.5709C6.75109 11.8609 7.13261 12.0006 7.51305 11.9938C7.89296 12.0008 8.27555 11.8609 8.56559 11.5709Z" fill="#2C2C2C"/></g>
                                    <defs>
                                    <clipPath id="clip0_57_870">
                                    <rect width="15" height="15" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>

                                </span>
                                    {/* <Image src={Panah} alt="Panah"/> */}
</button>
                        </div>

                </form>
                
</div>
</section>
       </>

    )
}

export default hubungi
