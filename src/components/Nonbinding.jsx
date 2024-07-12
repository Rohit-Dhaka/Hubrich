import React from 'react'
import Bookbtn from './Bookbtn'
import Bigbluebox from './Bigbluebox'
const Nonbinding = () => {

    const Text = [
        {
            title: "How do I let go of my EX so I can finally leave him behind?"
        },
        {
            title: "How does the divorce process work?"
        },
        {
            title: "Do I need a lawyer?"
        },
        {
            title: "How much will the divorce cost?"
        },
        {
            title: "What will happen to my children?"
        },
        {
            title: "What does my future as a single person look like now?"
        },
        {
            title: "How do I rebuild my self-esteem?"
        },
    ]
    return (
        <section className='bg-WhiteSmoke '>
            <div className='max-w-[1140px] mx-auto px-[12px]' >

                <div className='flex flex-row flex-wrap mx-[-12px] sm:pt-[71px] pt-[60px] pb-[59px] items-center'>
                    <div className='lg:w-7/12 w-full px-[12px]' data-aos="fade-up">
                        <h2 className='font-helvetica font-normal sm:text-[52px] text-[42px] sm:leading-[66px] leading-[56px]  uppercase max-w-[610px]'>Request your <span className="text-Orange text-nowrap">non-binding</span> strategy meeting now!</h2>
                    </div>
                    <div className='lg:w-5/12 w-full px-[12px] lg:pt-0 pt-3  flex lg:justify-end z-[1] ' data-aos="fade-up">
                        <p className=' font-poppins font-normal text-[16px] leading-[25px]  pl-[14px] lg:max-w-[412px] relative after:absolute after:top-[4px] after:bottom-[10px] after:left-0 after:w-[2px] after:h-full after:bg-Barneypurple '>Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics: </p>
                    </div>
                </div>
            </div>
            <div className='bg-nonbinding  bg-cover bg-no-repeat bg-center'>
                <div className='max-w-[1140px] mx-auto px-[12px]' >
                    <div className="flex md:justify-center lg:pt-[111px] sm:pt-[80px] pt-[60px] max-md:overflow-x-scroll " data-aos="fade-up">
                        {Text.slice(0, 3).map((item) => <Bigbluebox name={item.title} />)}
                    </div>
                    <div className="flex lg:justify-center pt-[34px] max-lg:overflow-x-scroll " data-aos="fade-up">
                        {Text.slice(3, 7).map((item) => <Bigbluebox name={item.title} />)}
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