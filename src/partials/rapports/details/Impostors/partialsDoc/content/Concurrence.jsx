import React from 'react';
import impostors1 from '../../../../../../images/rapports/impostors/impostors1.png'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { AiFillMediumSquare } from 'react-icons/ai'


function Concurrence() {
  return (
    <div>
      
      {/* <p className="text-5xl text-gray-100 mb-4">Impostors</p> */}

      <header className="mb-12">
        <div className='flex flex-col items-center'>
          <img width="535" height="1095" src={impostors1} alt="impostors"/>
        </div>
      </header>

      <div className='flex w-full mx-auto space-x-8'>
        <div className="basis-1/2 text-lg text-gray-100 my-auto">
          <div className='flex flex-end space-x-2 mb-8 justify-end'>
            <Link to='https://impostors.gg/'>
              <BiWorld size={30} className="text-blue-100" />
            </Link>
            <Link to='https://twitter.com/PlayImpostors'>
              <BsTwitter size={30} className="text-blue-100" />
            </Link>
            <Link to='https://discord.com/invite/impostors'>
              <BsDiscord size={30} className="text-blue-100" />
            </Link>
            <Link to='https://medium.com/@impostors'>
              <AiFillMediumSquare size={30} className="text-blue-100" />
            </Link>
          </div>
          <p className='text-right lg:leading-9 md:leading-p'>
            Un jeu de détection sociale comme Among Us, mais avec une qualité graphique AAA et des mécanismes de P&E. C'est le premier jeu dans un métaverre de jeux sociaux qui aura également des mini-jeux tels que la course d'OVNIS, la bataille d’animaux et les modes de jeu créés par les utilisateurs. Imposteurs est un mystère meurtrier PvP où les Innocents doivent trouver les Imposteurs tout en terminant des mini-jeux sur la carte, et le but des Imposteurs est de tuer tout le monde. Chaque salle d'attente peut accueillir jusqu'à 15 personnes.
          </p>
        </div>
        <div className="basis-1/2 text-lg text-gray-100 my-auto">
          <p className='text-blue-100 mt-4'>
            GENRE DU JEU
          </p>
          <p>
            Play & Earn / JcJ (joueur contre joueur) social gaming metaverse construit sur Unreal Engine
          </p>
          <p className='text-blue-100 mt-4'>
            PHASE DE DEVELOPPEMENT
          </p>
          <p>
            Bêta privée
          </p>
          <p className='text-blue-100 mt-4'>
            BLOCKCHAIN
          </p>
          <p>
            Ethereum
          </p>
          <p className='text-blue-100 mt-4'>
            PLATFORM
          </p>
          <p>
            PC, macOS (via Epic Games); le supports pour téléphone mobile est planifié.
          </p>
          <p className='text-blue-100 mt-4'>
            TARGET AUDIENCE
          </p>
          <p>
            Gameurs et gameuse de tout âges, jeunes et adultes.
          </p>
          
        </div>
      </div>

    </div>
  );
}

export default Concurrence;
