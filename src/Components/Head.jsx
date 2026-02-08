import React from 'react';
import logo from '../assets/logo.png'
const Head = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-2'>
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Head;