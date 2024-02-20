
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsLightningChargeFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'


export default function RightActionBtn() {
  return (
    <div className='flex items-center gap-5'>
      <div className='flex gap-4 items-center'>
      <AiFillInstagram size={24} className=' cursor-pointer'/>
      <AiFillLinkedin size={24} className=' cursor-pointer'/>
      <AiFillGithub size={24} className=' cursor-pointer'/>
      </div>
      <div className='flex items-center gap-4'>
       
      <button className='flex items-center justify-center gap-2 border border-zinc-700 opacity-90 rounded-full px-4 py-1  hover:bg-red-50 transition-all ease-in-out '>
      <BsLightningChargeFill />
      Subscribe
      </button>
      <button className='flex items-center justify-center gap-2 border border-zinc-700 opacity-90 rounded-full px-4 py-2  hover:bg-blue-50 transition-all ease-in-out '>
      <FaHeart />
      <p className=' flex items-center justify-center text-xs bg-white border rounded-full border-black h-3 w-3 p-2'>0</p>
      </button>

      </div>
    </div>
  )
}
