'use client';
import Masonry from "react-masonry-css";
import react,{use, useRef} from 'react';
import outreach from "@/public/other/Outreach-Image1.png";
import { motion , useInView} from "framer-motion";
import { ClockFadingIcon, Group, User } from 'lucide-react';
import WhoAreWe from '@/public/other/WhoWeAre-Image.png';
import Orignals from '@/public/other/Orginal-image.png';
import Headshot from '@/public/other/headShot-image.png';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // const { chars } = splitText("")

   const breakpointColumnsObj = {
    default: 2,
  };
  return (
    
    <>
      {/* Mission statement */}
      <section className="flex text-center flex-col items-center justify-center">
      <motion.div      
          initial={{ opacity: 0 , }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05, duration: isInView?0:2}}>
              <h2 className="text-3xl md:text-6xl font-light">Our Mission</h2>
              <div className="md:w-100 w-50 h-px bg-gray-900"></div>
        </motion.div>
        <motion.p
          className="text-2xl md:text-3xl text-muted-foreground "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: isInView?0:2}}
          animate={{ y: 0 }}
        >
          "To build a better future through innovative technology and community engagement."
        </motion.p>
      </section>

      {/* About us */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-20 md:mt-30 justify-self-center w-4/6">
        <div className="justify-center pt-3 pb-3 rounded-md block justify-items-center">
          <div className='grid grid-rows-[.1fr_1fr_1fr] gap-2 w-full h-full'>
            <div>
              <h2 className="text-3xl md:text-6xl justify-self-center font-light flex md:justify-self-start">About us</h2>
              <div className="md:w-30 w-20 h-px bg-gray-900 justify-self-center flex md:justify-self-start"></div>
            </div>
         
            <div>
              <motion.p
               initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: isInView?0:2}}
                animate={{ y: 0 }}
              className=" md:text-xl pt-5 font-light md:pr-6">We are teams 24622 and 22557, and are passionate and innovative FIRST Tech Challenge (FTC) robotics team dedicated to designing, building, and programming competitive robots. Our diverse group of students shares a common goal: to push the boundaries of STEM through teamwork, creativity, and perseverance. Guided by gracious professionalism and the core values of FIRST, we embrace every challenge as an opportunity to learn and grow. Beyond the robot, we actively engage with our community, mentor younger students, and advocate for STEM education. Together, we strive to inspire the next generation of engineers, problem solvers, and leaders.

              </motion.p>

            </div>

            <div className='grid grid-cols-2 gap-15 justify-items-center mt-6 md:mt-0 mr-2'>
              <div className="flex flex-col items-center gap-3">
                <ClockFadingIcon className="
                size-10 md:size-20" />
              <span className="text-purple-600 font-semibold"> RambotsPurple#24622</span> 
              <p className='font-thin'>established since 2023 </p>
              <span className="text-yellow-400 font-semibold"> RambotsYellow#22557</span> 
                <p className='font-thin'>established since 2023 </p>
            </div>
              <div className='flex flex-col items-center gap-3'>
                <User className="size-10 md:size-20 "  />
                 <span className="text-purple-600 font-semibold"> RambotsPurple#24622</span> 
                <p className='font-thin'>18 members </p>
                <span className="text-yellow-400 font-semibold"> RambotsYellow#22557</span> 
                  <p className='font-thin'> 13 members </p>
                </div>
              <div>

              </div>
            </div>
          </div>

        </div>

    <div className="w-full max-w-md sm:max-w-lg md:max-w-[550px] mx-auto mt-8">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-3"
          columnClassName="masonry-column"
        >
          <motion.img className="w-full mb-3 rounded-lg object-cover" src={Headshot.src} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: isInView?0:2}}alt="" />
          <motion.img initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: isInView?0:2}} className="w-full mb-3 rounded-lg object-cover" src={outreach.src} alt="" />
          <motion.img initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: isInView?0:2}} className="w-full mb-3 rounded-lg object-cover" src={WhoAreWe.src} alt="" />
          <motion.img initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: isInView?0:2}} className="w-full mb-3 rounded-lg object-cover" src={Orignals.src} alt="" />
        </Masonry>
      </div>
      </section>
    </>
  );
}
