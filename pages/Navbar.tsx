import React from 'react'
import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
import GlowButton from '@/components/GlowButton'

export default function Navbar() {
  return (
    <header className='py-4 border-b border-white/15 md:border-none sticky z-10 top-0 ' >
      <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
        <div className='container'>
          <div className='flex justify-between items-center md:border md:border-white/15 p-2.5 rounded-xl max-w-2xl mx-auto relative'>
            <div className='absolute inset-0 backdrop-blur -z-10 hidden md:block'></div>

            <div>
              <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15'>
               <LogoIcon className='w-8 h-8  text-white' />
              </div>
            </div>
            <div className='hidden md:block'>
              <nav className='flex gap-8 text-sm '>
                <a href="#features" className='text-white/70 hover:text-white transition'>Features</a>
                <a href="#" className='text-white/70 hover:text-white transition'>Developers</a>
                <a href="#" className='text-white/70 hover:text-white transition'>Pricing</a>
                <a href="#" className='text-white/70 hover:text-white transition'>Changelog</a>
              </nav>
            </div>
            <div className='flex gap-4 items-center'>
              <GlowButton title={'Join waitlist'}/>
              <MenuIcon className='md:hidden ml-2'/>
            </div>
          </div>
        </div>
    </header>
  )
}
