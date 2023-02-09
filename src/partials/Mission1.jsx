import React from 'react';
import expertise from '../images/mission/expertise1.png'
import commu from '../images/mission/commu.png'
import apprentissage from '../images/mission/apprentissage.png'

function Mission1() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">


          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
              <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-blue-100 hidden md:block mx-auto" style={{ width: 'calc(80% - 32px)', left: 'calc(60% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
              <img className="w-16 h-16 mb-4" viewBox="0 0 64 64" src={expertise}/>
              <h4 className="h4 mb-2">Expertise</h4>
              <p className="text-lg text-gray-400 text-center"> Notre équipe d'experts fournit mensuellement des rapports impartiaux de haute qualité pour aider les investisseurs à prendre des décisions éclairées.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-blue-100 hidden md:block" style={{ width: 'calc(80% - 32px)', left: 'calc(60% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="400"></div>
              <img className="w-16 h-16 mb-4" viewBox="0 0 64 64" src={commu}/>
              <h4 className="h4 mb-2">Communauté</h4>
              <p className="text-lg text-gray-400 text-center">Plus que tout, nous croyons en la force de la collectivité. Plus qu’une entreprise, nous sommes une vraie communauté, retrouve-toi plongé entre investisseurs novice et aguerris.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
            <img className="w-16 h-16 mb-4" viewBox="0 0 64 64" src={apprentissage}/>
              <h4 className="h4 mb-2">Apprentissage</h4>
              <p className="text-lg text-gray-400 text-center">Nous mettons un point d'honneur à vous donner les outils permettants d'effectuer par vous même une recherche et analyse qualitative des projets web3 émergeants.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Mission1;