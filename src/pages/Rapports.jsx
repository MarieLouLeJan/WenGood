import React from 'react';

import * as Scroll from 'react-scroll'
const Element = Scroll.Element

import Header from '../partials/Header';
import RapportsList from '../partials/RapportsList'

function Rapports() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-bg-200 via-bg-100 to-bg-200">

      <Header />

      <main className="grow">


      <Element name="Rapports">
        <RapportsList/>
      </Element>


      </main>


    </div>
  );
}

export default Rapports;