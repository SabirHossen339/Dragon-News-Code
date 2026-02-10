import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className='flex items-center gap-5 p-3 bg-base-200 rounded-md'>
      <p className='text-base-100 bg-secondary px-3 py-2 rounded-md'>Latest</p>

      <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
<p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eaque, libero amet aspernatur quas beatae?
      </p>
<p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eaque, libero amet aspernatur quas beatae?
      </p>
<p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eaque, libero amet aspernatur quas beatae?
      </p>
      </Marquee>
      
    </div>
  );
};

export default LatestNews;