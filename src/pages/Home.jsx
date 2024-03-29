import React, { useEffect } from 'react';
import * as Scroll from 'react-scroll';
const Element = Scroll.Element;

import Header from '../partials/Header';
import WenGood from '../partials/home/WenGood';
import Mission from '../partials/home/Mission';
import Team from '../partials/home/Team';
import MintPass from '../partials/home/MintPass';
import Roadmap from '../partials/home/Roadmap';
import Footer from '../partials/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER } from '../redux/slices/authSlice';


function Home() {

  const dispatch = useDispatch()



  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(
        SET_USER({
          isLoggedIn: false,
        }),
      ),
      1000 * 60 * 60
    );
    return () => clearTimeout(timer)
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-bg-200">

      <Header />

      <main className="grow flex-1">

        <Element name="wengood">
          <WenGood />
        </Element>

        <Element name="Mission">
          <Mission/>
        </Element>


        <Element name="Roadmap">
          <Roadmap/>
        </Element>

        <Element name="Team">
          <Team/>
        </Element>


        <Element name="Mintpass">
          <MintPass />
        </Element>

      </main>

      <Footer />

    </div>
  );
}

export default Home;