import React from 'react';
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { AiFillMediumSquare } from 'react-icons/ai'
import impostors1 from '../../../../../../images/rapports/impostors/tokenomics1.png'
import impostors2 from '../../../../../../images/rapports/impostors/tokenomics2.png'
import impostors3 from '../../../../../../images/rapports/impostors/tokenomics3.png'


function Tokenomics() {

  return (
    <div className='max-w-6xl mx-12 mt-16'>
      
      <header className="mb-12">
        <p className="text-4xl text-blue-100 text-center">Marketing & Réseaux sociaux</p>
      </header>

      <div className="text-gray-100 space-y-6">

        <div className="space-y-6 text-justify text-xl">
          <div className="space-x-8 flex">
            <ul className='basis-1/2 list-disc space-y-8'>
              <li className='flex flex-col space-y-4'>
                <Link to='https://opensea.io/collection/impostors-genesis-aliens' className='flex space-x-4 text-blue-100'>
                  <BsTwitter size={25}/>
                  <p><b>Genesis Aliens</b> <span className='text-gray-100'> - Totale supply de 10,420</span></p>
                </Link>
                <p>
                  Les holders pourrons participer à tout les évènements  “Genesis seasons” et ont eu un accès en avant première au jeux. Ils aurons aussi un avantage significatif pour l’aspect P&E. Le prix du mint en WL était de 0.69 et le mint en publique était de 0.96. La totalité de la supply à était vendu en quelques minutes sur la vente publique.
                </p>
              </li>
              <li className='flex flex-col space-y-4'>
                <Link to='https://opensea.io/collection/impostors-ufo' className='flex space-x-4 text-blue-100'>
                  <BsTwitter size={25}/>
                  <p><b>UFO's</b></p>
                </Link>
                <p>
                  Mint gratuit pour les holders du Aliens Genesis, utilisé pour le mini jeux de course d’OVNI/ UFO racing. Gagner des courses permeteras aux utilisateurs de remporter du $BLOOD et des ressources.
                </p>
              </li>
            </ul>
            <div className='basis-1/2'>
              <img src={impostors1} alt="impostors1" />
            </div>
          </div>
          {/* <div className="pt-8 space-y-4">
            <p>
              On peut retrouver entre autres, la célèbre chaine <b className='text-blue-100'>“Crypto Banter”</b> et ses 600K abonnés ainsi que <b className='text-blue-100'>“CryptoStache”</b> et ses 93k abonnés.
              Cela inclut des joueurs et des streamers avec un large public web2, ce qui présage une adoption de cet écosystème par des “normies” -personnes ne connaissant pas ou très peu le monde de la blockchain-. Le jeu prendra une approche saisonnière, donc chaque nouvelle saison devrait être lancée avec une nouvelle vague de marketing.
            </p>
            <YoutubeEmbed embedId="U2GAR8Xfuow"/>
            <YoutubeEmbed embedId="i7TAPu3wb90"/>
            <p>

            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
