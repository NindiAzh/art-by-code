import Image from "next/image"
import Teknik from '../public/technical.svg'
import AlatKolab from "./AlatKolab"

const Technical = () => {
  return (
    <>
        <section className='bg-puerto-rico-50 flex justify-between font-nuni'>
                <div className='py-48 pl-32 w-2/3'>
                    <Image src={Teknik} alt="appdev"/>
                </div>
            <div className='overlay text-center mx-56 ml-4 py-16 sm:text-left'>
            
                <p className="inline-block pt-8 px-5 text-puerto-rico-500 text-xs">
                    TECHNICAL EXPERTISE</p>
                <h1 className="font-light text-5xl mb-4 px-4 w-7/12 leading-snug">Kemampuan<span className="font-black"> teknis kami</span></h1>
                <p className="text-lg font-normal pl-4 px-6 w-7/12">Kami tidak akan pernah berhenti
                    belajar bahasa dan teknologi
                    terbaru agar dapat memberikan
                    solusi yang terbaik bagi kamu</p>
                    <svg className="mx-4 mt-4"  width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="3" rx="1.5" fill="#1DC0AD"/>
                    </svg>

                <div className="flex mx-4 mt-4 justify-between">
                    <div className="">
                        <h1 className="text-puerto-rico-500 font-black text-lg font-nuni">Mobile Development</h1>
                        <p className="font-normal text-sm font-nuni">Flutter, Dart, Kotlin</p>

                        <h1 className="text-puerto-rico-500 font-black text-lg font-nuni mt-7">Framework Backend & Frontend</h1>
                        <p className="font-normal text-sm font-nuni w-4/6">Laravel, Django, Flask, Next JS,  Nuxt JS, 
                            React JS, Vue JS, Angular JS</p>

                        <h1 className="text-puerto-rico-500 font-black text-lg font-nuni mt-7">Programming Language Development</h1>
                        <p className="font-normal text-sm font-nuni">PHP, Node JS, Golang, Python, Javascript</p>
                        
                        <h1 className="text-puerto-rico-500 font-black text-lg font-nuni mt-7">Middleware</h1>
                        <p className="font-normal text-sm font-nuni">Spatial Laravel, JSON Web Token (JWT)</p>
                    </div>

                    <div className="flex flex-wrap">
                    <div className="">
                        <h1 className="text-puerto-rico-500 font-black text-lg font-nuni ml-3">Database</h1>
                        <p className="font-normal text-sm font-nuni ml-3 mx-4">MySQL, PostgreSQL, Redis DB</p>

                        <h1 className="text-puerto-rico-500 font-black text-lg font-nuni mt-2 ml-3">Framework CSS</h1>
                        <p className="font-normal text-sm font-nuni ml-3">Tailwind CSS, Bootstrap 5</p>

                        <h1 className="text-puerto-rico-500 font-black text-lg font-nuni mt-2 ml-3">Stack</h1>
                        <p className="font-normal text-sm font-nuni ml-3">MERN, MEVN, MEAN, TALL</p>

                        <h1 className="text-puerto-rico-500 font-black text-lg font-nuni  mt-2 ml-3">Notification</h1>
                        <p className="font-normal text-sm font-nuni ml-3">Firebase</p>

                        <h1 className="text-puerto-rico-500 font-black text-lg font-nuni  mt-2 ml-3">Design</h1>
                        <p className="font-normal text-sm font-nuni ml-3">Figma, Zeplin</p>

                    </div>
                </div>

                </div>


            </div>

          
        </section>

        <AlatKolab/>

    </>
  )
}

export default Technical