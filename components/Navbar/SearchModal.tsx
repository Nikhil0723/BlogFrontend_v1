import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Search, X } from 'lucide-react'
import { Button } from '../ui/button'
export default function SearchModal() {
    return (
        <>
            <Dialog >
                <DialogTrigger className='bg-black roundefull text-white p-3.5 hover: rounded-full'>

                    <Search   className=' h-2.5 w-2.5 lg:h-4 lg:w-4'/>

                </DialogTrigger>



                <DialogContent className="  border-none flex items-center justify-center h-full">
                    <DialogClose className=' absolute bg-black  text-white top-4 right-5  md:top-24 md:right-24 p-3 lg:p-5 rounded-full'>
                        <X className=' h-3 w-3 lg:h-4 lg:w-4 '/>
                    </DialogClose>
                    <div className='w-full h-full lg:w-1/2 flex flex-col items-center justify-center gap-10  lg:px-5 z-100'>
                        <h1 className='text-white text-4xl'>Search the web</h1>
                        <div className='w-full  lg:flex lg:flex-row md:flex md:flex-col items-center justify-center  py-2 px-1.5 bg-zinc-400 rounded-3xl lg:rounded-full gap-1.5  '>
                            <input type="text" className=' w-full lg:w-auto  flex-1 outline-none border-none text-xs placeholder:text-xs placeholder:font-light placeholder:text-gray-700 px-7  py-4 lg:px-8  lg:py-4 rounded-full mb-2 lg:mb-0' placeholder='Enter What are you looking for ...' />
                            <button className='w-full lg:w-auto px-12 py-3.5 text-xs rounded-full bg-pink-600 text-white'>SEARCH</button>
                        </div>
                    </div>
               
                </DialogContent>
            </Dialog>
        </>
    )
}
