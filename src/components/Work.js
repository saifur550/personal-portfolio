import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Image1 from '../assets/work1.png'
import Image2 from '../assets/service-2.png'
import Image3 from '../assets/service-3.png'

const Work = () => {
  return (
    <section id='work' className='section mt-15'>
      <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-10">
            <div className="flex-1 flex flex-col  gap-y-10    mb-10 lg:mb-0">
              <div className="">
              <h2 className="h2 leading-tight text-accent">My Latest Project</h2>
              <p className="max-w-sm mb-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur culpa itaque voluptas, veritatis ut odit dolorem voluptatum enim aliquid hic.</p>
              <button className="btn btn-sm">View All Work</button>
              </div>
              <div className="  group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img src={Image1} alt="" className="  imgItem group-hover:scale-125 transition-all duration-500" />
                <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className="text-gradient">Digital Marketing</span>
                </div>
                <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className="text-3xl text-white">Google Ads Words</span>
               </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-10">

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img src={Image1} alt="" className="imgItem  group-hover:scale-125 transition-all duration-500" />
            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className="text-gradient">Digital Marketing</span>
            </div>
            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className="text-3xl text-white">Google Ads Words</span>
           </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img src={Image1} alt="" className="imgItem  group-hover:scale-125 transition-all duration-500" />
            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className="text-gradient">Digital Marketing</span>
            </div>
            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className="text-3xl text-white">Google Ads Words</span>
           </div>
            </div>
            
            </div> 
          </div>
      </div>
    </section>
  );
};

export default Work;
