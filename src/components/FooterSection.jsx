import React from 'react'
import Footerbg from '../assets/images/webp/footer-bg.webp'
import { Email, Facebook, Instgram, Twitter } from '../common/icon'




const FooterSection = () => {

    const d =  new Date();
    const Year =  d.getFullYear();
    return (
        <footer className='bg-blue  relative'>
            <div className=" absolute ">
                <img src={Footerbg} alt="footerbg" className='w-full' />
            </div>
            <div className="max-w-[1140px] w-full mx-auto px-[12px] relative">
                <div className="sm:absolute sm:right-[12px] sm:top-[94px] ">
                    <div className="flex gap-[12px] sm:flex-col max-sm:justify-center max-sm:pt-[60px] ">
                        <a href="https://www.facebook.com/" target='_blank' className=' hover:scale-[1.1] duration-300 ease-linear'>
                         
                         <Facebook/>
                         </a>
                        <a href="https://x.com/?lang=en" target='_blank' className='hover:scale-[1.1] duration-300 ease-linear'>
                         
                         <Twitter/>
                         </a>
                        <a href="mailto:rohitdhaka2110@gmail.com" className='hover:scale-[1.1] duration-300 ease-linear'> 
                            
                            <Email/>
                            </a>
                        <a href="https://www.instagram.com/" target='_blank' className='hover:scale-[1.1] duration-300 ease-linear '> 
                        
                        <Instgram/>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <h5 className='text-white  font-poppins text-[16px] leading-[25px]  max-w-[270px] text-center sm:pb-[95px] pb-[30px] lg:pt-[196px] sm:pt-[80px] pt-[60px]'>(c){Year} MARC JOACHIM HUBRICH All Rights Reserved</h5>
                </div>
            </div>
        </footer>
    )
}
export default FooterSection