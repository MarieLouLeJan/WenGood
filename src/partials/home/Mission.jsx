import React from 'react';
import expertise from '../../images/wenGood//mission/expertise1.png'
import commu from '../../images/wenGood//mission/commu.png'
import apprentissage from '../../images/wenGood//mission/apprentissage.png'

function Mission() {
  return (

    <section>
      <div className="max-w-6xl mx-auto mt-40 md:pt-20 mb-8 px-4 sm:px-6">
        <div className="pb-8 md:pb-20">

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

            <div className="max-w-3xl mx-auto text-blue-100 text-center md:hidden">
              <h2 className="h4" data-aos="fade-up">Mission</h2>
            </div>

            <div className="relative flex flex-col items-center" data-aos="fade-up">
              <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-blue-100 hidden md:block mx-auto" style={{ width: 'calc(80% - 32px)', left: 'calc(60% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
              <img className="w-16 h-16 mb-4" viewBox="0 0 64 64" src={expertise}/>
              <h4 className="text-lg md:text-2xl h4 mb-2">Expertise</h4>
              <p className="text-base md:text-lg  text-center"> Notre équipe d'experts fournit mensuellement des rapports impartiaux de haute qualité pour aider les investisseurs à prendre des décisions éclairées.</p>
            </div>

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-blue-100 hidden md:block" style={{ width: 'calc(80% - 32px)', left: 'calc(60% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="400"></div>
              <img className="w-16 h-16 mb-4" viewBox="0 0 64 64" src={commu}/>
              <h4 className="text-lg md:text-2xl h4 mb-2">Apprentissage</h4>
              <p className="text-base md:text-lg  text-center">Nous mettons un point d’honneur à te fournir les outils pour mener, par toi-même, une recherche qualitative et une analyse de projets Web3 émergents.</p>
            </div>

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
            <img className="w-16 h-16 mb-4" viewBox="0 0 64 64" src={apprentissage}/>
              <h4 className="text-lg md:text-2xl h4 mb-2">Communauté</h4>
              <p className="text-base md:text-lg  text-center">Nous croyons par-dessus tout en la force de la collectivité. Bien plus qu’une entreprise, nous sommes une vraie communauté, retrouve-toi plongé au cœur de ce collectif entre investisseurs novices et chevronnés.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;