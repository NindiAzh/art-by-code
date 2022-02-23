import Image from "next/image"
import Img from '../public/collab.svg'
import Cb1 from '../public/cb1.svg'
import Cb2 from '../public/cb2.svg'
import Cb3 from '../public/cb3.svg'
import CardCollab from "./CardCollab"
import Passion from "./Passion"

const Collab = () => {
  return (
    <>
        <section className='flex justify-between py-24 xl:mx-20 font-nuni'>
            <div className='overlay text-center mx-4 ml-10 py-28 sm:text-left'>
                <p className="inline-block pt-8 px-5 text-puerto-rico-500 text-xs">
                    COLLABORATION</p>
                <h1 className="font-light text-5xl mb-4 px-4 w-2/3 leading-snug">Kami suka <span className="font-black">berkolaborasi</span></h1>
                <p className="text-lg font-normal px-4 w-4/6">Komunikasi dan transparansi adalah fondasi dari hubungan 
                    jangka panjang yang kita semua inginkan. Jadi, ayo ngobrol
                    dan gali lebih dalam lagi kebutuhan kamu! </p>

                    <svg className="mx-4 mt-8"  width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="3" rx="1.5" fill="#1DC0AD"/>
                    </svg>


                  <div className="flex -mx-4 items-center flex-wrap">
                        <article className="flex">
                            <CardCollab
                                img="/cb1.svg"
                                judul="Perencanaan Proyek"
                                para="Membahas perencanaan
                                pengembangan kebutuhan kamu yang transparan"
                            />
                             <CardCollab
                                img="/cb2.svg"
                                judul="Laporan Eksekutif"
                                para="Dapatkan laporan berkala
                                mengenai pengembangan yang telah dikerjakan"
                            />

                             <CardCollab
                                img="/cb3.svg"
                                judul="Komunikasi Rutin"
                                para="Kami siap menjawab semua
                                pertanyaan dan memberikan informasi yang kamu butuhkan"
                            />
                        </article>
                  </div>
            </div>

                <div className='py-52 pr-10 w-2/3'>
                    <Image className='' src={Img} alt="appdev"/>
                </div>


                

        </section>
        <Passion/>


    </>
  )
}

export default Collab