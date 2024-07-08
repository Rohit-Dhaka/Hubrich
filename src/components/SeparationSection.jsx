import React, { Component } from 'react'
import Bookbtn from './Bookbtn'
import Group20 from '../assets/images/webp/Group20.webp'
import Group11 from '../assets/images/svg/Group11.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const SeparationSection = () => {
    var first = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,


    };



    return (
        <section className='relative' id='test'>
            <div className=" absolute left-0 top-[-50%]">
                <img src={Group11} alt="group" />
            </div>
            <div className='max-w-[1140px] mx-auto px-[12px] relative'>
                <div className=" absolute  right-[1%] top-[8%]">
                    <div className="border-r-[2px] border-solid border-[#F77B0B] w-[26px] h-[201px] border-b-[2px] relative">
                        <p className=' absolute top-[-50px] left-[5px]  font-poppins font-light text-[20px]  leading-[34px] rotate-[270deg] '>MJH</p>
                        <h6 className=' font-helvetica  font-normal text-[40px] leading-[51px] absolute  bottom-[-10px] left-[-40px]  rotate-[270deg]'>04</h6>
                        <h6 className=' uppercase font-helvetica text-[24px] leading-[30px] absolute bottom-[-10px] left-[-145px] text-nowrap '>analysis</h6>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap-reverse mx-[-12px] lg:pb-[186px] sm:pb-[80px] pb-[60px] lg:pt-[302px] sm:pt-[80px] pt-[60px]">
                    <div className="md:w-6/12 w-full px-[12px] md:pt-0 pt-4">
                        <h6 className='font-helvetica font-normal text-[29px] leading-[37px]'>THE FOUR PHASES OF</h6>
                        <h2 className='font-helvetica font-normal leading-[62px] text-[52px] max-w-[327px]'>SEPARATION<span className="color-orange"> MINDSET</span></h2>
                        <h5 className=' font-poppins font-normal text-[16px] leading-[25px]  opacity-[70%] pt-[19px] pb-[36px] max-w-[455px]'>There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.</h5>
                        <Bookbtn />
                    </div>
                    <div className="md:w-6/12 w-full  px-[12px]">
                        {/* <button className='pre'>pre</button> */}
                        {/* <button className='next'>next</button> */}
                        <Slider {...first}>
                            <div>
                                <div className="bg-[#003E92] h-full relative flex flex-col justify-center items-center py-[133px]">
                                    <div className=" absolute bottom-0 right-0">
                                        <img src={Group20} alt="group" />
                                    </div>
                                    <h4 className=' font-poppins font-medium text-[20px] leading-[32px] color-white text-center  max-w-[316px]'>1st phase
                                        "The not-wanting-to-be-true"</h4>
                                    <h6 className=' font-poppins font-normal text-[16px] leading-[25px] text-center color-white pt-[15px] max-w-[364px]'>This phase is characterized by denial and ignoring the final separation.</h6>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#003E92] h-full relative flex flex-col justify-center items-center py-[133px]">
                                    <div className=" absolute bottom-0 right-0">
                                        <img src={Group20} alt="group" />
                                    </div>
                                    <h4 className=' font-poppins font-medium text-[20px] leading-[32px] color-white text-center  max-w-[316px]'>1st phase
                                        "The not-wanting-to-be-true"</h4>
                                    <h6 className=' font-poppins font-normal text-[16px] leading-[25px] text-center color-white pt-[15px] max-w-[364px]'>This phase is characterized by denial and ignoring the final separation.</h6>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#003E92] h-full relative flex flex-col justify-center items-center py-[133px]">
                                    <div className=" absolute bottom-0 right-0">
                                        <img src={Group20} alt="group" />
                                    </div>
                                    <h4 className=' font-poppins font-medium text-[20px] leading-[32px] color-white text-center  max-w-[316px]'>1st phase
                                        "The not-wanting-to-be-true"</h4>
                                    <h6 className=' font-poppins font-normal text-[16px] leading-[25px] text-center color-white pt-[15px] max-w-[364px]'>This phase is characterized by denial and ignoring the final separation.</h6>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#003E92] h-full relative flex flex-col justify-center items-center py-[133px]">
                                    <div className=" absolute bottom-0 right-0">
                                        <img src={Group20} alt="group" />
                                    </div>
                                    <h4 className=' font-poppins font-medium text-[20px] leading-[32px] color-white text-center  max-w-[316px]'>1st phase
                                        "The not-wanting-to-be-true"</h4>
                                    <h6 className=' font-poppins font-normal text-[16px] leading-[25px] text-center color-white pt-[15px] max-w-[364px]'>This phase is characterized by denial and ignoring the final separation.</h6>
                                </div>
                            </div>

                        </Slider>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default SeparationSection 