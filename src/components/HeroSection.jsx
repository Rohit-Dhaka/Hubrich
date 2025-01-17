import React, { useState } from 'react'
import Bookbtn from './Bookbtn'
import Group1 from '../assets/images/svg/group.svg'
import { Phoneicon } from '../common/icon'
const HeroSection = () => {
    const [show, setShow] = useState(false)
    if (show === true) {
        document.body.classList.add("overflow_hidden")
    }
    else {
        document.body.classList.remove("overflow_hidden")
    }
    return (
        <section className='relative  bg-hero  bg-cover bg-no-repeat sm:bg-center bg-start'>
            <div className=" absolute sm:top-0 sm:left-0  top-[-10%] left-[-10%]">
                <img src={Group1} alt="group" />
            </div>
            <div className="navbar pt-[24px] z-[1] relative " data-aos="fade-down">
                <div className='max-w-[1140px] mx-auto px-[12px]'>
                    <div className="flex justify-end items-center">

                        <div className={`${show ? "navshow   " : ""}   menu flex gap-[40px] lg:items-center  max-lg:absolute max-lg:w-full max-lg:h-[100vh]  max-lg:bg-blue max-lg:top-0 max-lg:left-[-100%] max-lg:flex-col  max-lg:items-center max-lg:justify-center duration-300 z-[2]`}>
                            <ul className='flex max-lg:flex-col  max-lg:items-center gap-[40px] p-0 m-0'>                                
                                <li><a onClick={() => setShow(!show)} href="#benifits" className='text-white font-helvetica font-normal leading-[20px] text-[16px] hover:text-blue duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-blue after:hover:w-full after:duration-300'>Benifits</a></li>
                                <li><a onClick={() => setShow(!show)} href="#test" className='text-white font-helvetica font-normal leading-[20px] text-[16px] hover:text-blue duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-blue after:hover:w-full after:duration-300'>Testimonials</a></li>
                            </ul>
                            <button className='bg-gradient-to-r from-LightSky to-Indigo py-[16px] px-[28px] font-inter font-medium text-[16px] leading-[24px] text-white border-0 hover:from-Indigo hover:to-LightSky hover:duration-300'>Book Consultation NFow</button>
                        </div>
                        <div className={`${show ? "cross" : " "}  menuico  lg:hidden block z-10  cursor-pointer  `} onClick={() => setShow(!show)}>
                            <span className='bar h-[2px] w-[25px] bg-black block duration-300 ease-linear'></span>
                            <span className='bar h-[2px] w-[25px] bg-black block duration-300 ease-linear my-2'></span>
                            <span className='bar h-[2px] w-[25px] bg-black block duration-300 ease-linear'></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1140px] mx-auto px-[12px] w-full flex flex-grow items-center'>
                <div className='w-full    sm:pt-[160px] pt-[100px]' data-aos="zoom-in">                    
                    <h6 className='font-normal text-[18px] leading-[24px] text-Orange font-helvetica'>Marc joachim hubrich</h6>
                    <h1 className='font-normal  sm:text-[60px] text-[48px]  sm:leading-[77px] leading-[60px] font-helvetica  uppercase max-w-[480px]'>Now I let you go!</h1>
                    <p className=' font-poppins font-normal text-[16px] leading-[25px] opacity-[70%] pt-[7px] max-w-[517px]'>For women who do not want to be completely dragged down by a SEPARATION.</p>
                    <p className='font-poppins font-normal text-[16px] leading-[25px] opacity-[70%] sm:pb-[32px] max-w-[517px]'>How to let go of your EX so you can leave him behind without having to run to a therapist right away.</p>
                    <div className="flex gap-[17px] pt-[32px] items-center">
                        <Bookbtn />
                        <a href="tel:+9823387562" className="cursor-pointer"><Phoneicon /></a>
                    </div>
                    <div className="sm:pt-[63px] pt-[50px] flex sm:justify-end z-1  relative ">
                        <div className="flex pb-[44px]">
                            <h6 className=' font-helvetica  sm:text-white font-normal text-[16px] leading-[27px]  ps-[13px] max-w-[170px] uppercase relative after:absolute after:top-[1px] after:left-0 after:w-[2px] after:h-full after:bg-Barneypurple after:inline-block '>Die wichtigsten Aspekte einer Trennung:</h6>
                            <div className="flex flex-col">
                                <div className="flex">
                                    <div className="w-1 h-1 rounded-[50%] sm:bg-white bg-black  m-[10px]"></div>
                                    <h6 className=' font-poppins font-medium fs-[16px] leading-[25px] sm:text-white '>Physische Trennung</h6>
                                </div>
                                <div className="flex pt-[2px]">
                                    <div className="w-1 h-1 rounded-[50%] sm:bg-white bg-black  m-[10px]"></div>
                                    <h6 className=' font-poppins font-medium fs-[16px] leading-[25px] sm:text-white '>Mentale Trennung
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection