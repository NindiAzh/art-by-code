import React from 'react'
import WebDev from '../components/WebDev'
import AppDev from '../components/AppDev'
import UiUx from '../components/UiUx'
import Machine from '../components/Machine'
import Flow from '../components/Flow'
import Brand from '../components/Brand'
import JudulProject from '../components/JudulProject'
import Footer from "../components/Footer"
import Button from '../components/ButtonSol'
import Link from "next/link"


const solusi = () => {
    return (
    <>
        <div className="flex justify-center items-center flex-row pt-24 mx-10 text-center font-bold lg:text-sm text-sm space-x-20">
            <h1 className=" cursor-pointer pb-20 mt-2 text-puerto-rico-500 font-extrabold font-nuni">Web Development</h1>
                
               
            <h1 id='appdev' className="text-silver-500 font-black pb-20 mt-2 cursor-pointer font-nuni">App Development</h1>
            <h1 className="text-silver-500 pb-20 mt-2 cursor-pointer font-nuni">UI/UX Design</h1>
            <h1 className="text-silver-500 pb-20 mt-2 cursor-pointer font-nuni">Machine Learning</h1>
            <h1 className="text-silver-500 pb-20 mt-2 cursor-pointer font-nuni">Flow Automation</h1>
            <h1 className="text-silver-500 pb-20 mt-2 cursor-pointer font-nuni">Branding & Digital Ads</h1>


        </div>

        <WebDev/>
        <AppDev/>
        <UiUx/>
        <Machine/>
        <Flow/>
        <Brand/>


          <div className='pb-24'>
            <Footer/>
          </div>
  

        </>
    )
}

export default solusi
