"use client";
import React, { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react'
import {animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition} from 'framer-motion'
import Image from 'next/image';

import { DotLottieCommonPlayer, DotLottiePlayer } from '@dotlottie/react-player';

import productImage from '@/assets/product-image.png'

const tabs = [
    {
      icon: "/assets/lottie/vroom.lottie",
      title: "User-friendly dashboard",
      isNew: false,
      backgroundPositionX: 0,
      backgroundPositionY: 0,
      backgroundSizeX: 150,
    },
    {
      icon: "/assets/lottie/click.lottie",
      title: "One-click optimization",
      isNew: false,
      backgroundPositionX: 98,
      backgroundPositionY: 100,
      backgroundSizeX: 135,
    },
    {
      icon: "/assets/lottie/stars.lottie",
      title: "Smart keyword generator",
      isNew: true,
      backgroundPositionX: 100,
      backgroundPositionY: 27,
      backgroundSizeX: 177,
    },
  ];

  const TabCOmponents =(props:(typeof tabs)[number] & ComponentPropsWithoutRef<'div'> & {selected:boolean} )=>{
    const tabRef = useRef<HTMLDivElement>(null);
      const lottiRef = useRef<DotLottieCommonPlayer>(null);

      const xpercentage =useMotionValue(0);
      const ypercentage =useMotionValue(0);

      const maskImage = useMotionTemplate `radial-gradient(80px 80px at ${xpercentage}% ${ypercentage}%,black,transparent)`

      useEffect(()=>{
        if(!tabRef.current || !props.selected) return
        xpercentage.set(0);
        ypercentage.set(0);

      const {width,height} =  tabRef.current?.getBoundingClientRect();
      const circumfrance = height*2 +width*2;
      const time = [0,width/circumfrance,(width+height)/circumfrance,(width*2+height)/circumfrance, 1]
      const  option:ValueAnimationTransition ={
           times:time,
          duration:4,
          repeat:Infinity,
          ease:'linear',
          repeatType:'loop'
        }
        animate(xpercentage,[0,100,100,0,0],option)
        animate(ypercentage,[0,0,100,100,0],option)
      },[props.selected]);
      const handleHover =()=>{
        if(lottiRef.current === null) return
        lottiRef.current.seek(0);
        lottiRef.current.play();
      }

    return(
    <div ref={tabRef} onClick={props.onClick} onMouseEnter={handleHover} className='border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative'>
      {props.selected && (
        <motion.div
        style={{
          maskImage:maskImage,
        }}
        className='absolute inset-0 border-[#a369ff] border  rounded-xl '></motion.div>
          
      )}
                    <div className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center'>

                        <DotLottiePlayer
                        ref={lottiRef} 
                        src={props.icon}
                        className='h-5 w-5'
                        autoplay
                        />

                    </div>
                    <div className='font-medium'>{props.title}</div>
                    {props.isNew && <div className='text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold'>New</div>}
                </div>
  )}
export default function Features() {
const [selected,setSelected] = useState(0)
const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX)
const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY)
const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX)

const backgroundPosition = useMotionTemplate `${backgroundPositionX}% ${backgroundPositionY}%`;
const backgroundSize = useMotionTemplate `${backgroundSizeX}% auto`;

const handleSelect = (index:number)=>{
  setSelected(index);
  animate(backgroundSizeX,[backgroundSizeX.get(),100,tabs[index].backgroundSizeX],{
    duration:2,
    ease:'easeInOut',
  });
  animate(backgroundPositionX,[backgroundPositionX.get(),100,tabs[index].backgroundPositionX],{
    duration:2,
    ease:'easeInOut',
  });
  animate(backgroundPositionY,[backgroundPositionY.get(),100,tabs[index].backgroundPositionY],{
    duration:2,
    ease:'easeInOut',
  });
}
  return (
    <section className='py-20 md:py-24' id='features'>
        <div className="container">
            <h2 className='text-5xl md:text-6xl text-center font-medium tracking-tighter'>Elevete your SEO efforts.</h2>
            <p className='text-white/70 md:text-xl max-w-2xl mx-auto text-lg tracking-tight text-center mt-5'>From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.</p>
    <div className='mt-10 flex flex-col gap-3 lg:flex-row'>

            {tabs.map((tab,i)=>(
                <TabCOmponents key={tab.title} {...tab}  onClick={()=>handleSelect(i)} selected={selected === i} />
            ))}
</div>
      <div className='border border-white/20 p-2.5 rounded-xl mt-3'>
                  <motion.div 
                  className='aspect-video bg-cover border border-white/20 rounded-lg' style={{backgroundImage:`url(${productImage.src})`,
                  backgroundSize,
                  backgroundPosition,
                  }}>

                  </motion.div>
           
      </div>
        </div>
    </section>
  )
}
