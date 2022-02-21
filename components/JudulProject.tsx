import Image from "next/image"
import Icon from '../public/icon.svg'


const JudulProject = ({left, children}:any) => {
  return (
    <>
        <h2 className={`text-5xl font-black font-nuni mt-3 ${!left ? "text-center" : ""}`}>{children}</h2>
    </>
  )
}

export default JudulProject