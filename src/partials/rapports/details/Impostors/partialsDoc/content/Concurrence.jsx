import React from 'react';
import impostors1 from '../../../../../../images/rapports/impostors/impostors1.png'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { AiFillMediumSquare } from 'react-icons/ai'


function Concurrence() {
  return (
    <div className='max-w-6xl mx-12 mt-16 md:mt-8 lg:mt-8'>

      <div className="text-gray-100 space-x-12">
        {/* Article section */}

        <div className="text-justify text-xl">
          <p>
            Malgré le fait qu'IMPOSTORS n'ait pas de concurrents basés sur la blockchain dans le genre des “jeux sociaux”, son gameplay est presque identique à celui d'Among Us, qui a connu un pic d'activité avec 60 millions de joueurs actifs quotidiens et 500 millions de joueurs actifs mensuels au cours de la pandémie COVID en 2020. Among Us a généré 86 millions de dollars de revenus depuis son lancement en 2018.
          </p>
          <br />
          <p>
            Impostors a une meilleure qualité graphique et s'adressera évidemment à un public plus intéressé par le web3, même si tout est mis en oeuvre pour créer le moins de friction possible avec un utilisateur web2. 
          </p>
        </div>
        

      </div>
    </div>
  );
}

export default Concurrence;
