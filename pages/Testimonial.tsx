"use client"
import React from 'react'
import {motion} from 'framer-motion'

import Image from 'next/image';

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];




export default function Testimonial() {
  return (
    <section className='py-20 md:py-24'>
        <div className="container">
            <h2 className='text-5xl md:text-6xl text-center tracking-tighter font-medium'>Beyond Expectations.</h2>
            <p className=' md:text-xl text-white/70 text-lg text-center mt-5 tracking-tight max-w-sm mx-auto'>Our revolutionary AI SEO tools have transformed our clients&apos; strategies.</p>
            <div className=' flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>

          <motion.div className='flex gap-5 flex-none -translate-x-1/2 pr-5 '
          initial={{
            translateX: '-50%',
          
          }}
          animate={{
            translateX: '0',
          }}
          transition={{
            repeat:Infinity,
            ease: 'linear',
            duration: 30,
          }}>

            {[...testimonials,...testimonials].map((testimonial)=>(
                <div key={testimonial.name} className='border md:p-10 md:max-w-md border-white/15 p-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs flex-none'>
                    <div className='text-lg md:text-2xl tracking-tight'>{testimonial.text}</div>
                    <div className='flex items-center gap-3 mt-5'>

                        <div className='relative after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg'>
                            <Image src={testimonial.avatarImg} alt={`Avatar of ${testimonial.name}`} className='h-11 w-11  grayscale rounded-lg' />

                        </div>

                        <div>

                                <div>{testimonial.name}</div>
                                <div className='text-white/50 ttext-sm'>{testimonial.title}</div>
                        </div>
                    </div>

                </div>
            ))}
          </motion.div>
</div>

        </div>
    </section>
  )
}
