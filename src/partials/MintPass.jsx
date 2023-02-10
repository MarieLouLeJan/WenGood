import React from 'react';
import pokemon from '../images/Mintpass/pokemon.jpg'
import { Link } from 'react-router-dom';
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc'


function MintPass() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 my-10">
        <div className="flex flex-col md:flex-row lg:flex-row py-12 px-12">
          {/* Section header */}
          <div className="basis-1/3 my-auto mx-auto mb-12" data-aos="zoom-out">
            <img src={pokemon} width="414" height="192" alt="Features" />
          </div>

          <div className="mx-auto my-auto lg:pl-20 md:pl-20 flex flex-col basis-2/3">

            <div className="flex flex-row mb-6" data-aos="zoom-out">
              <div>
                <VscDebugBreakpointDataUnverified size={40} className='text-blue-100'/>
              </div>
              <p className="text-xl text-gray-100 pl-8">
              Accès à la plateforme et à la totalité des rapports présents et futurs à vie.
              </p>
            </div>

            <div className="flex flex-row mb-6" data-aos="zoom-out">
              <div>
                <VscDebugBreakpointDataUnverified size={40} className='text-blue-100'/>
              </div>
              <p className="text-xl text-gray-100 pl-8">
              Le génésis holder bénéficie dun airdrop dun deuxième NFT PFP qui lui donnera une utilité pour le moment secrète.          
              </p>
            </div>

            <div className="flex flex-row mb-6" data-aos="zoom-out">
              <div>
                <VscDebugBreakpointDataUnverified size={40} className='text-blue-100'/>
              </div>
              <p className="text-xl text-gray-100 pl-8">
                Droit de vote sur la sélection des projets étudiés par la communauté.             
              </p>
            </div>


            <div className="flex flex-row mb-6" data-aos="zoom-out">
              <div>
                <VscDebugBreakpointDataUnverified size={40} className='text-blue-100'/>
              </div>
              <p className="text-xl text-gray-100 pl-8">
                Opportunités de whitelists avec les meilleurs projets NFT de l’écosystème.             
              </p>
            </div>

            <div className="flex flex-row mb-6" data-aos="zoom-out">
              <div>
                < VscDebugBreakpointDataUnverified size={40} className='text-blue-100'/>
              </div>
              <p className="text-xl text-gray-100 pl-8">
                Offres exclusives en collaboration avec d'autres projets Web3.             
              </p>
            </div>

            <div className="flex flex-row mb-6" data-aos="zoom-out">
              <div>
                <VscDebugBreakpointDataUnverified size={40} className='text-blue-100'/>
              </div>
              <p className="text-xl text-gray-100 pl-8">
                Chaîne discord privée.           
              </p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

export default MintPass;
