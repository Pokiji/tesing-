'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from '@/public/other/hero_1.jpg'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { motion, hover, easeIn, easeInOut } from 'framer-motion'


import logoWaterJet from '@/public/logos/logo-WaterJet.png'
import logoOneFurAll from '@/public/logos/logo-OneFurAlll.png'
import logoCoastalReign from '@/public/logos/logo-CoastalReign.webp'
import logoUvicRobotics from '@/public/logos/logo-UvicRobotics.png'
import logoUVICECS from '@/public/logos/logo-UVICECS.jpg'


export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-20 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block mt-20">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <motion.h1 
                                    className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                
                                    Mount Douglas Robotics
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <p className="mt-8 max-w-2xl text-pretty text-lg md:pr-9">
                                    Home of the
                                    <span className="text-purple-600 font-semibold"> RambotsPurple#24622 </span>
                                    and
                                    <span className="text-yellow-400 font-semibold"> RambotsYellow#22557 </span>
                                     passionate, innovative, and dedicated to STEM excellence.
                                    </p>
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                className="mt-12 flex flex-col items-center justify-center  sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="xxl"
                                        className="px-5 text-base">
                                        <Link href="contact">
                                            <span className="text-nowrap">Contact</span>
                                        </Link>
                                    </Button>
                                  
                                </motion.div>
                            </div>
                          
                                <motion.img
                                    src={Image.src}
                                    initial={{ opacity: 0, x: 60 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className="hidden md:block -z-10 order-first ml-auto w-full object-cover lg:absolute lg:inset-0 lg:-right-30 lg:-top--10 lg:order-last lg:h-max lg:w-1/2 lg:object-contain dark:mix-blend-lighten dark:invert-0 rounded-xl mt-30 md:mt-0"
                                    alt="hero logo"
                                    />
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-0 md:pb-20">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <motion.p  initial={{ opacity: 0, y: 200 }}
                                    animate={{ opacity: 1, y:0 }}
                                    transition={{ duration: 1 }}
                                    className="text-end text-2xl">Powering the best teams</motion.p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={100}
                                    gap={112}>
                                    
                                    <motion.div whileHover={{ scale: 1.2,   }} className="flex items-center">
                                        <Link href="https://www.victoriawaterjet.ca/" target="_blank" className='cursor-pointer'>

                                        <img
                                            className="mx-auto h-14 w-fit dark:invert"
                                            src={logoWaterJet.src}
                                            alt="Column Logo"
                                            height="16"
                                            width="auto"
                                        />
                                        </Link>

                                    </motion.div>
                                     <motion.div whileHover={{ scale: 1.2,  }} className="flex items-center">
                                        <Link href="https://www.onefurall.com/" target="_blank" className='cursor-pointer'>

                                            <img
                                                className="mx-auto h-14 w-fit dark:invert "
                                                src={logoOneFurAll.src}
                                                alt="Column Logo"
                                                height="16"
                                                width="auto"
                                            />
                                        </Link>

                                    </motion.div>

                                      <motion.div whileHover={{ scale: 1.2,  }} className="flex items-center">
                                        <Link href="https://coastalreign.com/?srsltid=AfmBOopsEm97gmplVGNIdlVZUCcVRkpbWDd_PaCZFAJjBFEuhNhXg9Fz" target="_blank" className='cursor-pointer'>

                                        <img
                                        
                                            className="mx-auto h-14 w-fit dark:invert"
                                            src={logoCoastalReign.src}
                                            alt="Column Logo"
                                            height="16"
                                            width="auto"
                                        />
                                        </Link>

                                    </motion.div>
                                    
                                     <motion.div whileHover={{ scale: 1.2,   }} className="flex pt-1 items-center">
                                        <Link href="https://uvicroboticsclub.wordpress.com/" target="_blank" className='cursor-pointer'>

                                        <img
                                            className="mx-auto h-60 w-fit dark:invert"
                                            src={logoUvicRobotics.src}
                                            alt="Column Logo"
                                            height="16"
                                            width="auto"
                                        />
                                        </Link>
                                    </motion.div>

                                       <motion.div whileHover={{ scale: 1.2,   }} className="flex pt-1 items-center">
                                        <Link href="https://www.uvic.ca/ecs/index.php" target="_blank" className='cursor-pointer'>
                                            <img
                                                className="mx-auto h-30 w-fit dark:invert"
                                                src={logoUVICECS.src}
                                                alt="Column Logo"
                                                height="16"
                                                width="auto"
                                            />
                                        </Link>

                                    </motion.div>
                                   
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="bg-background py-12 md:py-32"> */}
                    
                {/* </section> */}
                
            </main>
        </>
    )
}
