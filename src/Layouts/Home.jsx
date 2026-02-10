import React from 'react';
import { Outlet } from 'react-router';
import Head from '../Components/Head';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <div>
      <header><Head></Head></header>
      <section className='w-11/12 mx-auto my-3'>
        <LatestNews></LatestNews>
      </section>
      <nav className='w-11/12 mx-auto my-3'>
        <Navbar></Navbar>
      </nav>
      <main>
        <section className="left_Nav"></section>
        <section className="Main_Nav">
          <Outlet></Outlet>
        </section>
        <section className="Right_Nav"></section>
      </main>
    </div>
  );
};

export default Home;