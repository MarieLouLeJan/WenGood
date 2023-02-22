import React from 'react';

import * as Scroll from 'react-scroll'
import Footer from '../partials/Footer';
const Element = Scroll.Element

import Header from '../partials/Header';
import RapportsList from '../partials/rapports/list/RapportsList'

function Rapports() {

  return (
    <div className=" min-h-screen overflow-hidden bg-bg-200">

      <Header />

      <main className="grow flex md:flex-col lg:flex-col">

      <Element name="Rapports">
        <RapportsList/>
      </Element>

      </main>

      <Footer />


    </div>
  );
}

export default Rapports;