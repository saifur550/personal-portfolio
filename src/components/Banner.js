import React from "react";
import Image from "../assets/avatar5.png";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Button } from "react-scroll";

const Banner = () => {
  return (
    <div id="home" className="min-h-[85vh]">
      <div className="container mx-auto">

        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="text-content flex-1 text-center font-secondary lg:text-left">
           <motion.h1
            variants = {fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            className=" text-[45px] font-bold leading-[0.8] lg:text-[110px]"> <span className="clr">SAIFUR</span> <span>RAHMAN</span> </motion.h1>

           <motion.div 
           variants = {fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
           className="mb-6 text-[36px] lg:text-[60px]   uppercase leading-[1]">
              <span className="mr-4">I am a </span>
              <TypeAnimation sequence={[
            'Developer',
            2000,
            'Digital Marketing',
            2000,
            'Youtuber',
            2000, ]}

             speed={50}
             className="text-cyan-400 fw3 "
             wrapper="span"
             repeat={Infinity} />
           </motion.div> 
           
           <motion.p

           variants = {fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}

           className="mb-8 max-w-lg mx-auto lg:mx-0">I work as a professional digital marketer out of Bangladesh, and I'm really passionate about what I do.</motion.p>
          <motion.div
          variants = {fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
          
          className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
            <button className="btn btn-lg">Contact Me</button>
             <a className="text-gradient btn-link" href="#">My Portfolio</a>
          </motion.div>
          <motion.div 

          variants = {fadeIn('up', 0.7)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
          
          className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
             <a href="#"><FaGithub></FaGithub></a>
             <a href="#"><FaYoutube></FaYoutube></a>
             <a href="#"><FaDribbble></FaDribbble></a>
             <a href="#"><FaGithub></FaGithub></a>
          </motion.div>
        </div>
          
          <motion.div
          variants = {fadeIn('down', 0.5)}
          initial="hidden"
          whileInView={'show'}
          
           className="img hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
           >
            <img className="img-banner" src ={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
