import React from 'react'
import Bookbtn from './Bookbtn'
import Flower from '../assets/images/svg/flower.svg'
import MessageIcon from '../assets/images/svg/MessageIcon.svg'
import Fafeflower from '../assets/images/svg/image21.svg'
import Fafeflowerleft from '../assets/images/svg/image22.svg'

const WillgetSection = () => {
    return (
        <section className=' relative overflow-hidden' id='benifits'>
            <div className=" absolute right-0  top-[40%]">
                <img src={Fafeflower} alt="fafeflower" />
            </div>
            <div className=" absolute left-0 bottom-[5%]">
                <img src={Fafeflowerleft} alt="fafeflower" />
            </div>
            <div className='max-w-[1140px] mx-auto px-[12px] relative'>
                <div className=" absolute  right-[1%] top-[8%]">
                    <div className="border-r-[2px] border-solid border-Orange w-[26px] h-[201px] border-b-[2px] relative">
                        <p className=' absolute top-[-50px] left-[5px]  font-poppins font-light text-[20px]  leading-[34px] rotate-[270deg] '>MJH</p>
                        <h6 className=' font-helvetica  font-normal text-[40px] leading-[51px] absolute  bottom-[-10px] left-[-40px]  rotate-[90deg]'>02</h6>
                    </div>
                </div>
                <h5 className=' font-poppins  font-medium text-[16px] leading-[25px]  pt-[47px] text-center '>You are not alone! Numerous women before you stood exactly at this point, where you are now.</h5>
                <div className="flex  justify-center pt-[20px] lg:pb-[122px] sm:pb-[80px] pb-[60px]">
                    <Bookbtn />
                </div>
                <div className="flex flex-row  flex-wrap mx-[-12px] items-center ">
                    <div className="lg:w-[50%] px-[12px] w-full" data-aos="zoom-out">
                        <div className="flex  gap-[12px]">
                            <h2 className='font-helvetica font-normal text-[52px]  leading-[66px]  uppercase max-w-[266px] sm:pt-[29px]'>what you will <span className="text-Orange">get</span></h2>
                            <div className="sm:max-w-[224px] ">
                                <img src={Flower} alt="flower" className='max-sm:max-w-[150px] w-full' />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%] px-[12px]" data-aos="zoom-out">
                        <h6 className=' font-poppins font-normal text-[16px] leading-[25px] ps-[12px] relative after:absolute after:top-0 after:left-0 after:w-[2px] after:h-full after:bg-Barneypurple after:inline-block  max-w-[426px]'>I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.</h6>
                    </div>
                </div>
                <h4 className='pt-[47px] font-helvetica font-bold text-[20px] leading-[28px]  text-center'>In a 1:1 live coaching session, we will clarify the following questions in particular:</h4>
                <div className="flex flex-row flex-wrap mx-[-12px] pt-[28px] lg:pb-[124px] sm:pb-[80px] pb-[60px]  relative">
                    <div className="lg:w-[33.33%] sm:w-[50%]" data-aos="fade-up">
                        <div className="sm:px-[48px] sm:pt-[63px] hover:bg-aliceblue duration-300 sm:h-[230px] group sm:pb-[63px] max-sm:p-[30px] ">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] group-hover:text-blue duration-300 opacity-[70%]  group-hover:opacity-[100%] capitalize'>Why does your EX have to disappear from your life forever?</h6>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%]" data-aos="fade-up">
                        <div className="sm:px-[48px] sm:pt-[63px] hover:bg-aliceblue duration-300 sm:h-[230px] group sm:pb-[63px] max-sm:p-[30px] ">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] group-hover:text-blue duration-300 opacity-[70%]  group-hover:opacity-[100%] capitalize '>What should your everyday life as a single person look like now and how can you cope with the new challenges?</h6>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%]" data-aos="fade-up">
                        <div className="sm:px-[37px] sm:pt-[63px] hover:bg-aliceblue duration-300 sm:h-[230px] group sm:pb-[63px] max-sm:p-[30px]">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] group-hover:text-blue duration-300 opacity-[70%]  group-hover:opacity-[100%] capitalize'>How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?
                            </h6>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%]" data-aos="fade-up">
                        <div className="sm:px-[48px] sm:pt-[63px] hover:bg-aliceblue duration-300 sm:h-[230px] group sm:pb-[63px] max-sm:py-[30px] max-sm:pl-[30px] max-sm:w-full">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] group-hover:text-blue duration-300 opacity-[70%]  group-hover:opacity-[100%]  capitalize'>Who are you without your EX?
                            </h6>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%]" data-aos="fade-up">
                        <div className="sm:px-[48px] sm:pt-[63px] hover:bg-aliceblue duration-300 sm:h-[230px] group sm:pb-[63px] max-sm:p-[30px]">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] group-hover:text-blue duration-300 opacity-[70%]  group-hover:opacity-[100%] capitalize'>What new dreams and hopes do you want to live?
                            </h6>
                        </div>
                    </div>
                    <div className="lg:w-[33.33%] sm:w-[50%] max-sm:px-3" data-aos="fade-up">
                        <div className="  sm:h-[230px] h-[150px] group flex justify-center items-center w-[292px] mx-auto">
                            <button class="h-[90px]  rounded-[8px] bg-gradient-to-r from-[#0C5FD1]  to-[#8703C5] p-[1.7px] max-w-[452px] flex">
                                <span class="flex gap-[6px] items-center py-[18px] ps-[9px] pe-[26px] w-full bg-white text-black rounded-[8px]  font-inter font-medium text-[16px] leading-[24px] ">
                                    <img src={MessageIcon} alt="messageicon" />
                                    <span class="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] inline-block text-transparent bg-clip-text">Book A Non-Binding Initial Consultation Now</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className=" absolute bottom-[5%]">
                        <div className="border-l-[2px] border-solid border-Orange w-[26px] h-[581px] border-b-[2px] relative">
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

