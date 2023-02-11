import React from 'react';
import impostors from '../../../../../../images/rapports/impostors/resume.png';
import jauge from '../../../../../../images/rapports/impostors/jauge.png'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { AiFillMediumSquare } from 'react-icons/ai'


function Resume() {
  return (
    <div className='max-w-6xl mx-12 mt-16 md:mt-0 lg:mt-0'>
      
      <header className="mb-12 mx-auto">
        <div className='flex w-10/12 flex-col items-center mx-auto'>
          <img src={impostors} alt="impostors"/>
        </div>
        <div className='flex w-7/12 flex-col items-center mx-auto'>
          <img src={jauge} alt="impostors-jauge"/>
        </div>
      </header>

      <div className='flex w-full  lg:w-10/12 mx-auto space-x-8'>
        <div className="basis-1/2 text-xl md:text-2xl lg:text-2xl text-gray-100 my-auto">
          <p className='text-right lg:leading-7 md:leading-7'>
            Un jeu de détection sociale comme Among Us, mais avec une qualité graphique AAA et des mécanismes de P&E. C'est le premier metaverse de jeux sociaux qui aura également des mini-jeux tels que la course d'OVNIS, la bataille d’animaux et les modes de jeu créés par les utilisateurs. Impostors est un mystère meurtrier PvP où les Innocents doivent trouver les Impostors tout en terminant des mini-jeux sur la carte. Le but des Imposteurs est de tuer tout le monde. Chaque salle d'attente peut accueillir jusqu'à 15 personnes.
          </p>
        </div>
        <div className="basis-1/2 text-lg text-gray-100 my-auto">
        <div className='flex flex-end space-x-2 mb-4'>
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
            PLATFORME
          </p>
          <p>
            PC, macOS (via Epic Games); le supports pour téléphone mobile est planifié.
          </p>
          <p className='text-blue-100 mt-4'>
            AUDIENCE CIBLE
          </p>
          <p>
            Gameurs et gameuse de tout âges, jeunes et adultes.
          </p>
          
        </div>
      </div>

    </div>
  );
}

export default Resume;
