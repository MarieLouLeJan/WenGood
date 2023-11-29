import React from 'react';
import bigTime from '../../../../images/rapports/bigTime/resume.png';
import jauge from '../../../../images/rapports/impostors/jauge.png'
import { BsTwitter, BsDiscord, BsInstagram, BsYoutube, BsTelegram } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { AiFillMediumSquare } from 'react-icons/ai'
import { FaWikipediaW } from 'react-icons/fa'


function Resume() {
  return (
    <div className='max-w-8xl md:max-w-6xl mx-4 md:mx-12 mt-8 md:mt-0 text-lg md:text-lg'>
      
      <header className="mb-12 mx-auto" data-aos="fade-up" data-aos-delay="200">
        <div className='flex md:w-10/12 flex-col items-center mx-auto'>
          <img src={bigTime} alt="impostors"/>
        </div>
        <div className='flex w-10/12 md:w-7/12 flex-col items-center mx-auto'>
          <img src={jauge} alt="impostors-jauge"/>
        </div>
      </header>

      <div className='mb-12 flex flex-col md:flex-row w-full lg:w-10/12 mx-auto md:space-x-8' data-aos="fade-up" data-aos-delay="400">
        <div className="md:basis-1/2 my-auto">
          <p className='md:text-right lg:leading-8 md:leading-7'>
            Au début du jeu, chaque joueur reçoit sa propre machine à remonter le temps qui lui permet de voyager à travers le temps et l'espace. Au cours de leur voyage, ils affronteront des monstres et collecteront des NFT à partir de conflits historiques déterminants. Afin de mener à bien leur mission, les joueurs doivent former des équipes allant jusqu'à six joueurs, et travailler ensemble pour découvrir une force mystérieuse qui menace de détruire le tissu même du temps.

            Le gameplay de Big Time rappelle les jeux de rôle populaires tels que "World of Warcraft" et "Genshin Impact". Le jeu offre aux joueurs un vaste monde à explorer où ils peuvent récolter des ressources et combattre différents ennemis pour gagner des niveaux et de l'équipement. Les mécaniques de combat sont dynamiques et incluent des attaques spectaculaires à zone d'effet, des capacités de mouvement fluides et bien plus encore.
          </p>
        </div>
        <div className="md:basis-1/2 mt-8 lg:mt-0 md:mt-0 my-auto">
          <div className='flex flex-end space-x-2 mb-4'>
              <a target='_blank' href='https://bigtime.gg/'>
                <BiWorld size={30} className="text-blue-100" />
              </a>
              <a target='_blank' href='https://twitter.com/playbigtime'>
                <BsTwitter size={30} className="text-twitter-1" />
              </a>
              <a target='_blank' href='https://discord.com/invite/bigtime'>
                <BsDiscord size={30} className="text-discord-1" />
              </a>
              <a target='_blank' href='https://medium.com/@playbigtime'>
                <AiFillMediumSquare size={30} className="text-gray-100" />
              </a>
              <a target='_blank' href='https://wiki.bigtime.gg/big-time-getting-started/welcome'>
                <FaWikipediaW size={30} className="text-blue-100" />
              </a>
              <a target='_blank' href='https://www.instagram.com/playbigtime/'>
                <BsInstagram size={30} className="text-insta-1" />
              </a>
              <a target='_blank' href='https://www.youtube.com/channel/UCItE3xYynz17DpmGK6ID1Vw'>
                <BsYoutube size={30} className="text-youtube-1" />
              </a>
              <a target='_blank' href='https://t.me/playbigtime'>
                <BsTelegram size={30} className="text-telegram-1" />
              </a>
            </div>
            <p className='text-blue-100 mt-4'>
              GENRE DU JEU
            </p>
            <p>
            Play & Earn / Free 2 Play / MMORPG / Troisième Personne / Aventure / Sci-Fi
            </p>
            <p className='text-blue-100 mt-4'>
              PHASE DE DEVELOPPEMENT
            </p>
            <p>
              Pré-Alpha / Accès anticipé aux détenteurs du passe Ruby
            </p>
            <p className='text-blue-100 mt-4'>
              BLOCKCHAIN
            </p>
            <p>
                Les NFT sont disponibles sur Ethereum et Binance Smart Chain.
                Des plans sont en cours pour devenir indépendant de la chaîne dans le futur. L'équipe a construit sa propre infrastructure économique dans le jeu appelée “le Vault”, qui est off-chain, mais les actifs peuvent être transférés  onchain à tout moment.
            </p>
            <p className='text-blue-100 mt-4'>
              PLATFORME
            </p>
            <p>
            PC - Construit avec Unreal Engine 4
            </p>
            <p className='text-blue-100 mt-4'>
              AUDIENCE CIBLE
            </p>
            <p>
                Orienté davantage vers les hommes, d’Amérique du Nord, ainsi que d'Europe. Non destiné aux joueurs occasionnels.
            </p>
            
          </div>
      </div>
      <div className='w-full lg:w-10/12 mx-auto md:text-center lg:leading-8 md:leading-7' data-aos="fade-up" data-aos-delay="400">
            Un RPG d'action multijoueur à la troisième personne en 3D avec un style de type Fortnite où vous voyagez à travers différentes époques de l'histoire du monde et de son futur. Fonctionnalité NFT pour les "Loots" et les "LANDs" où vous pouvez créer votre propre métaverse. <br />

            "L'humanité est au bord de l'extinction. Les murs de l'espace-temps s'effondrent, différentes époques de l'histoire se heurtent les unes aux autres et les forces des ténèbres traversent les larmes du temps." <br />

            Big Time est une bataille à travers l'histoire "Vous jouez en tant que voyageur temporel qui a été convoqué à la fin de l'univers, pour participer à la plus grande aventure de l'histoire humaine."<br />

            "Votre voyage vous enverra aux confins du temps et de l'espace, où vous rencontrerez d'anciens mystères, des dangers terrifiants, et même quelques visages familiers."<br />

            Big Time se concentre sur la livraison d'un intéressant mélange de différentes périodes de l’histoire, de personnages célèbres, d’événements et des technologies qui s’entrelacent, ce qui devrait plaire aux joueurs d'aventure ayant un intérêt pour l'histoire.
        </div>

    </div>
  );
}

export default Resume;
