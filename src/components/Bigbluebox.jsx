import React from 'react'

const Bigbluebox = (props) => {
    return (
        <div className="bg-lightgray duration-300  max-lg:min-w-[250px] w-full max-w-[250px] px-[26px] pt-[61px] pb-[20px] h-[200px] hover:bg-blue">
            <h6 className='font-poppins font-normal text-[16px] lh-25 text-white'>{props.name}</h6>
        </div>
    )
}
export default Bigbluebox