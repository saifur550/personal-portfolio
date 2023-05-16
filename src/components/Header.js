import React from 'react';
import Image from '../assets/icon-marketing.png'
import {  } from "react-icons/fa";

const Header = () => {
  return  <header id='' className='py-8'>
  <div className='container mx-auto'>
  <div className='flex justify-between items-center'>
  <img className='img-clr' src ={Image} alt="" />
      
      <button className='btn fw2 font-bold btn-sm'>Work with Me</button>
  </div>
  </div>
  </header>;
};

export default Header;
