import React from 'react';
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import impostors1 from '../../../../../../images/rapports/impostors/tokenomics1.png'
import impostors2 from '../../../../../../images/rapports/impostors/tokenomics2.png'
import impostors3 from '../../../../../../images/rapports/impostors/tokenomics3.png'


function Tokenomics() {

  return (
    <div className='max-w-6xl mx-12 mt-16 md:mt-8 lg:mt-8'>

      <div className="text-gray-100 space-y-6">

        <div className="space-y-12 text-justify text-xl">
          <img src={impostors1} alt="impostors1" />

          <div className="lg:space-x-8 flex flex-col lg:flex-row">

            <ul className='basis-1/2 pace-y-8 lg:space-y-16 my-auto'>

              <li className='flex flex-col space-y-4'>
                <Link to='https://opensea.io/collection/impostors-cosmetics-chest' className='flex space-x-4 text-blue-100'>
                  <BsTwitter size={25}/>
                  <p><b>$SUPER - SuperFarm</b></p>
                </Link>
                <p>
                  $SUPER est le coin de gouvernance  pour SUPERFARM, la société derrière IMPOSTORS. Les frais de transaction découlants des ventes du marché secondaire des NFTs d’impostors serons directement injectée dans la trésorerie du $SUPER DAO et le DAO votera sur la façon don le métaverse d’IMPOSTORS évoluera. Quand les deux mini jeux sortirons, les utilisateurs pourrons Stacker du $SUPER pour augmenter leur chances dans ces jeux.
                </p>
              </li>
              <li className='flex flex-col space-y-4'>
                <Link to='https://opensea.io/collection/impostors-genesis-aliens' className='flex space-x-4 text-blue-100'>
                  <BsTwitter size={25}/>
                  <p><b>Genesis Aliens</b> <span className='text-gray-100 text-sm'> - Total supply de 10,420</span></p>
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
              <li className='flex flex-col space-y-4'>
                <Link to='https://opensea.io/collection/impostors-cosmetics-chest' className='flex space-x-4 text-blue-100'>
                  <BsTwitter size={25}/>
                  <p><b>Cosmetics</b></p>
                </Link>
                <p>
                  Ces éléments serons des NFTs utilisable dans le jeux mais n’apporterons pas d’avantages lié au jeux, cependant certains d’entre eux permettrons à leur utilisateurs d’obtenir du $BLOOD.
                </p>
              </li>
            </ul>
            <ul className='basis-1/2 pt-8 lg:pt-0 space-y-8 my-auto'>
            <li className='flex flex-col space-y-4'>
                <Link to='https://opensea.io/collection/impostors-materials-box' className='flex space-x-4 text-blue-100'>
                  <BsTwitter size={25}/>
                  <p><b>$BLOOD</b></p>
                </Link>
                <p>
                  Ce token a été lancé en “fair launch” et non en “pré-vente”. Fair Launch offre une opportunité équitable à tous les investisseurs sans privilèges pour les investisseurs en dehors du réseau. Pré-vente, d'autre part, implique une vente privée de jetons à des investisseurs sélectionnés avant le lancement public, ce qui peut entraîner une concentration de jetons et une centralisation du projet. Ce token ne sera uniquement obtenu à travers la participation de l’écosystème IMPOSTORS. En d’autres mots en stakan le Genesis NFTs et en jouant aux jeux. Emission et l’utilisation du $BLOOD évolura en fonction de la base d’utilisateur.
                </p>
              </li>
              <li className='flex flex-col space-y-4'>
                <Link to='https://opensea.io/collection/impostors-genesis-pets' className='flex space-x-4 text-blue-100'>
                  <BsTwitter size={25}/>
                  <p><b>Pets</b> <span className='text-gray-100 text-sm'> - Total supply de 10,420</span></p>
                </Link>
                <p>
                  Mint gratuit pour les holders du Aliens Genesis, utilisé pour le mini jeux Bataille d’animaux / pet battling. When paired with Aliens from the same galaxy, they will achieve stat boosts.
                </p>
              </li>
              <li className='flex flex-col space-y-4'>
                <Link to='https://opensea.io/collection/impostors-materials-box' className='flex space-x-4 text-blue-100'>
                  <BsTwitter size={25}/>
                  <p><b>Materials</b></p>
                </Link>
                <p>
                  Token ERC-1155 NFTs produits par les LANDS. ces ressources serons nécessaires afin de construire et d’améliorer les OVNI/UFOs et de générer et améliorer les Pets/ animaux, améliorer les LANDs et plus encore.
                </p>
              </li>
              <li className='flex flex-col space-y-4'>
                <Link to='https://opensea.io/collection/impostors-materials-box' className='flex space-x-4 text-blue-100'>
                  <BsTwitter size={25}/>
                  <p><b>Land</b></p>
                </Link>
                <p>
                  À la fin de la saison génésis les holders du pack complet NFT cité au dessus pourrons minter leur LAND. La LAND produit des ressources et serons en mesure d’acceuillires des infrastructures construite par le holder. La combinaison des ALIEN/UFO/Pet et leur rareté sera déterminant pour la rareté de la LAND. 
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
