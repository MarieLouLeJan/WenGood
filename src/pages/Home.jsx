import React from 'react';
import * as Scroll from 'react-scroll';
const Element = Scroll.Element;

import Header from '../partials/Header';
// import PageIllustration from '../partials/PageIllustration';
import WenGood from '../partials/WenGood';
import Mission1 from '../partials/Mission1';
import Mission from '../partials/Mission';
import Tabs from '../partials/Tabs';
import Target from '../partials/Target';
import News from '../partials/News';
import Newsletter from '../partials/Newsletter';
import Team from '../partials/Team';
import Mission2 from '../partials/Mission2';
import Tabs2 from '../partials/Tabs2'
import MintPass from '../partials/MintPass';
import Mission3 from '../partials/Mission3';
import Roadmap from '../partials/Roadmap';




// import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-bg-200 via-bg-100 to-bg-200">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow flex-1">

        {/*  Page illustration */}
        {/* <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div> */}

         {/* Page sections */}
        <Element name="wengood">
          <WenGood />
        </Element>

        {/* <Process /> */}
        <Element name="MISSION">
          {/* <Mission /> */}
          <Mission1/>
          {/* <Mission2/> */}
          {/* <Mission3/> */}
        </Element>


        <Element name="ROADMAP">
          <Roadmap/>
        </Element>


        {/* <Element name="mission">
          <Mission />
        </Element> */}

        <Element name="TEAM">
          <Team/>
        </Element>



        <Element name="MINTPASS">
          <MintPass />
        </Element>


        {/* <News /> */}

      </main>

       {/* Site footer */}
      {/* <Footer /> */}

    </div>
  );
}

export default Home;