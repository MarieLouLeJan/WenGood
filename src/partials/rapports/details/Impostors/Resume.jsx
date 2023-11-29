import React from 'react';
import impostors from '../../../../images/rapports/impostors/resume.png';
import jauge from '../../../../images/rapports/impostors/jauge.png'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { AiFillMediumSquare } from 'react-icons/ai'


function Resume() {
  return (
    <div className='max-w-8xl md:max-w-6xl mx-4 md:mx-12 mt-8 md:mt-0 text-lg md:text-xl'>
      
      <header className="mb-12 mx-auto space-y-8" data-aos="fade-up" data-aos-delay="200">
        <div className='flex md:w-10/12 flex-col items-center mx-auto'>
          <img src={impostors} alt="impostors"/>
        </div>
        <div className='flex w-10/12 md:w-10/12 flex-col items-center mx-auto border border-blue-100 rounded-lg p-4'>
          <img src={jauge} alt="impostors-jauge"/>
        </div>
      </header>

      <div className='flex flex-col md:flex-row w-full lg:w-10/12 mx-auto md:space-x-8'   data-aos="fade-up" data-aos-delay="400">
        <div className="md:basis-1/2 my-auto">
          <p className='md:text-right lg:leading-8 md:leading-7'>
          Un jeu d’investigation basé sur la coopération des joueurs  comme Among Us, mais avec une qualité graphique AAA et des mécanismes de P&E. C'est le premier metaverse de jeux sociaux qui aura également des mini-jeux tels que la course d'OVNIS, la bataille d’animaux et les modes de jeu créés par les utilisateurs. Impostors est une enquête  PvP où les Innocents doivent trouver les “Imposteurs” tout en terminant des mini-jeux sur la carte. Le but des Imposteurs est de tuer tout le monde. Chaque salle d'attente peut accueillir jusqu'à 15 personnes.
          </p>
        </div>
        <div className="md:basis-1/2 mt-8 lg:mt-0 md:mt-0 my-auto">
          <div className='flex flex-end space-x-2 mb-4'>
              <a target='_blank' href='https://impostors.gg/'>
                <BiWorld size={30} className="text-blue-100" />
              </a>
              <a target='_blank' href='https://twitter.com/PlayImpostors'>
                <BsTwitter size={30} className="text-twitter-1" />
              </a>
              <a target='_blank' href='https://discord.com/invite/impostors'>
                <BsDiscord size={30} className="text-discord-1" />
              </a>
              <a target='_blank' href='https://medium.com/@impostors'>
                <AiFillMediumSquare size={30} className="text-gray-100" />
              </a>
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
