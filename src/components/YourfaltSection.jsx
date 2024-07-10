import React from 'react'
import Group5 from '../assets/images/svg/Group5.svg'
const YourfaltSection = () => {
    return (
        <section className=' relative '>
            <div className=" absolute right-0 top-[8%]">
                <img src={Group5} alt="group" />
            </div>
            <div className="max-w-[1140px] mx-auto px-[12px]">
                <div className=" absolute sm:top-[-10%] top-[5%]">
                    <div className="border-l-[2px] border-solid border-Orange w-[26px] sm:h-[269px] h-[100px] border-b-[2px] relative">
                        <p className=' absolute top-[-50px] left-[-20px]  font-poppins font-light text-[20px]  leading-[34px] rotate-[270deg] '>MJH</p>
                        <h6 className=' font-helvetica  font-normal text-[40px] leading-[51px] absolute  bottom-[-10px] left-[22px]  rotate-[270deg]'>01</h6>
                        <h6 className=' uppercase font-helvetica text-[24px] leading-[30px] absolute bottom-[-10px] left-[64px] '>fault</h6>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap mx-[-12px] lg:pt-[150px] sm:pt-[80px] pt-[60px]">
                    <div className="md:w-7/12 w-full px-[12px]" data-aos="zoom-in-up">
                        <h2 className='font-helvetica font-normal text-[60px] leading-[77px] text-center'>IT'S NOT</h2>
                        <h2 className='font-helvetica font-normal text-[60px] leading-[77px] text-end'><span className=" text-Orange">YOUR </span>FAULT!</h2>
                    </div>
                    <div className="md:w-5/12 w-full px-[12px] " data-aos="zoom-in-up">
                        <div className="pt-2.5 pl-[55px]">
                            <h6 className=' font-poppins font-normal text-[16px] leading-[25px]  ps-[11px] relative after:absolute after:top-0 after:left-0 after:w-[2px] after:h-full  after:bg-Barneypurple after:inline-block  max-w-[288px]'>It's not your fault for not knowing how to let go of the partner who no longer made you feel special.</h6>
                        </div>
                    </div>
                </div>
                <h5 className='font-helvetica font-black text-[20px] leading-[28px] text-center pb-[34px] pt-[58px]'>How would you know when you are busy with completely different things at the moment:
                </h5>
            </div>
            <div className=" bg-fault bg-cover bg-no-repeat bg-center">
                <div className="max-w-[1000px] mx-auto max-xl:px-[12px]">
                    <div className="flex md:justify-end max-md:overflow-x-scroll" data-aos="zoom-in-up">
                        <div className="md:max-w-[250px] min-w-[250px] bg-steelblue px-[26px] py-[45px] h-[169px] hover:bg-blue duration-300  backdrop-blur-[3px]">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] text-white'>Your self-esteem is in the basement.</h6>
                        </div>
                        <div className="md:max-w-[250px] min-w-[250px] bg-steelblue px-[26px] py-[45px] h-[169px] hover:bg-blue duration-300 backdrop-blur-[3px]">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] text-white'>You keep asking yourself what you did wrong.
                            </h6>
                        </div>
                        <div className="md:max-w-[250px] min-w-[250px] bg-steelblue px-[26px] py-[45px] h-[169px] hover:bg-blue duration-300 backdrop-blur-[3px]">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] text-white'>The feeling of helplessness is your constant companion.</h6>
                        </div>
                    </div>
                    <div className="flex pt-[29px] max-md:overflow-x-scroll" data-aos="zoom-in-up">
                        <div className="md:max-w-[250px] min-w-[250px] bg-steelblue px-[26px] py-[45px] h-[169px] hover:bg-blue duration-300 backdrop-blur-[3px]">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] text-white'>You spend the nights alone and lonely.
                            </h6>
                        </div>
                        <div className="md:max-w-[250px] min-w-[250px] bg-steelblue px-[26px] py-[45px] h-[169px] hover:bg-blue duration-300 backdrop-blur-[3px]">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] text-white'>You have stopped going out and spend the time crying in your room.</h6>
                        </div>
                        <div className="md:max-w-[250px] min-w-[250px] bg-steelblue px-[37px] py-[45px] h-[169px] hover:bg-blue duration-300 backdrop-blur-[3px] ">
                            <h6 className='font-poppins font-normal text-[16px] leading-[25px] text-white'>An emotional chaos is raging inside you.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default YourfaltSection