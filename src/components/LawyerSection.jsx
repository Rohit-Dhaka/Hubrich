import React from 'react'
import Unsplash from '../assets/images/webp/unsplash.webp'
import Arrow from '../assets/images/svg/arrow.svg'
import Group71 from '../assets/images/svg/Group71.svg'
const LawyerSection = () => {
    return (
        <section className=" relative">
            <div className=" absolute bottom-0 2xl:right-[10%] right-0">
                <img src={Group71} alt="group" className='w-full max-lg:opacity-[30%]' />
            </div>
            <div className="max-w-[1140px] mx-auto px-[12px] relative">
                <div className=" absolute sm:top-[2%] lg:left-[2%] left-[2px] max-sm:bottom-[-5%]">
                    <div className="border-l-[2px] border-solid border-Orange w-[26px] h-[167px] border-b-[2px] relative">
                        <h6 className=' font-helvetica  font-normal text-[40px] leading-[51px] absolute  bottom-[-10px] left-[22px]  rotate-[270deg]'>05</h6>
                        <h6 className=' uppercase font-helvetica text-[24px] leading-[30px] absolute bottom-[-10px] left-[64px] text-nowrap '>about</h6>
                    </div>
                </div>
                <div className="flex flex-wrap flex-row mx-[-12px] lg:pt-[239px] sm:pt-[80px] pt-[60px] ">
                    <div className="lg:w-[50%] w-full px-[12px]" data-aos="fade-up">                        
                        <img src={Unsplash} alt="unsplash" className='w-full sm:h-[574px] mx-auto max-w-[559px]' />                        
                    </div>
                    <div className="lg:w-[50%] w-full px-[12px] z-[1] lg:pt-0 pt-4" data-aos="fade-up">
                        <div className="lg:pl-[37px]">
                            <h2 className='font-helvetica font-normal sm:text-[52px] text-[42px] leading-[66px] '>LAWYER <span className="text-Orange">&</span> DIVORCE COACH</h2>
                            <h5 className=' uppercase font-helvetica font-normal text-[36px] leading-[47px]  '><span className="text-Orange">M</span>arc <span className="text-Orange">J</span>oachim <span className="text-Orange">H</span>ubrich</h5>
                            <h4 className='font-helvetica font-bold text-[20px] leading-[28px] pt-[30px] capitalize'>About the mindset agency coach</h4>
                            <h6 className='pt-[12px] font-poppins font-normal text-[16px] leading-[25px] opacity-[70%]  pb-[35px]'>Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</h6>
                            <button class="h-[59px]  rounded-[60px] bg-gradient-to-r from-LightSky  to-Indigo p-[1.7px] group max-w-[350px] hover:shadow-buttonshadow duration-300">
                                <span class="flex gap-3 h-full w-full items-center justify-center bg-white  rounded-[63px] py-[16px] px-[32px]">                                    
                                    <span class="bg-gradient-to-r from-LightSky to-Indigo inline-block text-transparent bg-clip-text">Learn more about the agency</span>
                                    <span className=" group-hover:translate-x-[6px] duration-300">
                                        <img src={Arrow} alt="arrow" />
                                    </span>
                                </span>
                            </button>                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LawyerSection

