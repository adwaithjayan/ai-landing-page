"use client"
import React from 'react'
import {motion} from 'framer-motion'

import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";

export default function LogoScroll() {
  return (
    <section className='py-20 md:py-24'>
        <div className="container">
            <div className='flex items-center gap-5'>
                <div className='flex-1 md:flex-none'>

                <h2>Trusted by top innovative teams</h2>
                </div>
                <div className='flex-1 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
                <motion.div
                initial={{translateX:'-50%'}}
                animate={{
                    translateX:"0"
                }} 
                transition={{
                    duration:30,
                    repeat:Infinity,
                    ease: 'linear',
                
                }}
                className='flex flex-none gap-14 pr-14'>
                    {[acmeLogo,apexLogo,celestialLogo,echoLogo,pulseLogo,quantumLogo,acmeLogo,apexLogo,celestialLogo,echoLogo,pulseLogo,quantumLogo].map((logo,i)=>(
                        <img key={i} className="w-auto h-6" src={logo.src}  alt="company logo"/>
                    ))}
                </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}
