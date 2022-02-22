import Image from "next/image"
import Code from '../public/clean.svg'
import Technical from "./Technical"

const Clean = () => {
  return (
    <>
        <section className='flex justify-between font-nuni py-20 xl:mx-20'>
            <div className='overlay text-center mx-20 ml-10 py-28 sm:text-left'>
                <p className="inline-block pt-8 px-3 text-puerto-rico-500 text-xs">
                    CLEAN CODE</p>
                <h1 className="font-light text-5xl mb-4 px-3 w-5/6 leading-snug">Kami percaya dengan <span className="font-black font-nuni">kode yang bersih</span></h1>
                <p className="text-lg font-normal ml4 px-2 w-11/12">Kode yang bersih dapat berbicara lebih jelas dibandingan dengan catatan berwarna yang menumpuk - kami belajar dari pengalaman. Fokus kami
                    adalah untuk membangun dengan prinsip kode yang bersih (yang tentunya
                    akan membuat tenang tim IT kamu juga) demi produk yang berjangka
                    panjang dan dapat selalu dikembangkan.</p>
            </div>
                <div className='py-28 pr-2 mr-8 w-screen'>
                    <Image className='' src={Code} alt="appdev"/>
                </div>
        </section>
        <Technical/>

    </>
  )
}

export default Clean