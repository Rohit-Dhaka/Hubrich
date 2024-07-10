import React from 'react'
import MessageIcon from '../assets/images/svg/MessageIcon.svg'
const Bookbtn = () => {
  return (
    <button class="h-[59px]  rounded-[60px] bg-gradient-to-r from-[#0C5FD1]  to-[#8703C5] p-[1.7px] max-w-[452px]  hover:shadow-buttonshadow duration-300">
      <span class="flex gap-1 h-full w-full items-center justify-center bg-white  rounded-[63px] py-[5px] pl-[9px] pr-12">
        <img src={MessageIcon} alt="messageicon" />
        <span class="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] inline-block text-transparent bg-clip-text font-inter">Book a non-binding initial consultation now</span>
      </span>
    </button>
  )
}

export default Bookbtn