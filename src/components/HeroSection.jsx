import React, { useState } from 'react'

import Bookbtn from './Bookbtn'
import Phoneicon from '../assets/images/svg/Phoneicon.svg'

import Group1 from '../assets/images/svg/group.svg'
import Logo from '../assets/images/svg/logo.svg'
const HeroSection = () => {
    const [show, setShow] = useState(false)

    if (show === true) {
        document.body.classList.add("overflow_hidden")
    }
    else {
        document.body.classList.remove("overflow_hidden")

    }
    return (
        <section className='relative overflow-hidden min-h-screen flex flex-col hero-img '>
            <div className=" absolute top-0 left-0 ">
                <img src={Group1} alt="group" />
            </div>
            {/* <div className="max-w-[791px] right-0 absolute  ">

                <img src={Heroimg} alt="heroimg" className='w-100' />
                <div className="vector top-0 absolute">
                    <img src={Vector} alt="vector" />
                </div>
            </div> */}
            <div className="navbar pt-[24px] z-[1] relative ">
                <div className='max-w-[1140px] mx-auto px-[12px]'>

                    <div className="flex justify-between items-center">

                        <div className="cursor-pointer">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className={`${show ? "navshow   " : ""}   menu flex gap-[40px] lg:items-center  max-lg:absolute max-lg:w-full max-lg:h-[100vh]  max-lg:bg-yellow-300 max-lg:top-0 max-lg:right-[-100%] max-lg:flex-col  max-lg:items-center max-lg:justify-center duration-300 z-[2]`}>
                            <ul className='flex max-lg:flex-col  max-lg:items-center gap-[40px] p-0 m-0'>
                                <li><a onClick={() => setShow(!show)} href="#benifits" className='color-white font-helvetica font-normal leading-[20px] text-[16px] '>Benifits</a></li>
                                <li><a onClick={() => setShow(!show)} href="#test" className='color-white font-helvetica font-normal leading-[20px] text-[16px] '>Testimonials</a></li>
                            </ul>
                            <button className='bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] py-[16px] px-[28px] font-inter font-medium text-[16px] leading-[24px] color-white border-0 hover:from-[#8703C5] hover:to-[#0C5FD1] hover:duration-300'>Book consultation now</button>
                        </div>
                        <div className={`${show ? "cross" : " "}  menuico  lg:hidden block z-10   `} onClick={() => setShow(!show)}>
                            <span className='bar h-[2px] w-[25px] bg-black block duration-300 ease-linear'></span>
                            <span className='bar h-[2px] w-[25px] bg-black block duration-300 ease-linear my-2'></span>
                            <span className='bar h-[2px] w-[25px] bg-black block duration-300 ease-linear'></span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='max-w-[1140px] mx-auto px-[12px] w-full flex flex-grow items-center'>
                
                    <div className='w-full  z-[1] relative pt- [160px]'>

                        <h6 className='font-normal text-[18px] leading-[24px] color-orange font-helvetica'>Marc joachim hubrich</h6>
                        <h1 className='font-normal  text-[60px] leading-[77px] font-helvetica  uppercase max-w-[480px]'>Now I let you go!</h1>
                        <h6 className=' font-poppins font-normal text-[16px] leading-[25px] opacity-[70%] pt-[7px] max-w-[517px]'>For women who do not want to be completely dragged down by a SEPARATION.</h6>
                        <h6 className='font-poppins font-normal text-[16px] leading-[25px] opacity-[70%] pb-[32px] max-w-[517px]'>How to let go of your EX so you can leave him behind without having to run to a therapist right away.</h6>
                        <div className="flex gap-[17px] pt-[32px] items-center">
                            <Bookbtn />
                            <div className="hover:animate-bounce">
                                <img src={Phoneicon} alt="phoneicon" className='cursor-pointer' />
                            </div>
                        </div>
                        <div className="pt-[63px] flex justify-end z-1  relative ">
                            <div className="flex pb-[44px]">
                                <h6 className=' font-helvetica  color-white font-normal text-[16px] leading-[27px]  ps-[13px] max-w-[170px] uppercase relative after:absolute after:top-[1px] after:left-0 after:w-[2px] after:h-full after:bg-Barneypurple after:inline-block '>Die wichtigsten Aspekte einer Trennung:</h6>
                                <div className="flex flex-col">
                                    <div className="flex">
                                        <div className="w-1 h-1 rounded-[50%] bg-white  m-[10px]"></div>
                                        <h6 className=' font-poppins font-medium fs-[16px] leading-[25px] color-white '>Physische Trennung</h6>
                                    </div>
                                    <div className="flex pt-[2px]">
                                        <div className="w-1 h-1 rounded-[50%] bg-white  m-[10px]"></div>
                                        <h6 className=' font-poppins font-medium fs-[16px] leading-[25px] color-white '>Mentale Trennung
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

