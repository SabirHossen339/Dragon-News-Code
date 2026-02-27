import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6';

const FindUs = () => {
  return (
    <div>
      <h2 className='font-bold mb-5'>Find us on</h2>
      <div className="">
        <div className="join join-vertical lg:join-vertical w-full">
  <button className="btn bg-base-100 justify-start join-item"> <FaFacebook size={20}></FaFacebook> Facebook</button>
  <button className="btn bg-base-100 justify-start join-item"> <FaSquareXTwitter size={20}></FaSquareXTwitter> X</button>
  <button className="btn bg-base-100 justify-start join-item"> <FaSquareInstagram size={20}></FaSquareInstagram> Instagram</button>
</div>
      </div>
    </div>
  );
};

export default FindUs;