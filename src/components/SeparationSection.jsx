import React from 'react'
import Bookbtn from './Bookbtn'
import Group20 from '../assets/images/webp/Group20.webp'
import Group11 from '../assets/images/svg/Group11.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Nextarrow, Prearrow } from '../common/icon';
const SeparationSection = () => {
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className='next absolute bottom-[23px] left-4 sm:left-[22px] cursor-pointer z-[1] md:block hidden' onClick={onClick}>
                <Nextarrow />
            </div>
        );
    };
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className='prev absolute bottom-[23px] cursor-pointer -left-7 sm:-left-11 z-[1] md:block hidden' onClick={onClick}>
                <Prearrow />
            </div>
        );
    };
    var first = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                autoplay: true,
                autoplaySpeed: 2000,
              }
            },
        ],
        appendDots: dots => (
            <div
                style={{
                    position: 'absolute',
                    bottom: '16px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <ul style={{ margin: "0" }} className="custom-dots"> {dots} </ul>
            </div>
        ),
    };
    return (
        <section className='relative overflow-hidden' id='test'>
            <div className=" absolute left-0 top-[-54%]">
                <img src={Group11} alt="group" />
            </div>
            <div className='max-w-[1140px] mx-auto px-[12px] relative'>
                <div className=" absolute  right-[1%] sm:top-[7%] max-sm:bottom-[1%]" data-aos="flip-up">
                    <div className="border-r-[2px] border-solid border-Orange w-[26px] h-[201px] border-b-[2px] relative">
                        <p className=' absolute top-[-50px] sm:left-[5px]  font-poppins font-light text-[20px]  leading-[34px] rotate-[270deg] '>MJH</p>
                        <h6 className=' font-helvetica  font-normal text-[40px] leading-[51px] absolute  bottom-[-10px] left-[-40px]  rotate-[270deg]'>04</h6>
                        <h6 className=' uppercase font-helvetica text-[24px] leading-[30px] absolute bottom-[-10px] left-[-145px] text-nowrap '>analysis</h6>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap-reverse mx-[-12px] lg:pb-[186px] sm:pb-[80px] pb-[60px] lg:pt-[302px] sm:pt-[80px] pt-[60px]" data-aos="flip-up">
                    <div className="md:w-6/12 w-full px-[12px] md:pt-0 pt-4"> 
                        <h6 className='font-helvetica font-normal text-[29px] leading-[37px] pt-[36px]'>THE FOUR PHASES OF</h6>
                        <h2 className='font-helvetica font-normal leading-[62px] text-[52px] md:max-w-[327px]'>SEPARATION<span className="t  ext-Orange"> MINDSET</span></h2>
                        <p className=' font-poppins font-normal text-[16px] leading-[25px]  opacity-[70%] pt-[19px] pb-[36px] max-w-[490px]'>There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.</p>
                        <Bookbtn />
                    </div>
                    <div className="md:w-6/12 w-full  px-[12px]">
                        <Slider {...first} className=''>
                            <div>
                                <div className="bg-blue h-full relative flex flex-col justify-center items-center py-[133px] md:h-[448px]">
                                    <div className=" absolute bottom-0 right-0">
                                        <img src={Group20} alt="group" />
                                    </div>
                                    <h4 className=' font-poppins font-medium text-[20px] leading-[32px] text-white text-center  max-w-[316px]'>1st phase
                                        "The not-wanting-to-be-true"</h4>
                                    <p className=' font-poppins font-normal text-[16px] leading-[25px] text-center text-white pt-[15px] max-w-[364px]'>This phase is characterized by denial and ignoring the final separation.</p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-blue h-full relative flex flex-col justify-center items-center py-[133px] md:h-[448px]">
                                    <div className=" absolute bottom-0 right-0">
                                        <img src={Group20} alt="group" />
                                    </div>
                                    <h4 className=' font-poppins font-medium text-[20px] leading-[32px] text-white text-center  max-w-[316px]'>2st phase
                                        "The not-wanting-to-be-true"</h4>
                                    <p className=' font-poppins font-normal text-[16px] leading-[25px] text-center text-white pt-[15px] max-w-[364px]'>This phase is characterized by denial and ignoring the final separation.</p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-blue h-full relative flex flex-col justify-center items-center py-[133px] md:h-[448px]">
                                    <div className=" absolute bottom-0 right-0">
                                        <img src={Group20} alt="group" />
                                    </div>
                                    <h4 className=' font-poppins font-medium text-[20px] leading-[32px] text-white text-center  max-w-[316px]'>3st phase
                                        "The not-wanting-to-be-true"</h4>
                                    <p className=' font-poppins font-normal text-[16px] leading-[25px] text-center text-white pt-[15px] max-w-[364px]'>This phase is characterized by denial and ignoring the final separation.</p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-blue h-full relative flex flex-col justify-center items-center py-[133px] md:h-[448px]">
                                    <div className=" absolute bottom-0 right-0">
                                        <img src={Group20} alt="group" />
                                    </div>
                                    <h4 className=' font-poppins font-medium text-[20px] leading-[32px] text-white text-center  max-w-[316px]'>4st phase
                                        "The not-wanting-to-be-true"</h4>
                                    <p className=' font-poppins font-normal text-[16px] leading-[25px] text-center text-white pt-[15px] max-w-[364px]'>This phase is characterized by denial and ignoring the final separation.</p>
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