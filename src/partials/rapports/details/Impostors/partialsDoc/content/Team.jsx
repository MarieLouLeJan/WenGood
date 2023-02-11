import React from 'react';
import EWainman from '../../../../../../images/rapports/impostors/team-ellio-wainman.png'
import MCaplan from '../../../../../../images/rapports/impostors/team-marty-caplan.png'
import TClancy from '../../../../../../images/rapports/impostors/team-tim-clancy.png'
import DPrate from '../../../../../../images/rapports/impostors/team-daniel-prate.png'

import { GrLinkedin } from 'react-icons/gr';


function Team() {

  const team = [
    {
      img: EWainman,
      name: 'Elliot Wainman',
      position: 'Co-fondateur Superfarm - Co-fondateur & CEO Super Studio',
      description: `Elliot un influencer bien connu de l’écosystème web3, avec une base de plus de 1,2 million d’abonnés sur YouTube & Twitter. Avant de se consacrer à SuperFarm, il a co-fondé DApp Evolution, un écosystème de dApps construit sur Tron, ainsi que son produit phare TronChat, une dApp de médias sociaux. DApp Evolution et TronChat n'ont pas reçu le succès escompté, mais cela démontre et renforce la présence d’Elliot dans le milieu, et ca depuis 2018.`,
      show: 1,
      twitter: 'https://www.linkedin.com/in/elliot-wainman-67451484/'
    },
    {
      img: TClancy,
      name: 'Team Clancy',
      position: 'Lead Developper chez SuperFarm',
      description: `Tim a débutté très tôt dans le monde du web3 (Ethereum, NFT & gaming). Avant SuperFarm, Tim a co-fondé VINCI VR, une plateforme de formation en réalité virtuelle. Il a 8 ans d'expérience en développement de logiciels, y compris des stages de 4 mois chez Amazon Robotics et EA.`,
      show: 1,
      twitter: 'https://www.linkedin.com/in/tim-clancy/'
    },
    {
      img: MCaplan,
      name: 'Marty Capla,',
      position: 'Chef du secteur de jeux blockchain chez Amber',
      description: `Avec Amber, Marty a aidé à intégrer de nombreux développeurs jeux vidéos à l'équipe Impostors. Il a 20 ans d'expérience dans l'industrie du jeu et a livré de nombreux titres. Avant Amber, il a travaillé chez SEGA (producteur), EA (producteur), Playstudios (producteur senior), Zynga (producteur senior) et plus encore.`,
      show: 1,
      twitter: 'https://www.linkedin.com/in/martinhuntercaplan/'
    },
    {
      img: DPrate,
      name: 'Daniel Prat',
      position: 'Directeur de jeu à Amber',
      description: `Vétéran de l'industrie du jeu de plus de 10 ans. Il a travaillé pour JumpStart Games pendant 8 ans à différents postes, du développeur de jeux jusqu'au directeur de production. JumpStart Games est la société derrière NeoPets, un site d’animaux virtuels qui a eu des dizaines de millions d'utilisateurs au début des années 2000.`,
      show: 2,
      twitter: 'https://www.linkedin.com/in/daniel-prate-3b347391/'
    },
  ]

  return (
    <div className='max-w-6xl mx-12 mt-16 md:mt-8 lg:mt-8 '>

      <div className="text-gray-100 space-y-6">


        <div className="text-gray-100 text-justify text-xl mx-auto ">

            <p className='md:leading-7 lg:leading-9'>
              Certains des 30 membres de l'équipe sont doxxés. Cette équipe d'ingénieurs et de builders a de l'expérience dans ce domaine car certains de ses membres ont travaillé dans des studios AAA tels qu'<b className='text-blue-100'>Epic Games, Roblox, Pixar</b> et d’autres. L'équipe de SuperFarm utilise les services d’un studio de jeux vidéos appelé <b className='text-blue-100'>Amber Studio</b> pour aider à développer IMPOSTORS.
            </p>

        </div>


        <div className="flex flex-wrap" data-aos-id-team>
              
              { team.map((p, i) => {
                const { img, name, position, description, show, twitter } = p;
                return (
                  <div key={i} className={`py-4 sm:py-8 sm:px-3 w-6/12`} data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
                    
                    <img className='rounded-full mb-4 mx-auto border-solid border-2 border-blue-100' src={img} width="200" height="200" alt={name}  />
                    <div className={`flex flex-col space-y-4 text-justify `} >

                      <p className={`text-xl mx-auto text-blue-100`}>{name}</p>

                      <div className={`text-sm text-blue-100 mx-auto text-center`} >{position.toUpperCase()}</div>

                      <a href={twitter} target="_blank" ><GrLinkedin className='mx-auto hidden lg:flex' size={25}/></a>


                      <p className='text-xl text-gray-100 mb-1 px-8 text-center'>{description}</p>

                    </div>

                  </div>
                )
              })}

          </div>
        </div>

    </div>
  );
}

export default Team;
