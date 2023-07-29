import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Image1 from '../assets/service-1.png'
import Image2 from '../assets/service-2.png'
import Image3 from '../assets/service-3.png'


const services = [
  {
    name:'Web Developer',
    description:'A web developer designs and builds websites using programming languages, ensuring functionality, responsiveness, and an engaging user experience.',
    link:'learn more'
  },

  {
    name:'Digital Marketing',
    description:'Digital marketing encompasses various strategies and techniques used to promote products or services online, reaching and engaging target audiences effectively.',
    link:'learn more'
  },

  {
    name:'Graphic Designer',
    description:'A graphic designer uses visual elements to create visually appealing designs for various mediums, such as print, digital, and branding.',
    link:'learn more'
  },

]
  
const Services = () => {
  return (
    <section className='section' id='services'>
     <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
          <motion.div 
          variants = {fadeIn('right', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0
          '>
          <h2 className='h2  text-cyan-400 mb-16 '>
           What I Do </h2> 
           <h3 className=' max-w-[455px] mb-16'>
           I am a Frontend Web Developer, and I'm very passionate and dedicated to my work. With wide experience as a React Web Developer, I have acquired the skills and knowledge necessary to succeed in your project. I enjoy every step of the design process, from discussion and collaboration.
          </h3>
          <button className='btn fw2 font-bold btn-sm'>See My Work</button>
          </motion.div>


          <motion.div 
          variants = {fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1'>
            <div className=''>
              {services.map((service,index)=>{
                const {name,description,link} = service
                  return(
                    <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index} >
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-tighter font-primary font-semibold mb-6'>{name}</h4>
                        <p className='font-secondary leading-tight mb-10 '>{description}</p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                      <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href='#'>
                      <BsArrowUpRight></BsArrowUpRight>
                       </a>
                       <a className='text-gradient text-sm' href='#'>
                       {link}
                        </a>
                      </div>
                    </div>)
                })
              }
            </div>
          </motion.div>
      </div>
     </div>
  </section>
  )
  
};

export default Services;  
