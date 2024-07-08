import React from 'react'
import MessageIcon from '../assets/images/svg/MessageIcon.svg'

const Bookbtn = () => {
  return (
    <button class="bg-gradient-to-tr from-blue-500 to-purple-500 color-white  font-medium rounded-[63px] p-[1.7px] z duration-300">
      <span class="flex gap-1 items-center py-[5px] ps-[9px] pe-[48px] w-full bg-white text-black rounded-[63px]  font-inter font-medium text-[16px] leading-[24px] ">
        <img src={MessageIcon} alt="messageicon" />
        <span class="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] inline-block text-transparent bg-clip-text">Book a non-binding initial consultation now</span>
      </span>
    </button>
  )
}

export default Bookbtn