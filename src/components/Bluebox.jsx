import React from 'react'

const Bluebox = (props) => {
  return (
    <div className='md:max-w-[250px] min-w-[250px] bg-steelblue px-[26px] py-[45px] h-[169px] hover:bg-blue duration-300  backdrop-blur-[3px]'>
      <h6 className='font-poppins font-normal text-[16px] leading-[25px] text-white'>{props.name}</h6>
    </div>
  )
}

export default Bluebox