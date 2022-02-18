import Image from "next/image"
import Enam from '../public/enam.svg'
import JudulProject from "./JudulProject"

const Brand = () => {
  return (
   <>
        <section className='bg-puerto-rico-50 mb-6 flex justify-between'>
            <div className='overlay text-center mx-28 py-28 sm:text-left'>
                <p className="inline-block pt-8 px-5 text-puerto-rico-500 text-xs">
                    BRANDING & DIGITAL ADS</p>
                <h1 className="font-black text-5xl mb-4 px-4 w-2/2 leading-snug">Ingin berkomunikasi lebih
                    baik dengan konsumen?</h1>
                <p className="text-lg font-normal px-4 w-3/2">Nama usaha kamu (asosiasi dan kredibilitas) dan iklan sangat penting 
                    dalam membangun hubungan dengan konsumen. Mau tahu lebih?</p>
                <button className="bg-puerto-rico-500 text-white-50 text-sm py-2 px-4 mt-14 mx-5 inline-flex items-center rounded-md">
                    Mau dong!
                    </button>
            </div>
                <div className='py-20 pr-10 w-2/3'>
                    <Image className='' src={Enam} alt="appdev"/>
                </div>


                

        </section>

        

   </>
  )
}

export default Brand