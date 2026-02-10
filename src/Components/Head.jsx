import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Head = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-2'>
      <img className="w-112.5" src={logo} alt="" />
      <p className='text-accent'>Journalism Without Fear or Favour</p>
      <p className='text-semibold text-accent'>{format(new Date(), "EEEE, MMMM MM, 	yyyy") }</p>
    </div>
  );
};

export default Head;