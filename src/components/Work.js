import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Image1 from '../assets/service-1.png'
import Image2 from '../assets/service-2.png'
import Image3 from '../assets/service-3.png'

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <div>
          <div>
              <div>
                <h2 className="h2 leading-tight text-accent">My Latest <br/> Work </h2>
                <p className='max-w-sm mb-16'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, exercitationem necessitatibus? Velit quam quo exercitationem ad, dolores placeat, similique quibusdam neque optio, harum officiis et sed labore sequi eligendi cupiditate?
                </p>
                <button className="btn btn-sm">View All Project</button>
              </div>
              <div>img</div>
          </div>
        
          <div>
              <div></div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Work;
