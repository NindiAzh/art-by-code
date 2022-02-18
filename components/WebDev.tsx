import Button2 from '../components/Button2'
import Image from 'next/image'
import Kotak from '../public/kotak.svg'
import Design from './Design'


const WebDev = () => {
  return (

  <>
    <section className='flex justify-between py-18 xl:mx-20'>
      {/* <div className='py-12 pl-16 w-3/4'>
        <Image src={Satu} />
      </div>
 */}
      <div className='overlay text-center mx-6 mr-28 py-6 w-full sm:text-left'>
          <Design
            image="/satu.svg"
            imgcClassName="py-2 pl-8 w-2/4"
            para="WEB DEVELOPMENT"
            judul="Kamu siap untuk punya website?"
            text="Tuangkan segala ide yang kamu simpan selama ini untuk website kamu, 
            saatnya kita buat itu semua jadi kenyataan"
            button="Saya siap!"
          />
      {/* <p className="inline-block px-5 text-puerto-rico-500 text-xs">
      WEB DEVELOPMENT</p>
      <h1 className="font-black text-5xl mb-2 px-4 w-2/2 leading-snug">Kamu siap untuk punya website?</h1>
      <p className='text-lg font-normal px-4 w-3/2'>Tuangkan segala ide yang kamu simpan selama ini untuk website kamu, 
          saatnya kita buat itu semua jadi kenyataan </p>
          <button className="bg-puerto-rico-500 text-white-50 text-sm py-2 px-4 mt-14 mx-5 inline-flex items-center rounded-md">
                Saya siap!
          </button> */}
          
      <div className='mt-4 pl-96 ml-64'>
          <Image src={Kotak} alt="kotak" />
      </div>

      </div>

      
   
</section>

</>

  )
}

export default WebDev