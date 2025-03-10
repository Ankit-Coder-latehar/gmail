import React from 'react'
import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdDeleteOutline,
    MdOutlineReport,
    MdOutlineMarkEmailUnread,
    MdOutlineWatchLater,
    MdOutlineAddTask,
    MdOutlineDriveFileMove,
  } from "react-icons/md";
  import { BiArchiveIn } from "react-icons/bi";
import { IoMdArrowBack, IoMdMore } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Mail = () => {
    const navigate = useNavigate();
  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
        <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-2 text-gray-700 py-2">
                <div onClick={()=>{
                    navigate("/")
                }} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <IoMdArrowBack size={"24px"}/>
                </div>
                <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <BiArchiveIn size={"24px"}/>
                </div>
                <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <MdOutlineReport size={"24px"}/>
                </div>
                <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <MdDeleteOutline size={"24px"}/>
                </div>
                <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <MdOutlineMarkEmailUnread size={"24px"}/>
                </div>
                <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <MdOutlineWatchLater size={"24px"}/>
                </div>
                <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <MdOutlineAddTask size={"24px"}/>
                </div>
                <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <MdOutlineDriveFileMove size={"24px"}/>
                </div>
                <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <IoMdMore size={"24px"}/>
                </div>
            </div>
            <div className="flex items-center gap-2">
            <button className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowLeft size={"24px"}/></button>
            <button className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowRight size={"24px"}/></button>
            </div>
        </div>
        <div className="h-[90vh] overflow-y-auto p-4">
            <div className="flex items-center justify-between bg-white gap-1">
                <div className="flex items-center gap-2">
                    <h1 className='text-xl font-medium'>Subject</h1>
                    <span className="text-sm bg-gray-200 rounded-md px-2">Inbox</span>
                </div>
                <div className="flex-none text-gray-400 my-5 text-sm">
                    <p>12-08-2024</p>
                </div>
            </div>
            <div className="text-gray-500 text-sm ">
                <h1>ankitchotu300@gmail.com</h1>
                <span>to me</span>
            </div>
            <div className="my-2 ">
                <p>message</p>
            </div>
        </div>
    </div>
  )
}

export default Mail