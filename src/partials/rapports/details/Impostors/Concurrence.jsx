import React from 'react';
import amongUs from '../../../../images/rapports/impostors/amongUs.png'



function Concurrence() {
  return (
    <div className='max-w-8xl md:max-w-6xl mx-4 md:mx-12 mt-8 md:mt-0'>

      <div className="md:space-x-12 md:flex items-center">
        {/* Article section */}

        <div className='w-10/12 md:w-6/12 md:w-full basis:1/3 mx-auto my-8' data-aos="fade-up" data-aos-delay="200">
          <img src={amongUs} alt="amongUs" />
        </div>

        <div className="text-lg md:text-xl md:basis:2/3" data-aos="fade-up" data-aos-delay="200">
          <p>
            Malgré le fait qu'IMPOSTORS n'ait pas de concurrents basés sur la blockchain dans le genre du “jeu social”, son gameplay est presque identique à celui d'Among Us, qui a connu un pic d'activité avec 60 millions de joueurs actifs quotidiens et 500 millions de joueurs actifs mensuels au cours de la pandémie COVID en 2020. Among Us a généré 86 millions de dollars de revenus depuis son lancement en 2018.
          </p>
          <br />
          <p>
            Impostors a une meilleure qualité graphique et s'adressera évidemment à un public plus intéressé par le web3, même si tout est mis en oeuvre pour créer le moins de frictions possible avec un utilisateur web2.
          </p>
        </div>
        

      </div>
    </div>
  );
}

export default Concurrence;
