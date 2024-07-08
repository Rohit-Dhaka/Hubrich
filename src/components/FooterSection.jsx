import React from 'react'
import Email from '../assets/images/svg/email.svg'
import Instgram from '../assets/images/svg/instgram.svg'
import Twitter from '../assets/images/svg/twitter.svg'
import Facebook from '../assets/images/svg/facebook.svg'
import Footerbg from '../assets/images/webp/footer-bg.webp'




const FooterSection = () => {

    const d =  new Date();
    const Year =  d.getFullYear();
    return (
        <footer className='bg-[#003E92]  relative'>
            <div className=" absolute ">
                <img src={Footerbg} alt="footerbg" className='w-full' />
            </div>
            <div className="max-w-[1140px] w-full mx-auto px-[12px] relative">
                <div className="sm:absolute sm:right-[12px] sm:top-[94px] ">
                    <div className="flex gap-[12px] sm:flex-col max-sm:justify-center max-sm:pt-[60px] ">
                        <a href="https://www.facebook.com/" target='_blank' className=' hover:scale-[1.1] duration-300 ease-linear'> <img src={Facebook} alt="fackbook" /></a>
                        <a href="https://x.com/?lang=en" target='_blank' className='hover:scale-[1.1] duration-300 ease-linear'> <img src={Twitter} alt="twitter" /></a>
                        <a href="mailto:rohitdhaka2110@gmail.com" className='hover:scale-[1.1] duration-300 ease-linear'> <img src={Email} alt="email" /></a>
                        <a href="https://www.instagram.com/" target='_blank' className='hover:scale-[1.1] duration-300 ease-linear '> <img src={Instgram} alt="instgram" /></a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <h5 className='color-white  font-poppins text-[16px] leading-[25px]  max-w-[270px] text-center sm:pb-[95px] pb-[30px] lg:pt-[196px] sm:pt-[80px] pt-[60px]'>(c){Year} MARC JOACHIM HUBRICH All Rights Reserved</h5>
                </div>
            </div>
        </footer>
    )
}
export default FooterSection