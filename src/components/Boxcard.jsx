import React from 'react'
const Boxcard = (props) => {
    return (
        <div className="lg:w-[33.33%] sm:w-[50%]" data-aos="fade-up">
            <div className='sm:px-[48px] sm:pt-[63px] hover:bg-aliceblue duration-300 sm:h-[230px] group sm:pb-[63px] max-sm:p-[30px]'>
                <h5 className='font-poppins font-normal text-[16px] leading-[25px] group-hover:text-blue duration-300 opacity-[70%]  group-hover:opacity-[100%] capitalize'>
                    {props.name}
                </h5>
            </div>
        </div>
    )
}
export default Boxcard