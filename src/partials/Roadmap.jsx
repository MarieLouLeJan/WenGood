import React, { useState, useRef } from 'react';

function Roadmap() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  return (
    <section className='mb-8'>

      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden h-full">
          <div className="hidden md:flex border-2-2 absolute border-opacity-100 border-blue-100 h-5/6 border mt-12" style={{left: '50%'}} data-aos="fade-up" data-aos-delay="400"></div>

          <div className="mb-8 flex justify-around items-center w-full right-timeline" data-aos="fade-up" data-aos-delay="200">
            <div className="order-1 w-5/12 hidden lg:flex md:flex "></div>
            <div className="z-20 flex items-center bg-bg-100 border-solid border-4 border-blue-100 order-1 w-24 h-24 rounded-full">
              <p className="text-3xl mx-auto text-gray-100 text-blue-100">Q1</p>
            </div>
            <div className=" order-1 rounded-lg pl-6 lg:w-5/12 md:w-5/12 py-4 h-1/4">
              <p className="text-xl leading-snug tracking-wide text-blue-100 text-opacity-100 leading-8">
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


          <div className="mb-8 flex justify-around flex-row-reverse items-center w-full left-timeline" data-aos="fade-up" data-aos-delay="200">
            <div className="order-1 w-5/12 lg:flex md:flex hidden"></div>
            <div className="z-20 flex items-center bg-bg-100 md:border-solid border-4 border-blue-100 order-1 w-24 h-24 rounded-full">
              <p className="text-3xl mx-auto text-gray-100 text-blue-100">Q2</p>
            </div>
            <div className="border-r-2 border-blue-100 order-1 text-right pr-6 lg:border-0 lg:w-5/12 md:w-5/12 py-4 h-1/4">
              <p className=" text-xl leading-snug tracking-wide  text-blue-100 text-opacity-100 leading-8">
                  Livraison des premiers rapports gratuits
                 <br />
                  Création de la 1ere collection de NFT
                 <br />
                  Mint
              </p>
            </div>
          </div>
          
          <div className="mb-8 flex justify-around items-center w-full right-timeline" data-aos="fade-up" data-aos-delay="200">
            <div className="order-1 w-5/12 lg:flex md:flex hidden"></div>
            <div className="z-20 flex items-center bg-bg-100 border-solid border-4 border-blue-100 order-1 w-24 h-24 rounded-full">              
              <p className="text-3xl mx-auto text-gray-100 text-blue-100">Q3</p>
            </div>
            <div className=" order-1 rounded-lg pl-6 lg:w-5/12 md:w-5/12 py-4 h-1/4">
              <p className="text-xl leading-snug tracking-wide  text-blue-100 text-opacity-100 leading-8">
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

          <div className="mb-8 flex justify-around flex-row-reverse items-center w-full left-timeline" data-aos="fade-up" data-aos-delay="200">
            <div className="order-1 w-5/12 lg:flex md:flex hidden"></div>
            <div className="z-20 flex items-center bg-bg-100 border-solid border-4 border-blue-100 order-1 w-24 h-24 rounded-full">
              <p className="text-3xl mx-auto text-gray-100 text-blue-100">Q4</p>
            </div>
            <div className=" order-1 rounded-lg text-right pr-6 lg:w-5/12 md:w-5/12 py-4 h-1/4">
              <p className="text-xl leading-snug tracking-wide  text-blue-100 text-opacity-100 leading-8">
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
