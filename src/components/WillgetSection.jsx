import React from 'react'
import Bookbtn from './Bookbtn'
import Flower from '../assets/images/svg/flower.svg'
import MessageIcon from '../assets/images/svg/MessageIcon.svg'
import Fafeflower from '../assets/images/svg/image21.svg'
import Fafeflowerleft from '../assets/images/svg/image22.svg'

const WillgetSection = () => {
    return (
        <section className=' relative' id='benifits'>
            <div className=" absolute right-0  top-[40%]">
                <img src={Fafeflower} alt="fafeflower" />
            </div>
            <div className=" absolute left-0 bottom-[5%]">
                <img src={Fafeflowerleft} alt="fafeflower" />
            </div>
            <div className='max-w-[1140px] mx-auto px-[12px] relative'>
            <div className=" absolute  right-[1%] top-[8%]">
                    <div className="border-r-[2px] border-solid border-[#F77B0B] w-[26px] h-[201px] border-b-[2px] relative">
                        <p className=' absolute top-[-50px] left-[5px]  font-poppins font-light text-[20px]  leading-[34px] rotate-[270deg] '>MJH</p>
                        <h6 className=' font-helvetica  font-normal text-[40px] leading-[51px] absolute  bottom-[-10px] left-[-40px]  rotate-[90deg]'>02</h6>
                      
                    </div>
                </div>
                <h5 className=' font-poppins font-normal text-[16px] leading-[25px]  pt-[47px] text-center '>You are not alone! Numerous women before you stood exactly at this point, where you are now.</h5>
                <div className="flex  justify-center pt-[20px] lg:pb-[122px] sm:pb-[80px] pb-[60px]">
                    <Bookbtn />
                </div>
                <div className="flex flex-row  flex-wrap mx-[-12px] items-center ">
                    <div className="lg:w-[50%] px-[12px] w-full">
                        <div className="flex  gap-[12px]">
                            <h2 className='font-helvetica font-normal text-[52px]  leading-[66px]  uppercase max-w-[266px] sm:pt-[29px]'>what you will <span className="color-orange">get</span></h2>
                            <div className="sm:max-w-[224px] ">

                                <img src={Flower} alt="flower" className='max-sm:max-w-[150px] w-full' />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%] px-[12px]">


                        <h6 className=' font-poppins font-normal text-[16px] leading-[25px] ps-[12px] relative after:absolute after:top-0 after:left-0 after:w-[2px] after:h-full after:bg-Barneypurple after:inline-block  '>I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.</h6>
                    </div>
                </div>

                <h4 className='pt-[47px] font-helvetica font-normal text-[20px] leading-[28px]  text-center'>In a 1:1 live coaching session, we will clarify the following questions in particular:</h4>
                <div className="flex flex-row flex-wrap mx-[-12px] pt-[28px] lg:pb-[124px] sm:pb-[80px] pb-[60px]  relative">
                    <div className="lg:w-[33.33%] sm:w-[50%]">
                        <div className="px-[48px] pt-[63px] hover:bg-[#F5FAFF] duration-300 h-[230px] group pb-[63px]">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] group-hover:text-[#003E92] duration-300'>Why does your EX have to disappear from your life forever?</h6>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%]">
                        <div className="px-[48px] pt-[63px] hover:bg-[#F5FAFF] duration-300 h-[230px] group pb-[63px]">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] group-hover:text-[#003E92] duration-300'>What should your everyday life as a single person look like now and how can you cope with the new challenges?</h6>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%]">
                        <div className="px-[48px] pt-[63px] hover:bg-[#F5FAFF] duration-300 h-[230px] group pb-[63px]">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] group-hover:text-[#003E92] duration-300'>How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?
                            </h6>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%]">
                        <div className="px-[48px] pt-[63px] hover:bg-[#F5FAFF] duration-300 h-[230px] group pb-[63px]">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] group-hover:text-[#003E92] duration-300'>Who are you without your EX?
                            </h6>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%]">
                        <div className="px-[48px] pt-[63px] hover:bg-[#F5FAFF] duration-300 h-[230px] group pb-[63px]">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] group-hover:text-[#003E92] duration-300'>What new dreams and hopes do you want to live?
                            </h6>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%]">
                        <div className="  h-[230px] group flex justify-center items-center">
                            <button class="bg-gradient-to-tr from-blue-500 to-purple-500 color-white font-semibold rounded-[8px] p-[1.7px] max-w-[296px]">
                                <span class="flex gap-[6px] items-center py-[18px] ps-[9px] pe-[26px] w-full bg-white text-black rounded-[8px]  font-inter font-medium text-[16px] leading-[24px] ">
                                    <img src={MessageIcon} alt="messageicon" />
                                    <span class="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] inline-block text-transparent bg-clip-text">Book A Non-Binding Initial Consultation Now</span>

                                </span>
                            </button>
                        </div>
                    </div>
                    <div className=" absolute bottom-[10%]">

                        <div className="border-l-[2px] border-solid border-[#F77B0B] w-[26px] h-[581px] border-b-[2px] relative">                          
                            <h6 className=' font-helvetica  font-normal text-[40px] leading-[51px] absolute  bottom-[-10px] left-[22px]  rotate-[270deg]'>03</h6>
                            <h6 className=' uppercase font-helvetica text-[24px] leading-[30px] absolute bottom-[-10px] left-[64px] '>Goal</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WillgetSection

