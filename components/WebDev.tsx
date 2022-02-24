import Image from 'next/image'
import Kotak from '../public/kotak.svg'
import Design from './Design'


const WebDev = () => {
  return (

  <>
    <section className='flex justify-between py-18 xl:mx-20'>
      <div className='overlay text-center mx-18 mr-28 py-6 w-full sm:text-left'>
          <Design
            image="/satu.svg"
            imgcClassName="py-2 pl-8 w-2/4"
            para="WEB DEVELOPMENT"
            judul="Kamu siap untuk punya website?"
            text="Tuangkan segala ide yang kamu simpan selama ini untuk website kamu, 
            saatnya kita buat itu semua jadi kenyataan"
            button="Saya siap!"
          />
      <div className='mt-4 pl-96 ml-64'>
          <Image src={Kotak} alt="kotak" />
      </div>

      </div>

      
   
</section>

</>

  )
}

export default WebDev