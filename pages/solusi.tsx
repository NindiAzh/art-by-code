import React from 'react'
import Button2 from '../components/Button2'
import Image from 'next/image'
import WebDev from '../components/WebDev'
import AppDev from '../components/AppDev'


const solusi = () => {
    return (
    <>
        <div className="flex justify-center items-center flex-row pt-24 mx-10 text-center font-bold lg:text-sm text-sm space-x-20">
            <h1 className=" cursor-pointer pb-20 mt-2 text-puerto-rico-500 font-extrabold">Web Development</h1>
                
               {/* <div className='flex justify-between'>
                <svg className='mt-2' width="124" height="3" viewBox="0 0 124 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="124" height="3" rx="1.5" fill="#1DC0AD"/>
                </svg>
                </div> */}
            <h1 className="text-silver-500 pb-20 mt-2 cursor-pointer">App Development</h1>
            <h1 className="text-silver-500 pb-20 mt-2 cursor-pointer">UI/UX Design</h1>
            <h1 className="text-silver-500 pb-20 mt-2 cursor-pointer">Machine Learning</h1>
            <h1 className="text-silver-500 pb-20 mt-2 cursor-pointer">Flow Automation</h1>
            <h1 className="text-silver-500 pb-20 mt-2 cursor-pointer">Branding & Digital Ads</h1>



            {/* <div className="flex justify-center items-center cursor-pointer hover:shadow-2xl text-3xl font-semibold text-white bg-gray-700 rounded-lg w-64 h-16">
                <h1 className="text-center">Continue...</h1>
            </div> */}
        </div>

        <WebDev/>
        <AppDev/>

        </>
    )
}

export default solusi
