import React, { useState, useRef } from 'react';

function Roadmap() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  return (
    <section className='mb-8'>

      <div className="relative container mx-auto w-full overflow-visible">


          <div className="z-0 hidden md:flex border-2-2 absolute border-opacity-100 border-blue-100 md:w-9/12 lg:w-9/12 border mx-auto " style={{top: '53%', left: '12%'}} data-aos="fade-up" data-aos-delay="200"></div>

          <div className='flex justify-around'>
            <div className="rounded-lg border-2 border-blue-100 lg:w-5/12 md:w-5/12 py-4">
              <p className="text-xl leading-snug tracking-wide text-gray-100 text-opacity-100 leading-8  text-center">
                 Lancement du projet
                 <br />
                 Début de construction du site
                 <br />
                 Développement des partenariats & collaborations
                 <br />
                 Sortie du site
              </p>
            </div>
            <div className="order-1 rounded-lg border-2 border-blue-100 lg:w-5/12 md:w-5/12 py-4  text-center">
              <p className="text-xl leading-snug tracking-wide text-gray-100 text-opacity-100 leading-8">
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

          <div className='z-50 flex justify-around mt-12'>
            <div className="flex items-center bg-bg-100 border-solid border-4 border-blue-100 w-24 h-24 rounded-full overflow-hidden">
              <p className="text-3xl mx-auto text-gray-100 text-blue-100">Q1</p>
            </div>

            <div className="flex items-center bg-bg-100 border-solid border-4 border-blue-100 w-24 h-24 rounded-full">
              <p className="text-3xl mx-auto text-gray-100 text-blue-100">Q2</p>
            </div>

            <div className="flex items-center bg-bg-100 border-solid border-4 border-blue-100 w-24 h-24 rounded-full">
              <p className="text-3xl mx-auto text-gray-100 text-blue-100">Q3</p>
            </div>

            <div className="flex items-center bg-bg-100 border-solid border-4 border-blue-100 w-24 h-24 rounded-full">
              <p className="text-3xl mx-auto text-gray-100 text-blue-100">Q4</p>
            </div>
          </div>

          <div className='flex justify-around mt-12'>
            <div className="order-1 rounded-lg border-2 border-blue-100 lg:w-5/12 md:w-5/12 py-4 h-1/4 text-center">
              <p className="text-xl leading-snug tracking-wide  text-gray-100 text-opacity-100 leading-8">
                  Livraison des premiers rapports gratuits
                 <br />
                  Création de la premiere collection de NFT
                 <br />
                  Mint
              </p>
            </div>
            <div className="order-1 rounded-lg border-2 border-blue-100 lg:w-5/12 md:w-5/12 py-4 h-1/4 text-center">
              <p className="text-xl leading-snug tracking-wide text-gray-100 text-opacity-100 leading-8">
                  Campagne marketing blablablablablabla
                  <br />
                  Un autre truc
                  <br />
                  encore una utre
              </p>
            </div>
          </div>



          {/* <div className="relative mb-8 flex justify-around items-center w-full right-timeline" data-aos="fade-up" data-aos-delay="200">

            <div className="order-1 w-5/12 hidden lg:flex md:flex "></div>
            
            <div className="z-20 flex items-center bg-bg-100 border-solid border-4 border-blue-100 order-1 w-24 h-24 rounded-full">
              <p className="text-3xl mx-auto text-gray-100 text-blue-100">Q1</p>
            </div>
            
            <div className="order-1 rounded-lg border-2 border-blue-100 pl-6 lg:w-5/12 md:w-5/12 py-4 h-1/4">
              <p className="text-xl leading-snug tracking-wide text-blue-100 text-opacity-100 leading-8">
                 Lancement du projet
                 <br />
                 Début de construction du site
                 <br />
                 Développement des partenariats & collaborations
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

            <div className="order-1 rounded-lg border-2 border-blue-100 pr-6 lg:w-5/12 md:w-5/12 py-4 h-1/4 text-right">
              <p className="text-xl leading-snug tracking-wide  text-blue-100 text-opacity-100 leading-8">
                  Livraison des premiers rapports gratuits
                 <br />
                  Création de la premiere collection de NFT
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
            <div className="order-1 rounded-lg border-2 border-blue-100 pl-6 lg:w-5/12 md:w-5/12 py-4 h-1/4">
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

          <div className="mb-8 flex justify-around flex-row-reverse items-center w-full left-timeline" data-aos="fade-up" data-aos-delay="100">
            <div className="order-1 w-5/12 lg:flex md:flex hidden"></div>
            <div className="z-20 flex items-center bg-bg-100 border-solid border-4 border-blue-100 order-1 w-24 h-24 rounded-full">
              <p className="text-3xl mx-auto text-gray-100 text-blue-100">Q4</p>
            </div>
            <div className="order-1 rounded-lg border-2 border-blue-100 pr-6 lg:w-5/12 md:w-5/12 py-4 h-1/4 text-right">
              <p className="text-xl leading-snug tracking-wide  text-blue-100 text-opacity-100 leading-8">
                  Campagne marketing blablablablablabla
                  <br />
                  Un autre truc
                  <br />
                  encore una utre
              </p>
            </div>
          </div> */}


      </div>
        
    </section>
  );
}

export default Roadmap;
