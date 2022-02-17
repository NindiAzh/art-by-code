import classNames from 'classnames'
import image from 'next/image'

const Design = ({para, judul, text, button,image, imgcClassName}: any) => {
  return (
    <>
        <div className='flex items-center bg-white-50'>
            <img className={classNames("", imgcClassName)} src={image} alt="webdev" />

            <div className='mt-10 ml-10'>
                <p className="inline-block px-5 text-puerto-rico-500 text-xs">
                    {para}</p>
                <h1 className="font-black text-5xl mb-2 px-4 w-2/2 leading-snug">{judul}</h1>
                <p className='text-lg font-normal px-4 w-3/2'>{text}</p>
                <button className="bg-puerto-rico-500 text-white-50 text-sm py-2 px-4 mt-14 mx-5 inline-flex items-center rounded-md">
                    {button}
                </button>


            </div>
        </div>
    </>
  )
}

export default Design