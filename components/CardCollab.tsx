import classNames from "classnames"



const CardCollab = ({img, judul, para,imgClassName}:any) => {
  return (
    <div>
                          
       
                    <div className="px-8 mt-6 lg:w-8/12 md:w-7/12">
                    <img className={classNames("", imgClassName)} src={img} alt="webdev" />
                    </div>

                    <div>
                    <h1 className="text-lg mx-8 font-extrabold mt-2 w-2/2">{judul}</h1>
                        <p className="text-gray-500 mx-8 text-sm mt-2 w-2/2">{para}</p>

                    </div>
           
    </div>
  )
}

export default CardCollab