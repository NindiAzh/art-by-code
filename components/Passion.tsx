import Image from "next/image"
import Img1 from '../public/passion.svg'
import CardCollab from "./CardCollab"
import Clean from "./Clean"

const Passion = () => {
  return (
    <>
         <section className='bg-puerto-rico-50 flex justify-between font-nuni'>
                <div className='py-32 pl-32 w-2/3'>
                    <Image src={Img1} alt="appdev"/>
                </div>
            <div className='overlay text-center mx-4 ml-4 py-16 sm:text-left'>
            
                <p className="inline-block pt-8 px-5 text-puerto-rico-500 text-xs">
                    PASSION</p>
                <h1 className="font-light text-5xl mb-4 px-4 w-2/2 leading-snug">Kami membangun dengan <span className="font-black">sepenuh hati</span></h1>
                <p className="text-lg font-normal pl-4 px-6 w-10/12">Membangun sesuatu bukan hanya merupakan sebuah pekerjaan bagi kami.
                    Kami suka (dengan penuh hasrat) membangun solusi luar biasa untuk
                    orang-orang luar biasa!</p>
                {/* <button className="bg-puerto-rico-500 text-white-50 text-sm py-2 px-4 mt-14 mx-5 inline-flex items-center rounded-md">
                    Mau dong!
                    </button> */}

                    <svg className="mx-4 mt-8"  width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="3" rx="1.5" fill="#1DC0AD"/>
                    </svg>


                  <div className="flex -mx-4 items-center flex-wrap">
                        <article className="flex w-5/6">
                            <CardCollab
                                img="/cb1.svg"
                                judul="Kualitas Kode"
                                para="Memberikan kode 
                                berkualitas baik yang telah 
                                kami tinjau dan uji"
                            />
                             <CardCollab
                                img="/cb2.svg"
                                judul="Tes Otomatis"
                                para="Melakukan rangkaian tes
                                otomatis dengan solusi
                                internasional"
                            />

                             <CardCollab
                                img="/cb3.svg"
                                judul="Selalu Terkini"
                                para="Membangun solusi kamu
                                dengan teknologi dan
                                informasi terkini"
                            />
                        </article>
                  </div>
            </div>
        </section>

            <Clean/>
    </>
  )
}

export default Passion