import React from 'react';
import { Outlet } from 'react-router';
import Head from '../Components/Head';

const Home = () => {
  return (
    <div>
      <header><Head></Head></header> 
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