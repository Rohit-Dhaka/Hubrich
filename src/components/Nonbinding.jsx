import React from 'react'
import Bookbtn from './Bookbtn'
const Nonbinding = () => {
    return (
        <section className='bg-WhiteSmoke '>
            <div className='max-w-[1140px] mx-auto px-[12px]' >
                <div className='flex flex-row flex-wrap mx-[-12px] sm:pt-[71px] pt-[60px] pb-[59px] items-center'>
                    <div className='lg:w-7/12 w-full px-[12px]' data-aos="fade-up">
                        <h2 className='font-helvetica font-normal sm:text-[52px] text-[42px] sm:leading-[66px] leading-[56px]  uppercase max-w-[610px]'>Request your <span className="text-Orange text-nowrap">non-binding</span> strategy meeting now!</h2>
                    </div>
                    <div className='lg:w-5/12 w-full px-[12px] lg:pt-0 pt-3  flex lg:justify-end z-[1] ' data-aos="fade-up">
                        <h6 className=' font-poppins font-normal text-[16px] leading-[25px]  pl-[14px] lg:max-w-[412px] relative after:absolute after:top-[4px] after:bottom-[10px] after:left-0 after:w-[2px] after:h-full after:bg-Barneypurple '>Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics: </h6>
                    </div>
                </div>
            </div>
            <div className='bg-nonbinding  bg-cover bg-no-repeat bg-center'>
                <div className='max-w-[1140px] mx-auto px-[12px]' >
                    <div className="flex md:justify-center lg:pt-[111px] sm:pt-[80px] pt-[60px] max-md:overflow-x-scroll " data-aos="fade-up">
                        <div className="bg-lightgray duration-300  max-lg:min-w-[250px] max-w-[250px] px-[26px] pt-[61px] pb-[20px] h-[200px] hover:bg-blue">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] text-white'>How do I let go of my EX so I can finally leave him behind?</h6>
                        </div>
                        <div className="bg-lightgray duration-300  max-lg:min-w-[250px] max-w-[250px] px-[35px] pt-[61px] pb-[20px] h-[200px] hover:bg-blue">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] text-white'>How does the divorce process work?</h6>
                        </div>
                        <div className="bg-lightgray duration-300  max-lg:min-w-[250px] max-w-[250px] px-[26px] pt-[61px] pb-[20px] h-[200px] hover:bg-blue">
                            <h6 className='font-poppins font-normal text-[16px] lh-25 text-white'>Do I need a lawyer?</h6>
                        </div>
                    </div>
                    <div className="flex lg:justify-center pt-[34px] max-lg:overflow-x-scroll " data-aos="fade-up">
                        <div className="bg-lightgray duration-300  max-lg:min-w-[250px] max-w-[250px] px-[26px] pt-[61px] pb-[20px] h-[200px] hover:bg-blue">
                            <h6 className='font-poppins font-normal text-[16px] lh-25 text-white'>How much will the divorce cost?</h6>
                        </div>
                        <div className="bg-lightgray duration-300  max-lg:min-w-[250px] max-w-[250px] px-[26px] pt-[61px] pb-[20px] h-[200px] hover:bg-blue">
                            <h6 className='font-poppins font-normal text-[16px] lh-25 text-white'>What will happen to my children?</h6>
                        </div>
                        <div className="bg-lightgray duration-300  max-lg:min-w-[250px] max-w-[250px] px-[34px] pt-[61px] pb-[20px] h-[200px] hover:bg-blue">
                            <h6 className='font-poppins font-normal text-[16px] lh-25 text-white'>What does my future as a single person look like now?</h6>
                        </div>
                        <div className="bg-lightgray duration-300  max-lg:min-w-[250px] max-w-[250px] px-[26px] pt-[61px] pb-[20px] h-[200px] hover:bg-blue">
                            <h6 className='font-poppins font-normal text-[16px] lh-25 text-white'>How do I rebuild my self-esteem?</h6>
                        </div>
                    </div>
                    <div className="pt-[58px] lg:pb-[186px] sm:pb-[80px] pb-[60px] flex justify-center">
                        <Bookbtn />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Nonbinding