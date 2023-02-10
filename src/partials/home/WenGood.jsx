import React, { useState } from 'react';
import team from '../../images/wenGood/team_landing.png'

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className='bg-back-bg'>
      <div className="max-w-8xl mx-auto my-16 px-4 sm:px-4 relative">

        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          
        </div>

        <div className="relative lg:flex md:flex-row pt-16 md:pt-24 lg:pt-32">

          <div className="max-w-8/12 mt-36 text-center basis-1/2 lg:text-right lg:my-auto" data-aos="fade-up" data-aos-delay="200">
            <p className="text-4xl text-gray-100 mb-4 ml-8 lg:pl-64">Votre équipe personnelle de recherche project web3</p>
            <p className="text-xl text-gray-100">
              "Wen good project" est une entreprise spécialisée 
            </p>
            <p className="text-xl text-gray-100 mb-4">
              dans la recherche de projets crypto
            </p>
            <p className="text-BASE text-blue-100"> INFRASTRUCTURE - GAMING - NFT </p>
          </div>

          <div className='basis-1/2 hidden lg:flex justify-center lg:my-auto'>
            <div className="relative flex items-center lg:my-auto" data-aos="fade-up" data-aos-delay="200">
              <img className="mx-auto" src={team} width="672" height="300" alt="WenGood" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;

