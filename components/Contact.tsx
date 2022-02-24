import React from 'react'

const Contact = ({name}:any) => {
  return (
    <div className='w-10/12'>
        <input className='ring-1 ring-star-dust-500 w-full rounded-md px-4 py-3 mx-4 mt-6 outline-none text-lg font-nuni' type="text" placeholder={name} name={name} id={name} />
    </div>
)
}

export default Contact