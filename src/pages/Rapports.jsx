import React from 'react';

import * as Scroll from 'react-scroll'
const Element = Scroll.Element

import Header from '../partials/Header';
import RapportsList from '../partials/RapportsList'

function Rapports() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <Header />

      <main className="grow">

      <RapportsList/>

      </main>


    </div>
  );
}

export default Rapports;