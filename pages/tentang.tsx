import Image from "next/image"
import Bg from '../public/tentang.svg'
import Ttg1 from '../public/ttg1.svg'
import Ttg2 from '../public/ttg2.svg'
import Footer from "../components/Footer"

const tentang = () => {
  return (
    <>
        <section className='md:flex justify-between py-24 xl:mx-20 font-nuni'>
            <div className='overlay text-center mx-4 ml-10 py-28 sm:text-left'>
                <p className="inline-block pt-8 px-5 text-puerto-rico-500 text-xs">
                    OUR BELIEF</p>
                <h1 className="font-light text-4xl mb-4 px-4 w-5/6 leading-snug">Kami percaya pada pemberdayaan 
                    teknologi untuk semua, dan sadar bahwa
                <span className="font-black"> kami dapat membuat perubahan dengan memberikan layanan teknologi yang berkualitas</span></h1>

                    <svg className="mx-4 mt-8"  width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="3" rx="1.5" fill="#1DC0AD"/>
                    </svg>

                    <div className="flex -mx-4 mt-3 items-center flex-wrap">
                        <div>
                        <div className="px-8 mt-6 lg:w-8/12 md:w-7/12">
                           <Image src={Ttg1} alt="tentang" />
                        </div>

                    <div>
                        <h1 className="text-2xl mx-8 font-extrabold mt-4 w-2/2">Siapa yang kami bantu?</h1>
                            <p className=" mx-8 text-lg mt-4 w-9/12">Dari usaha kecil, menengah, sampai dengan besar yang mencari teknologi
                                dalam pengembangan dan efisiensi bisnis. Kami bertujuan untuk menjadi
                                rekan strategis jangka panjang yang dapat mewujudkan kebutuhan
                                 dan juga menjadi lawan diskusi dari para rekan kami.</p>
                    </div>
                        </div>
                    </div>

                    <div className="md:flex -mx-4 mt-10 items-center flex-wrap">
                        <div>
                        <div className="px-8 mt-6 lg:w-8/12 md:w-7/12">
                           <Image src={Ttg2} alt="tentang" />
                        </div>

                    <div>
                        <h1 className="text-2xl mx-8 font-extrabold mt-4 w-2/2">Apa yang kami percayai?</h1>
                            <p className=" mx-8 text-lg mt-4 w-9/12">Bekerjalah dengan sepenuh hati dan integritas untuk memberikan hasil yang
                                terbaik, karena kesuksesan rekan kami akan menjadi pendorong kita untuk bisa lebih berkembang juga</p>
                    </div>
                        </div>
                    </div>

            </div>
            
            <div className='py-32 pr-10 w-full'>
                    <Image className='' src={Bg} alt="appdev"/>
                </div>


        </section>

            <div className="pb-32">
            <Footer/>

            </div>
    </>
  )
}

export default tentang