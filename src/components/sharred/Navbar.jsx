import React from 'react'
import { FaRegQuestionCircle } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import { IoSettings } from 'react-icons/io5'
import { PiDotsNineBold } from 'react-icons/pi'
import { RxHamburgerMenu } from 'react-icons/rx'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 p-3'>
       <div className="flex items-center gap-10">
        <div className='flex items-center gap-3'>
        <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
           <RxHamburgerMenu size={"24px"} />
        </div>
        <img src="https://w7.pngwing.com/pngs/608/931/png-transparent-gmail-new-logo-icon.png" alt="gmail logo" className='w-8'/>
        <h1 className='text-gray-600 font-medium text-2xl'>Gmail</h1>
        </div>
       </div>
       <div className="md:block hidden bg-gray-100 w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className='text-gray-600'/>
          <input type="text" placeholder='search...' className='rounded-full w-full bg-transparent outline-none px-1' />
        </div>
       </div>
       <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 hover:bg-gray-100 rounded-full cursor-pointer">
            <FaRegQuestionCircle size={"20px"}/>
          </div>
          <div className="p-3 hover:bg-gray-100 rounded-full cursor-pointer">
          <IoSettings size={"20px"}/>
          </div>
          <div className="p-3 hover:bg-gray-100 rounded-full cursor-pointer">
           <PiDotsNineBold size={"20px"}/>
          </div>
          <div className="p-3 hover:bg-gray-100 rounded-full cursor-pointer">
          <img src="https://plus.unsplash.com/premium_photo-1669824376679-268d3739acf3?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile logo" className='w-6 rounded-full ' />
          </div>
        </div>
       </div>
    </div>
  )
}

export default Navbar