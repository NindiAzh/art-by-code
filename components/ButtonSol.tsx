import Link from "next/link"

const ButtonSol = ({children, href}:any) => {
  return (
    <>
         <Link href={"appdev"}><a className="text-silver-500 font-black pb-20 mt-2 cursor-pointer font-nuni">{children}</a></Link>

    </>
  )
}

export default ButtonSol