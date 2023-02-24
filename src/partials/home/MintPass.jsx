import React from 'react';
import pokemon from '../../images/wenGood/mintpass.jpg';
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc'

function MintPass() {

  const avantages = [
    'Accès à la plateforme et à la totalité des rapports présents et futurs à vie.',
    `Le génésis holder bénéficie dun airdrop dun deuxième NFT PFP qui lui donnera une utilité pour le moment secrète.`,
    `Droit de vote sur la sélection des projets étudiés par la communauté.`,
    `Opportunités de whitelists avec les meilleurs projets NFT de l’écosystème.`,
    `Offres exclusives en collaboration avec d'autres projets Web3.`,
    `Chaîne discord privée.`
  ]

  return (
    <section>
      <div className="max-w-full md:max-w-7xl mx-auto px-0 md:px-4 mt-10 mb-32">
        <div className="flex flex-col md:flex-row py-12 px-4 md:px-12">

          <div className="max-w-3xl mx-auto text-blue-100 text-center mb-8 md:hidden">
            <h2 className="h4" data-aos="fade-up">Mintpass</h2>
          </div>

          <div className="md:basis-1/3 mx-auto mb-12 md:my-auto" data-aos="zoom-out">
            <img src={pokemon} width="414" height="192" alt="Features" />
          </div>

          <div className="text-base md:text-xl mx-auto my-auto md:pl-20 flex flex-col md:basis-2/3">

            {avantages.map((av, i) => {
              return (
                <div key={i} className="flex flex-row mb-4 lg:mb-6 space-x-4 md:space-x-8" data-aos="zoom-out">
                  <div className='my-auto'>
                    <VscDebugBreakpointDataUnverified size={25} className='text-blue-100'/>
                  </div>
                  <p>
                    {av}
                  </p>
                </div> 
              )
            })}
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default MintPass;
