import React from 'react';
import * as Scroll from 'react-scroll';
const Element = Scroll.Element;

import Header from '../partials/Header';
// import PageIllustration from '../partials/PageIllustration';
import WenGood from '../partials/WenGood';
import Mission from '../partials/Mission';
import Team from '../partials/Team';
import MintPass from '../partials/MintPass';
import Roadmap from '../partials/Roadmap';




// import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-bg-200 via-bg-100 to-bg-200">

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

    </div>
  );
}

export default Home;