import React, { useState } from 'react'
import {Transition} from '@headlessui/react' //untuk Smooth transition between tabs (desktop)
import {CgMenu} from 'react-icons/cg'
import {GrFormClose} from 'react-icons/gr'
import Link from 'next/link'
import Image from 'next/image'
import Logoabc from '../public/logoabc.png'
import Button from './Button'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
                    {/* for css container nav */}
            <nav className="shadow-md fixed w-full z-10 bg-white-50">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                                {/* kek buat blok untuk tempat Logo */}
                        <div className="flex items-center mx-32 justify-between w-full">
                                <div className="flex justify-center items-center flex-shrink-0">
                                   <Image src={Logoabc} alt="logoabc"/>
                                </div>
                                        {/* artinya akan hidden saat di uk mobile dan akan muncul (blok) saat di md keatas */}
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-6 font-nuni">
                                        <Link href="/tentang"><a className="cursor-pointer text-black font-bold px-3 py-2 text-[18px]">Tentang Kami</a></Link>
                                        <Link href="/solusi"><a className="cursor-pointer text-black px-3 py-2 rounded-md text-[18px] font-bold flex items-center">
                                            Solusi Kami <svg className='ml-4' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.56559 11.571C8.64146 11.4954 8.70496 11.4123 8.76065 11.3256L14.5746 5.51165C15.1415 4.94422 15.1421 4.02433 14.5746 3.45662C14.0072 2.88973 13.0876 2.88919 12.5196 3.45662L7.51305 8.46371L2.47987 3.43133C1.91243 2.86417 0.992809 2.8639 0.425106 3.43133C0.141793 3.71545 -0.000536587 4.08702 1.52009e-06 4.45858C-0.000536587 4.83041 0.141793 5.20224 0.425644 5.48529L6.26491 11.3254C6.32061 11.4123 6.38464 11.4951 6.46105 11.571C6.75109 11.861 7.13261 12.0007 7.51305 11.994C7.89296 12.001 8.27555 11.861 8.56559 11.571Z" fill="#2C2C2C"/>
                                                        </svg></a></Link>
                                        <Link href="/carakerja"><a className="cursor-pointer text-black px-3 py-2 rounded-md text-[18px] font-bold">Cara Kerja</a></Link>
                                        <Link href="/karya"><a className="cursor-pointer text-black px-3 py-2 rounded-md text-[18px] font-bold">Karya Kami</a></Link>
                                        <Link href="/hubungi"><a className="cursor-pointer px-3 py-2 rounded-md text-[18px] font-bold"><Button>Hubungi Kami</Button></a></Link>
                                     </div>
                                </div>
                        </div>


                                    {/* on Mobile Responsive */}
                            <div className="mr-10 flex md:hidden">
                                <button 
                                className="bg-puerto-rico-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-offset-2 focus:ring-offset-bg-blue-800 focus:ring-white" 
                                onClick={() => setIsOpen(!isOpen)} 
                                type="button"
                                aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <CgMenu className="block h-6 w-6" />
                                    ):(
                                        <GrFormClose className="block h-6 w-6" />
                                    )}
                                </button>
                            </div>
                    </div>
                </div>
                    {/* transition from headlessui for smoothness in Mobile Responsive */}
                <Transition 
                show={isOpen} 
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transform duration-75 transition ease-in-out"
                leaveFrom="opacity-100 scale-100 "
                leaveTo="opacity-0 scale-95 "
                >
                    {(ref) => (
                        // handle the mobile menu tabs
                        <div className="md:hidden">
                            <div ref={ref} className="bg-puerto-rico-200 px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                            <Link href="/"><a className="cursor-pointer hover:bg-puerto-rico-500 font-semibold px-52 py-2 text-base rounded-md hover:text-black">Tentang Kami</a></Link>
                                        <Link href="/solusi"><a className="cursor-pointer hover:bg-puerto-rico-500 text-black hover:text-white px-52 py-2 rounded-md text-base font-medium">Solusi Kami</a></Link>
                                        <Link href="/carakerja"><a className="cursor-pointer hover:bg-puerto-rico-500 text-black hover:text-white px-52 py-2 rounded-md text-base font-medium">Cara Kerja</a></Link>
                                        <Link href="/karya"><a className="cursor-pointer hover:bg-puerto-rico-500 text-black hover:text-white px-52 py-2 rounded-md text-base font-medium">Karya Kami</a></Link>
                                        <Link href="/hubungi"><a className="cursor-pointer bg-puerto-rico-500 text-white px-10 py-2 rounded-md text-base font-medium">Hubungi Kami</a></Link>

                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    )
}

export default Navbar
