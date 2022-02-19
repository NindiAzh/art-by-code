import Image from "next/image"
import Img from '../public/collab.svg'
import Cb1 from '../public/cb1.svg'
import Cb2 from '../public/cb2.svg'
import Cb3 from '../public/cb3.svg'

const Collab = () => {
  return (
    <>
        <section className='flex justify-between py-24 xl:mx-20'>
            <div className='overlay text-center mx-8 py-28 sm:text-left'>
                <p className="inline-block pt-8 px-5 text-puerto-rico-500 text-xs">
                    COLLABORATION</p>
                <h1 className="font-normal text-5xl mb-4 px-4 w-2/3 leading-snug">Kami suka <span className="font-black">berkolaborasi</span></h1>
                <p className="text-lg font-normal px-4 w-9/12">Komunikasi dan transparansi adalah fondasi dari hubungan 
                    jangka panjang yang kita semua inginkan. Jadi, ayo ngobrol
                    dan gali lebih dalam lagi kebutuhan kamu! </p>
                {/* <button className="bg-puerto-rico-500 text-white-50 text-sm py-2 px-4 mt-14 mx-5 inline-flex items-center rounded-md">
                    Mau dong!
                    </button> */}

                    <svg className="mx-4 mt-8"  width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="3" rx="1.5" fill="#1DC0AD"/>
                    </svg>


                    <div className="mx-4 mt-8">
                    <Image src={Cb1} alt="webdev" />
                    </div>
                    <div className="flex justify-between mx-4">
                    <h1 className="text-xl font-extrabold mt-4">Perencaan Proyek</h1>
                    </div>

                    <div className="flex justify-between mx-4">
                    <p className="text-gray-500 text-sm mt-4 w-2/6">Membahas perencanaan
                        pengembangan kebutuhan kamu yang transparan</p>
                    </div>
{/* 
                    <svg className="flex" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="24.5" fill="#1DC0AD" fill-opacity="0.1" stroke="#1DC0AD"/>
                    <g clip-path="url(#clip0_16_7770)">
                    <path d="M29.1666 26.6667C29.1666 26.8877 29.0788 27.0997 28.9226 27.2559C28.7663 27.4122 28.5543 27.5 28.3333 27.5H21.6666C21.4456 27.5 21.2337 27.4122 21.0774 27.2559C20.9211 27.0997 20.8333 26.8877 20.8333 26.6667C20.8333 26.4457 20.9211 26.2337 21.0774 26.0774C21.2337 25.9211 21.4456 25.8333 21.6666 25.8333H28.3333C28.5543 25.8333 28.7663 25.9211 28.9226 26.0774C29.0788 26.2337 29.1666 26.4457 29.1666 26.6667ZM25.8333 29.1667H21.6666C21.4456 29.1667 21.2337 29.2545 21.0774 29.4108C20.9211 29.567 20.8333 29.779 20.8333 30C20.8333 30.221 20.9211 30.433 21.0774 30.5893C21.2337 30.7455 21.4456 30.8333 21.6666 30.8333H25.8333C26.0543 30.8333 26.2663 30.7455 26.4226 30.5893C26.5788 30.433 26.6666 30.221 26.6666 30C26.6666 29.779 26.5788 29.567 26.4226 29.4108C26.2663 29.2545 26.0543 29.1667 25.8333 29.1667ZM33.3333 23.7375V30.8333C33.332 31.938 32.8926 32.997 32.1114 33.7782C31.3303 34.5593 30.2713 34.9987 29.1666 35H20.8333C19.7286 34.9987 18.6696 34.5593 17.8885 33.7782C17.1074 32.997 16.6679 31.938 16.6666 30.8333V19.1667C16.6679 18.062 17.1074 17.003 17.8885 16.2219C18.6696 15.4408 19.7286 15.0013 20.8333 15H24.5958C25.3621 14.998 26.1213 15.148 26.8293 15.4412C27.5373 15.7345 28.1802 16.1651 28.7208 16.7084L31.6241 19.6133C32.1677 20.1535 32.5986 20.7962 32.892 21.5042C33.1854 22.2121 33.3354 22.9712 33.3333 23.7375ZM27.5425 17.8867C27.2802 17.6327 26.9857 17.4141 26.6666 17.2367V20.8333C26.6666 21.0544 26.7544 21.2663 26.9107 21.4226C27.067 21.5789 27.2789 21.6667 27.5 21.6667H31.0966C30.9191 21.3477 30.7003 21.0535 30.4458 20.7917L27.5425 17.8867ZM31.6666 23.7375C31.6666 23.6 31.64 23.4683 31.6275 23.3333H27.5C26.8369 23.3333 26.201 23.07 25.7322 22.6011C25.2634 22.1323 25 21.4964 25 20.8333V16.7059C24.865 16.6934 24.7325 16.6667 24.5958 16.6667H20.8333C20.1703 16.6667 19.5344 16.9301 19.0655 17.3989C18.5967 17.8678 18.3333 18.5036 18.3333 19.1667V30.8333C18.3333 31.4964 18.5967 32.1323 19.0655 32.6011C19.5344 33.07 20.1703 33.3333 20.8333 33.3333H29.1666C29.8297 33.3333 30.4656 33.07 30.9344 32.6011C31.4032 32.1323 31.6666 31.4964 31.6666 30.8333V23.7375Z" fill="#1DC0AD"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_16_7770">
                    <rect width="20" height="20" fill="white" transform="translate(15 15)"/>
                    </clipPath>
                    </defs>
                    </svg>  */}
                          {/* <div className='flex -mx-10 2xl:mx-14 mt-8  flex-wrap'>
                                <div className='flex justify-between mx-14 '>
                                    <Image src={Cb1} alt="webdev" />
                                    <div className="flex justify-between">
                                        <h1 className="text-xl font-extrabold mt-4">Perencaan Proyek</h1>
                                       

                            
                                        <p className="text-gray-500 text-sm mt-4 w-2/6">Membahas perencanaan
                                            pengembangan kebutuhan kamu yang transparan</p>
                                        </div>
                                </div>
                                <div className='mx-14'>
                                    <Image src={Cb2} alt="appdev" />
                                </div>
                                <div className='mx-14'>
                                    <Image src={Cb3} alt="uiux" />
                                </div>
                            </div> */}


                    {/* <div className="flex justify-between mx-4">
                    <h1 className="text-xl font-extrabold mt-4">Laporan Eksekutif</h1>
                    </div>

                    <div className="flex justify-between mx-4">
                    <p className="text-gray-500 text-sm mt-4 w-2/6">Dapatkan laporan berkala
                        mengenai pengembangan yang telah dikerjakan</p>
                    </div> */}
            </div>

                <div className='py-20 pr-10 w-2/3'>
                    <Image className='' src={Img} alt="appdev"/>
                </div>


                

        </section>


    </>
  )
}

export default Collab