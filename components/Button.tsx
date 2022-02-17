import React from 'react'

const Button = ({children}:any) => {
  return (
    <a className='border border-puerto-rico-500 text-puerto-rico-500 py-3 px-4 rounded-lg'>
        {children}
    </a>
  )
}

export default Button