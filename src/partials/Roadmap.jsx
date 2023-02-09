import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import { ImRocket } from 'react-icons/im'
import { HiArrowRight } from 'react-icons/hi'
import { CgArrowLongRight } from 'react-icons/cg'
import { VscDebugBreakpointDataUnverified, VscDebugBreakpointData } from 'react-icons/vsc'

function Roadmap() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  

  return (
    <section>

      <div className="max-w-3xl mx-auto text-center ">
        <h2 className="h2 mb-4" data-aos="fade-up">Roadmap</h2>
      </div>

      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-blue-200 h-5/6 border my-6" style={{left: '50%'}}></div>

          <div className="mb-8 flex justify-around items-center w-full right-timeline ">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-900 shadow-xl w-16 h-16 rounded-full">
              <h3 className="h3 mx-auto font-semibold text-white">Q1</h3>
            </div>
            <div className=" order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 py-4 h-1/4">
              <p className="h4 text-lg leading-snug tracking-wide text-gray-300 text-opacity-100 leading-8">
                 Lancement du projet
                 <br />
                 Début de construction du site
                 <br />
                 Développement des partenariats et collaborations
                 <br />
                 Sortie du site
              </p>
            </div>
          </div>


          <div className="mb-8 flex justify-around flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-900 shadow-xl w-16 h-16 rounded-full">
              <h3 className="h3 mx-auto font-semibold text-white">Q2</h3>
            </div>
            <div className=" order-1 bg-gray-900 rounded-lg text-right shadow-xl w-5/12 py-4 h-1/4">
              <p className="h4 text-lg leading-snug tracking-wide text-gray-300 text-opacity-100 leading-8">
                  Livraison des premiers rapports gratuits
                 <br />
                  Création de la 1ere collection de NFT
                 <br />
                  Mint
              </p>
            </div>
          </div>
          
          <div className="mb-8 flex justify-around items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-900 shadow-xl w-16 h-16 rounded-full">
              <h3 className="h3 mx-auto font-semibold text-white">Q3</h3>
            </div>
            <div className=" order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 py-4 h-1/4">
              <p className="h4 text-lg leading-snug tracking-wide text-gray-300 text-opacity-100 leading-8">
                  Application mobile
                <br />
                 Annonce de l’utilité du NFT PFP
                <br />
                  Implémentation de la monthly subscription
                <br />
                  Airdrop PFP NFT SPECIALE EDITION
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-around flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-900 shadow-xl w-16 h-16 rounded-full">
              <h3 className="h3 mx-auto font-semibold text-white">Q4</h3>
            </div>
            <div className=" order-1 bg-gray-900 rounded-lg text-right shadow-xl w-5/12 py-4 h-1/4">
              <p className="h4 text-lg leading-snug tracking-wide text-gray-300 text-opacity-100 leading-8">
                  Campagne marketing blablablablablabla
                  <br />
                  Un autre truc
                  <br />
                  encore una utre
              </p>
            </div>
          </div>


        </div>
      </div>
        
    </section>
  );
}

export default Roadmap;
