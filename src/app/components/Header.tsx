'use client'
import { useState } from "react";
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import Link from "next/link";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <header className="bg-gradient-to-r from-purple-700 to-blue-600 text-white sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href='/' className="text-2xl font-bold">Beutech</Link>
                <nav className="hidden md:flex space-x-6">
                   <Link href='#home'>Home</Link>
                   <Link href='#projects'>Project</Link>
                   <Link href='#about'>About</Link>
                   <Link href='#contact'>Contact</Link>
                </nav>
                <button className="md:hidden" onClick={()=> setIsOpen(!isOpen)}>
                   {isOpen ? <XMarkIcon className='h-6 w-6'/> : <Bars3Icon className='h-6 w-6'/>}
                </button>
                {
                    isOpen && (
                        <nav className="md:hidden bg-blue-600 text-center py-4">
                            <Link href='#home' className="block py-2" onClick={()=>setIsOpen(false)}>Home</Link>
                            <Link href='#projects' className="block py-2" onClick={()=>setIsOpen(false)}>Project</Link>
                            <Link href='#about' className="block py-2" onClick={()=>setIsOpen(false)}>About</Link>
                            <Link href='#contact' className="block py-2" onClick={()=>setIsOpen(false)}>Contact</Link>

                        </nav>
                    )
                }
            </div>

        </header>
    )
}