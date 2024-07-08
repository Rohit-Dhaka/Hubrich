import React from 'react'
import Unsplash from '../assets/images/webp/unsplash.webp'
import Arrow from '../assets/images/svg/arrow.svg'
import Group71 from '../assets/images/svg/Group71.svg'
const LawyerSection = () => {
    return (
        <section>
            <div className="max-w-[1140px] mx-auto px-[12px] relative">
                <div className=" absolute lg:right-[0%] bottom-0">
                    <img src={Group71} alt="group" className='w-full' />
                </div>
                <div className=" absolute top-[2%] ">
                    <div className="border-l-[2px] border-solid border-[#F77B0B] w-[26px] h-[167px] border-b-[2px] relative">
                        <h6 className=' font-helvetica  font-normal text-[40px] leading-[51px] absolute  bottom-[-10px] left-[22px]  rotate-[270deg]'>05</h6>
                        <h6 className=' uppercase font-helvetica text-[24px] leading-[30px] absolute bottom-[-10px] left-[64px] text-nowrap '>about</h6>
                    </div>
                </div>
                <div className="flex flex-wrap flex-row mx-[-12px] lg:pt-[239px] sm:pt-[80px] pt-[60px] ">

                    <div className="lg:w-[50%] w-full px-[12px]">
                        <img src={Unsplash} alt="unsplash" className='w-full' />

                    </div>
                    <div className="lg:w-[50%] w-full px-[12px] z-[1]">
                        <div className="">
                            <h2 className='font-helvetica font-normal text-[52px] leading-[66px] '>LAWYER <span className="text-[#F77B0B]">&</span> DIVORCE COACH</h2>
                            <h5 className=' uppercase font-helvetica font-normal text-[36px] leading-[47px]  '><span className="text-[#F77B0B]">M</span>arc <span className="text-[#F77B0B]">J</span>oachim <span className="text-[#F77B0B]">H</span>ubrich</h5>
                            <h4 className='font-helvetica font-normal text-[20px] leading-[28px] pt-[30px]'>About the mindset agency coach</h4>
                            <h6 className='pt-[12px] font-poppins font-normal text-[16px] leading-[25px] opacity-[70%]  pb-[35px]'>Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</h6>
                            <button class="bg-gradient-to-tr from-blue-500 to-purple-500 text-white font-semibold rounded-[63px] p-[1.7px]">
                                <span class="flex gap-1 items-center py-[16px] px-[32px]  w-full bg-white text-black rounded-[63px]  font-inter font-medium text-[16px] leading-[24px] ">
                                    <span class="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] inline-block text-transparent bg-clip-text pe-[12px]">Learn more about the agency</span>
                                    <img src={Arrow} alt="arrow" />
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

