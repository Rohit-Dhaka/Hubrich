import React from "react";
import Dp from '../assets/images/svg/dp.svg'

import Slider from "react-slick";



const ClientsSection = () => {
  const verticalslider = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  };



  return (
    <section>

      <div className="max-w-[1140px] mx-auto px-[12px] relative">
        <div className=" absolute right-0 ">
          <div className="border-r-[2px] border-solid border-[#F77B0B] w-[26px] h-[201px] border-b-[2px] relative">
            <p className=' absolute top-[-50px] left-[5px]  font-poppins font-light text-[20px]  leading-[34px] rotate-[270deg] '>MJH</p>
            <h6 className=' font-helvetica  font-normal text-[40px] leading-[51px] absolute  bottom-[-13px] left-[-43px]  rotate-[90deg]'>06</h6>

          </div>
        </div>
        <div className="lg:pt-[202px] sm:pt-[160px] pt-[120px]">
          <h2 className=' uppercase font-helvetica font-medium text-[52px] leading-[66px] text-center'>What our <span className="color-orange">clients</span> say</h2>
        </div>
        <div className="slider-container overflow-hidden">
          <Slider {...verticalslider}>
            <div>
              <div className="max-w-[820px]  mx-auto lg:pb-[226px]  sm:pb-[80px] pb-[60px] pt-[84px]">
                <div className="w-full sm:pt-[58px] pt-[40px] pb-[32px]  sm:px-[50px] px-[36px]  shadow-clientsbox relative ">
                  <div className=" absolute top-[-55px] translate-x-[-50%] left-[50%]">
                    <img src={Dp} alt="dp" />
                  </div>
                  <h5 className='font-poppins font-medium text-[16px] leading-[25px] text-center opacity-[70%]'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </h5>
                  <h4 className='font-poppins font-medium text-[16px] leading-[25px] pt-4 text-center'>Marrie James-CEO</h4>
                  <h6 className=' font-poppins text-[16px] leading-[25px] text-center'>Limana Enterprises, CA</h6>

                </div>
                <div className="flex max-sm:flex-col gap-4 pt-4">
                  <div className=" shadow-clientsbox px-9 pt-[25px] pb-[31px]">
                    <h6 className=' opacity-[70%]  font-poppins font-normal text-[16px] leading-[25px]  text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</h6>
                    <h4 className='font-poppins font-medium text-[16px] leading-[25px] pt-[19px] text-center'>Ralph Edwards-CEO</h4>
                    <h6 className=' font-poppins text-[16px] leading-[25px] text-center pt-[2px]'>Limana Enterprises, CA</h6>
                  </div>
                  <div className=" shadow-clientsbox px-9 pt-[25px] pb-[31px]">
                    <h6 className=' opacity-[70%]  font-poppins font-normal text-[16px] leading-[25px]  text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</h6>
                    <h4 className='font-poppins font-medium text-[16px] leading-[25px] pt-[19px] text-center'>Darrell Steward-Head</h4>
                    <h6 className=' font-poppins text-[16px] leading-[25px] text-center pt-[2px]'>Limana Enterprises, CA</h6>
                  </div>
                </div>

              </div>

            </div>
            <div>
              <div className="max-w-[820px]  mx-auto lg:pb-[226px]  sm:pb-[80px] pb-[60px] pt-[84px]">
                <div className="w-full sm:pt-[58px] pt-[40px] pb-[32px]  sm:px-[50px] px-[36px]  shadow-clientsbox relative ">
                  <div className=" absolute top-[-55px] translate-x-[-50%] left-[50%]">
                    <img src={Dp} alt="dp" />
                  </div>
                  <h5 className='font-poppins font-medium text-[16px] leading-[25px] text-center opacity-[70%]'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </h5>
                  <h4 className='font-poppins font-medium text-[16px] leading-[25px] pt-4 text-center'>Marrie James-CEO</h4>
                  <h6 className=' font-poppins text-[16px] leading-[25px] text-center'>Limana Enterprises, CA</h6>

                </div>
                <div className="flex max-sm:flex-col gap-4 pt-4">
                  <div className=" shadow-clientsbox px-9 pt-[25px] pb-[31px]">
                    <h6 className=' opacity-[70%]  font-poppins font-normal text-[16px] leading-[25px]  text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</h6>
                    <h4 className='font-poppins font-medium text-[16px] leading-[25px] pt-[19px] text-center'>Ralph Edwards-CEO</h4>
                    <h6 className=' font-poppins text-[16px] leading-[25px] text-center pt-[2px]'>Limana Enterprises, CA</h6>
                  </div>
                  <div className=" shadow-clientsbox px-9 pt-[25px] pb-[31px]">
                    <h6 className=' opacity-[70%]  font-poppins font-normal text-[16px] leading-[25px]  text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</h6>
                    <h4 className='font-poppins font-medium text-[16px] leading-[25px] pt-[19px] text-center'>Darrell Steward-Head</h4>
                    <h6 className=' font-poppins text-[16px] leading-[25px] text-center pt-[2px]'>Limana Enterprises, CA</h6>
                  </div>
                </div>

              </div>

            </div>
            <div>
              <div className="max-w-[820px]  mx-auto lg:pb-[226px]  sm:pb-[80px] pb-[60px] pt-[84px]">
                <div className="w-full sm:pt-[58px] pt-[40px] pb-[32px]  sm:px-[50px] px-[36px]  shadow-clientsbox relative ">
                  <div className=" absolute top-[-55px] translate-x-[-50%] left-[50%]">
                    <img src={Dp} alt="dp" />
                  </div>
                  <h5 className='font-poppins font-medium text-[16px] leading-[25px] text-center opacity-[70%]'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </h5>
                  <h4 className='font-poppins font-medium text-[16px] leading-[25px] pt-4 text-center'>Marrie James-CEO</h4>
                  <h6 className=' font-poppins text-[16px] leading-[25px] text-center'>Limana Enterprises, CA</h6>

                </div>
                <div className="flex max-sm:flex-col gap-4 pt-4">
                  <div className=" shadow-clientsbox px-9 pt-[25px] pb-[31px]">
                    <h6 className=' opacity-[70%]  font-poppins font-normal text-[16px] leading-[25px]  text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</h6>
                    <h4 className='font-poppins font-medium text-[16px] leading-[25px] pt-[19px] text-center'>Ralph Edwards-CEO</h4>
                    <h6 className=' font-poppins text-[16px] leading-[25px] text-center pt-[2px]'>Limana Enterprises, CA</h6>
                  </div>
                  <div className=" shadow-clientsbox px-9 pt-[25px] pb-[31px]">
                    <h6 className=' opacity-[70%]  font-poppins font-normal text-[16px] leading-[25px]  text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</h6>
                    <h4 className='font-poppins font-medium text-[16px] leading-[25px] pt-[19px] text-center'>Darrell Steward-Head</h4>
                    <h6 className=' font-poppins text-[16px] leading-[25px] text-center pt-[2px]'>Limana Enterprises, CA</h6>
                  </div>
                </div>

              </div>

            </div>
            <div>
              <div className="max-w-[820px]  mx-auto lg:pb-[226px]  sm:pb-[80px] pb-[60px] pt-[84px]">
                <div className="w-full sm:pt-[58px] pt-[40px] pb-[32px]  sm:px-[50px] px-[36px]  shadow-clientsbox relative ">
                  <div className=" absolute top-[-55px] translate-x-[-50%] left-[50%]">
                    <img src={Dp} alt="dp" />
                  </div>
                  <h5 className='font-poppins font-medium text-[16px] leading-[25px] text-center opacity-[70%]'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </h5>
                  <h4 className='font-poppins font-medium text-[16px] leading-[25px] pt-4 text-center'>Marrie James-CEO</h4>
                  <h6 className=' font-poppins text-[16px] leading-[25px] text-center'>Limana Enterprises, CA</h6>

                </div>
                <div className="flex max-sm:flex-col gap-4 pt-4">
                  <div className=" shadow-clientsbox px-9 pt-[25px] pb-[31px]">
                    <h6 className=' opacity-[70%]  font-poppins font-normal text-[16px] leading-[25px]  text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</h6>
                    <h4 className='font-poppins font-medium text-[16px] leading-[25px] pt-[19px] text-center'>Ralph Edwards-CEO</h4>
                    <h6 className=' font-poppins text-[16px] leading-[25px] text-center pt-[2px]'>Limana Enterprises, CA</h6>
                  </div>
                  <div className=" shadow-clientsbox px-9 pt-[25px] pb-[31px]">
                    <h6 className=' opacity-[70%]  font-poppins font-normal text-[16px] leading-[25px]  text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</h6>
                    <h4 className='font-poppins font-medium text-[16px] leading-[25px] pt-[19px] text-center'>Darrell Steward-Head</h4>
                    <h6 className=' font-poppins text-[16px] leading-[25px] text-center pt-[2px]'>Limana Enterprises, CA</h6>
                  </div>
                </div>

              </div>
            </div>

          </Slider>
        </div>

        <div className=" absolute bottom-[5%] left-[10px]">
          <div className="border-l-[2px] border-solid border-[#F77B0B] w-[26px] h-[269px] border-b-[2px] relative">
            <p className=' absolute top-[-50px] left-[-20px]  font-poppins font-light text-[20px]  leading-[34px] rotate-[270deg] '>MJH</p>
            <h6 className=' font-helvetica  font-normal text-[40px] leading-[51px] absolute  bottom-[-10px] left-[22px]  rotate-[270deg]'>07</h6>
            <h6 className=' uppercase font-helvetica text-[24px] leading-[30px] absolute bottom-[-10px] left-[64px] text-nowrap '>take step</h6>
          </div>
        </div>








      </div>
    </section>
  )
}

export default ClientsSection