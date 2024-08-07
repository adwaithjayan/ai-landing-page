import React from 'react'

import LogoImg from "@/assets/logo.svg"

import X from '@/assets/social-x.svg'
import Insta from '@/assets/social-instagram.svg'
import Yt from '@/assets/social-youtube.svg'

export default function Footer() {
  return (
    <footer className='py-5 border-t border-white/15'>
        <div className='container'>
            <div className='flex flex-col gap-8 lg:flex-row lg:items-center'>
            <div className='flex items-center gap-2 lg:flex-1'>
                <LogoImg className='h-6 w-6'/>
                <div>AI Startup Landing Page</div>
            </div>
            
                <nav className='flex lg:flex-1 lg:justify-center flex-col gap-5 lg:flex-row lg:gap-7 '>
                    <a href="#" className='text-white/70  hover:text-white text-xs md:text-sm transition'>Features</a>
                    <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Developers</a>
                    <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Company</a>
                    <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Blog</a>
                    <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Changelog</a>
                </nav>
            
            <div className='flex gap-5 lg:flex-1 lg:justify-end'>
                <X className='text-white/40 hover:text-white transition'/>
                <Insta className='text-white/40 hover:text-white transition'/>
                <Yt className='text-white/40 hover:text-white transition'/>
            </div>
            </div>
        </div>
    </footer>
  )
}
