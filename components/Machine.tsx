import Image from "next/image"
import Empat from '../public/empat.svg'

const Machine = () => {
  return (
    <>
        <section className='bg-puerto-rico-50 mb-6 flex justify-between font-nuni'>
            <div className='overlay text-center mx-28 py-28 sm:text-left'>
                <p className="inline-block pt-8 px-5 text-puerto-rico-500 text-xs">
                     MACHINE LEARNING</p>
                <h1 className="font-black text-5xl mb-4 px-4 w-2/2 leading-snug">Buat mesin bekerja untuk
                    kamu, bukan sebaliknya</h1>
                <p className="text-lg font-normal px-4 w-3/2">Rasanya ingin mengajarkan mesin untuk bekerja dengan sendirinya
                    tanpa perlu ada kerjaan tambahan?</p>
                <button className="bg-puerto-rico-500 text-white-50 text-sm py-2 px-4 mt-14 mx-5 inline-flex items-center rounded-md">
                        Ajari mesin kami!
                    </button>
            </div>
                <div className='py-20 pr-10 w-2/3'>
                    <Image className='' src={Empat} alt="appdev"/>
                </div>
        </section>

    </>
  )
}

export default Machine