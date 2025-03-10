import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import { LuPencil } from 'react-icons/lu'
import { MdKeyboardArrowDown, MdOutlineDrafts, MdOutlineWatchLater } from 'react-icons/md'
import { TbSend2 } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { setOpen } from '../redux/createSlice'

const SidebarItems = [
    {
        icons:  <LuPencil size={"24px"} />,
        text : "Inbox" 
    },
    {
        icons:  <IoMdStar size={"24px"} />,
        text : "Starred" 
    },
    {
        icons:  <MdOutlineWatchLater size={"24px"} />,
        text : "Snoozed" 
    },
    {
        icons:  <TbSend2 size={"24px"} />,
        text : "Sent" 
    },
    {
        icons:  <MdOutlineDrafts size={"24px"} />,
        text : "Drafts" 
    },
    {
        icons:  <MdKeyboardArrowDown size={"24px"} />,
        text : "More" 
    },
]

const Sidebar = () => {
    // const [open , setOpen ] = useState(false);
    const dispatch = useDispatch();

  return (
    <div className='w-[15%]'>
        <div className="p-3">
            <button onClick={()=> dispatch(setOpen(true))} className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-sm bg-[#C2E7FF]">
                <LuPencil size={"24px"} />
                Compose
            </button>
        </div>
        <div className="text-gray-500">
            {
                SidebarItems.map((item , index)=>{
                    return (
                        <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:bg-gray-200 hover:cursor-pointer my-2">
                        {item.icons}
                        <p>{item.text}</p>
                    </div>
                    )
                })
            }
            
        </div>

    </div>
  )
}

export default Sidebar