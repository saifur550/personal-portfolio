import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  return (
    <section ref={ref} id='about' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
           <div className='img flex-1 bg-about bg-contain bg-no-repeat  mix-blend-lighten bg-top h-[640px]'></div>
          <div className='text  div-text '>
            <h2 className='h2 text-cyan-400 '>About Me</h2>
            <h3 className=''>
              I'm a Freelance Front-end Developer & Digital marketing with over
              3 years of Experience.
            </h3>
            <p className='mb-10'>
              I'm saifur, a professional freelancer with extensive experience in
              digital marketing who focuses on Google AdWords, Google Analytics
              (GA4), Google Tag Manager, and Web Analytics. I have a
              certification in "Digital Marketer," which includes specific
              certifications in "Google PPC Ads," "Display Ads," "Shopping,"
              "Leads," "Calls," "Apps," "Measurement," "Video," and "Analytics."{' '}
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div className=''>
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                  { inView ? <CountUp start={0} end={3} duration={3} /> : null} 
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> experience
                </div>
              </div>
              <div className=''>
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                { inView ? <CountUp start={0} end={100} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  projects  <br /> completed
                </div>
              </div>
              <div className=''>
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                { inView ? <CountUp start={0} end={80} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
            <button className='btn fw2 font-bold btn-sm'>Contact Me</button>
            <a href ="#" className='text-gradient btn-link'>
            My Protfolio
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
