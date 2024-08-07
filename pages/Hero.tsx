"use client"

import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

import GlowButton from '@/components/GlowButton'

import starbg from '@/assets/stars.png'

export default function Hero() {
  const heroRef = useRef(null);
  const{scrollYProgress} =useScroll({
    target:heroRef,
    offset:["start end","end start"]

  })
  const translateY = useTransform(scrollYProgress,[0,1],[-300,300])
  return (
    <motion.section ref={heroRef} className='h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'
    style={{backgroundImage:`url(${starbg.src})`,
  backgroundPositionY:translateY}}
    animate={{
      backgroundPositionX:starbg.width
    }}
    transition={{
      duration:120,
      ease:"linear",
      repeat:Infinity,
    }}>
      

    <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,.5)_15%,rgba(14,0,36,.5)_78%,transparent)]'></div>
{/** planet */}
    <div className='absolute md:h-96 md:w-96 h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]' ></div>
{/** end planet */}
{/** ring 1 */}
    <motion.div
    style={{
      translateX:"-50%",
      translateY:"-50%",
    }} 
    animate={{
      rotate:"1turn",

    }}
    transition={{
      duration:30,
      ease:"linear",
      repeat:Infinity,

    }}
    className='absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border rounded-full top-1/2 left-1/2  opacity-20'>
      <div className='absolute h-2 w-2 top-1/2 rounded-full bg-white -translate-y-1/2 -translate-x-1/2 left-0 '></div>
      <div className='absolute h-2 w-2 top-0 rounded-full bg-white -translate-y-1/2 -translate-x-1/2 left-1/2 '></div>
      <div className='absolute h-5 w-5 top-1/2 rounded-full border border-white -translate-y-1/2 -translate-x-1/2 left-full inline-flex justify-center items-center'>
      <div className='h-2 w-2 bg-white rounded-full'></div></div>
    </motion.div>
{/** ring 1 end*/}
{/** ring 2*/}


    <motion.div
    style={{
      translateX:"-50%",
      translateY:"-50%",
    }} 
    animate={{
      rotate:"-1turn",

    }}
    transition={{
      duration:60,
      ease:"linear",
      repeat:Infinity,

    }}

    className='absolute h-[444px] w-[444px]  md:h-[780px] md:w-[780px] border border-white/40 border-dashed rounded-full top-1/2 left-1/2 '></motion.div>

{/** ring 2 end */}
{/** ring 3 */}

    <motion.div
    style={{
      translateX:"-50%",
      translateY:"-50%",
    }} 
    animate={{
      rotate:"1turn",

    }}
    transition={{
      duration:90,
      ease:"linear",
      repeat:Infinity,

    }}
     className='absolute h-[544px] w-[544px]  md:h-[980px] md:w-[980px] border opacity-20 border-white  rounded-full top-1/2 left-1/2 '>
      <div className='absolute h-2 w-2 top-1/2 rounded-full bg-white -translate-y-1/2 -translate-x-1/2 left-0 '></div>
      <div className='absolute h-2 w-2 top-0 rounded-full bg-white -translate-y-1/2 -translate-x-1/2 left-1/2 '></div>
      <div className='absolute h-5 w-5 top-1/2 rounded-full border border-white -translate-y-1/2 -translate-x-1/2 left-full inline-flex justify-center items-center'>
      <div className='h-2 w-2 bg-white rounded-full'></div></div>
    </motion.div>

{/** ring 3 end */}

      <div className='container relative mt-16'>
        <h1 className='md:text-[168px] md:leading-none tracking-tighter text-8xl font-semibold bg-white bg-clip-text text-transparent text-center bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,.5))]'>AI SEO</h1>
        <p className='text-lg md:text-xl max-w-xl mx-auto   text-white/70 mt-5 text-center'>
          Elevate your site&apos;s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
        <div className='flex justify-center mt-5'>
          <GlowButton title='Join waitlist'/>
        </div>
      </div>
    </motion.section>
  )
}
