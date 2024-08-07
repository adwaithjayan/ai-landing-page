"use client"
import {motion, useMotionTemplate, useMotionValue, useScroll, useTransform} from 'framer-motion'

import GlowButton from '@/components/GlowButton'
import Stars from "@/assets/stars.png"
import Grid from "@/assets/grid-lines.png"
import React, { RefObject, useEffect, useRef } from 'react'

const useRelativeMousePosition =(to:RefObject<HTMLElement>)=>{
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updatemouse =(event:MouseEvent)=>{
    if(!to.current) return;
    const {top,left} = to.current?.getBoundingClientRect()
    mouseX.set(event.x -left);
    mouseY.set(event.y - top);
  }
  useEffect(()=>{
    window.addEventListener("mousemove",updatemouse);

    return ()=>{
      window.removeEventListener("mousemove",updatemouse);
    }
  },[])

  return [mouseX, mouseY];
}

export default function CTA() {
  const startRef = useRef<HTMLElement>(null);
  const borderDivRef = useRef<HTMLDivElement>(null) ;

  const {scrollYProgress} =useScroll({
    target:startRef,
    offset:['start end','end start']
  })
  const bgtranslateY = useTransform(scrollYProgress,[0,1],[-300,300]);

  const [mouseX, mouseY] = useRelativeMousePosition(borderDivRef);

  const maskImg = useMotionTemplate `radial-gradient(50% 50% at ${mouseX}px ${mouseY}px ,black,transparent)`
  return (
    <section className='py-20 md:py-24' ref={startRef}>
        <div className="container">
            <motion.div ref={borderDivRef} className='border border-white/15 py-24 rounded-xl relative overflow-hidden group' style={{
                backgroundImage:`url(${Stars.src})`,
                backgroundPositionY:bgtranslateY,
            }}
            animate={{
              backgroundPositionX:Stars.width,
            }}
            transition={{
              duration:60,
              ease:"linear",
              repeat:Infinity,
            }}>
                <div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] opacity-1 group-hover:opacity-0 transition duration-700 '
                style={{backgroundImage:`url(${Grid.src})`}}></div>

                <motion.div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700'
                style={{
                  maskImage:maskImg,
                  backgroundImage:`url(${Grid.src})`}}></motion.div>


                <div className='relative'>

                <h2 className='text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium'>AI-driven SEO for everyone.</h2>
                <p className='text-center text-lg md:text-xl max-xs mx-auto text-white/70 px-4 mt-5 tracking-tight'>Achieve clear, impactful results without the complexity.</p>
                <div className='flex justify-center mt-8'>
                <GlowButton title='Join waitlist'/>
                </div>
                </div>

            </motion.div>
        </div>
    </section>
  )
}
