import React, { useState } from 'react';
import team from '../../images/wenGood/team_landing.png'

function HeroHome() {

  return (
    <section className='bg-back-bg'>
      <div className="max-w-8xl mx-auto my-8 px-10 relative">

        {/* <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          
        </div> */}

        <div className="">

          <div className="max-w-8/12 mt-32 mx-auto mt-12 text-center md:mt-16 lg:mt-28" data-aos="fade-up" data-aos-delay="200">
            <img src={team} className='w-8/12 md:w-7/12 lg:w-6/12 mx-auto pb-8' alt="wenGood" data-aos="fade-up" data-aos-delay="500"/>
            <h2 className="h2 font-normal text-gray-100 mb-4">Votre équipe personnelle de recherche project web3</h2>
            <p className="text-xl text-gray-100">
              Wen good project est une entreprise spécialisée 
            </p>
            <p className="text-xl text-gray-100 mb-4">
              dans la recherche de projets crypto
            </p>
            <p className="text-BASE text-blue-100"> INFRASTRUCTURE - GAMING - NFT </p>
          </div>

          {/* <div className='basis-1/2 hidden lg:flex justify-center lg:my-auto'>
            <div className="relative flex items-center lg:my-auto" data-aos="fade-up" data-aos-delay="200">
              <img className="mx-auto" src={team} width="672" height="300" alt="WenGood" />
            </div>

          </div> */}

        </div>

      </div>
    </section>
  );
}

export default HeroHome;

