import React from 'react';
import { Outlet } from 'react-router';
import Head from '../Components/Head';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

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
      <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
        <aside className='col-span-3'>
          <LeftAside></LeftAside>
        </aside>
        <section className="Main_Nav col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className='col-span-3'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Home;