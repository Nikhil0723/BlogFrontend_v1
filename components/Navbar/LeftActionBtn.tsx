import React from 'react'
import { Button } from '../ui/button'
import { Menu, Search, X } from 'lucide-react'
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaSquareInstagram } from 'react-icons/fa6';
import SearchModal from './SearchModal';

export default function LeftActionBtn() {
  return (

    <>
    
    <Sheet >
    
    <div className='flex items-center justify-center gap-2 lg:gap-3'>
    <SheetTrigger className=' bg-black roundefull text-white p-3.5 hover:p-4 rounded-full '>
     
        <Menu className=' h-2.5 w-2.5 lg:h-4 lg:w-4'/>
     
     </SheetTrigger>
      
      <SearchModal/>
     
    </div>
     
      <SheetContent  side="left" className='flex flex-col items-center justify-between '>
        
     <SheetClose>
        <X/>
     </SheetClose>

       <div >
        <ul className='flex flex-col gap-3 text-2xl text-center font-semibold'>
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
       </div>

     <div className='flex items-center justify-center gap-14 mb-10'>
        <a ><FaYoutube/></a>
        <a><FaLinkedin /></a>
        <a><FaSquareInstagram /></a>
     </div>

      </SheetContent>
    </Sheet>
    
     
    </>

  )
}
