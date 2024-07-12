import React from 'react'
import Group5 from '../assets/images/svg/Group5.svg'
import Bluebox from './Bluebox'
const YourfaltSection = () => {
    const data1 = [
        {
            title: "Your self-esteem is in the basement."
        },
        {
            title: "You keep asking yourself what you did wrong."
        },
        {
            title: "The feeling of helplessness is your constant companion."
        },
        {
            title: "You spend the nights alone and lonely."
        },
        {
            title: "You have stopped going out and spend the time crying in your room."
        },
        {
            title: "An emotional chaos is raging inside you."
        },
    ]
    return (
        <section className='relative overflow-hidden'>
             <div className=" absolute  right-0 top-[8%] max-sm:opacity-[20%]">
                    <img src={Group5} alt="group" />
                </div>

            <div className="max-w-[1140px] mx-auto px-[12px] 2xl:relative ">
               
                <div className=" absolute lg:top-[-10%] md:top-[0%] top-[42%]  ">
                    <div className="border-l-[2px] border-solid border-Orange w-[26px] sm:h-[269px] h-[80px] border-b-[2px] relative">
                        <p className=' absolute top-[-50px] left-[-20px]  font-poppins font-light text-[20px]  leading-[34px] rotate-[270deg] '>MJH</p>
                        <h6 className=' font-helvetica  font-normal text-[40px] leading-[51px] absolute  bottom-[-10px] left-[22px] rotate-[270deg]'>01</h6>
                        <h6 className=' uppercase font-helvetica text-[24px] leading-[30px] absolute bottom-[-10px] left-[64px]  '>fault</h6>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap mx-[-12px] lg:pt-[150px] sm:pt-[80px] pt-[60px]">
                    <div className="md:w-7/12 w-full px-[12px]" data-aos="zoom-in-up">
                        <div className="max-md:flex flex-col">
                            <h2 className='font-helvetica font-normal sm:text-[60px] text-[42px] sm:leading-[77px] leading-[56px] md:text-center'>IT'S NOT</h2>
                            <h2 className='font-helvetica font-normal sm:text-[60px] text-[42px] sm:leading-[77px] leading-[56px] md:text-end'><span className=" text-Orange">YOUR </span>FAULT!</h2>
                        </div>
                    </div>
                    <div className="md:w-5/12 w-full px-[12px] " data-aos="zoom-in-up">
                        <div className="pt-2.5 md:pl-[55px]">
                            <p className=' font-poppins font-normal text-[16px] leading-[25px]  ps-[11px] relative after:absolute after:top-0 after:left-0 after:w-[2px] after:h-full  after:bg-Barneypurple after:inline-block  max-w-[288px]'>It's not your fault for not knowing how to let go of the partner who no longer made you feel special.</p>
                        </div>
                    </div>
                </div>
                <h5 className='font-helvetica font-black text-[20px] leading-[28px] text-center pb-[34px] sm:pt-[58px] pt-[40px]'>How would you know when you are busy with completely different things at the moment:
                </h5>
            </div>
            <div className=" bg-fault bg-cover bg-no-repeat bg-center">
                <div className="max-w-[1000px] mx-auto max-xl:px-[12px]">
                    <div className="flex md:justify-end max-md:overflow-x-scroll" data-aos="zoom-in-up">
                        {data1.slice(0, 3).map((item) => <Bluebox name={item.title} />)}
                    </div>
                    <div className="flex pt-[29px] max-md:overflow-x-scroll" data-aos="zoom-in-up">
                        {data1.slice(3, 6).map((item) => <Bluebox name={item.title} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default YourfaltSection