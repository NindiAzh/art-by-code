import Image from "next/image"
import Dua from '../public/dua.svg'

const AppDev = () => {
  return (
   <>
         {/* <section className='flex justify-between bg-puerto-rico-50 py-28 xl:mx-20'>
            <div className='flex text-center mx-14 py-28 sm:text-left'>

                <Design2
                    para="APP DEVELOPMENT"
                    judul="“Bangun aplikasi itu susah”,
                            kata mereka, bukan kami"
                    text="Saat ini (hampir) semua orang pasti memiliki ponsel pintar dan akan selalu
                    membawanya kemanapun mereka berada. Jadi, tunggu apa lagi?"
                    image="/dua.svg"
                    imgcClassName="py-20 pl-24 w-2/2"
                    button="Ayo bangun!"
                />

                </div>
            
        </section> */}

        <section id="appdev" className='bg-puerto-rico-50 flex justify-between font-nuni'>
            <div className='overlay text-center mx-20 ml-32 py-28 sm:text-left'>
                <p className="inline-block pt-8 px-5 text-puerto-rico-500 text-xs">
                APP DEVELOPMENT</p>
                <h1 className="font-black text-5xl mb-4 px-2 w-2/2 leading-snug">“Bangun aplikasi itu susah”,
                    kata mereka, bukan kami</h1>
                <p className="text-lg font-normal ml-3 px-0 w-3/2">Saat ini (hampir) semua orang pasti memiliki ponsel pintar dan akan selalu
                    membawanya kemanapun mereka berada. Jadi, tunggu apa lagi?</p>
                <button className="bg-puerto-rico-500 text-white-50 text-sm py-2 px-4 mt-14 mx-3 inline-flex items-center rounded-md">
                        Ayo Bangun!
                    </button>
            </div>
                <div className='py-20 pr-10 w-2/3'>
                    <Image className='' src={Dua} alt="appdev"/>
                </div>
        </section>


      

   </>
  )
}

export default AppDev