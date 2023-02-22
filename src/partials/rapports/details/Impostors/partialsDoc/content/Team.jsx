import React, { useState } from 'react';
import EWainman from '../../../../../../images/rapports/impostors/team-ellio-wainman.png'
import MCaplan from '../../../../../../images/rapports/impostors/team-marty-caplan.png'
import TClancy from '../../../../../../images/rapports/impostors/team-tim-clancy.png'
import DPrate from '../../../../../../images/rapports/impostors/team-daniel-prate.png'

import { GrLinkedin } from 'react-icons/gr';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


function Team() {

  const [ showDescr, setShowDescr ] = useState([
    false,
    false,
    false,
    false
  ])

  const toggleDesciption = (i) => {
      let newShow = [ ...showDescr];
      newShow[i] = !newShow[i];
      setShowDescr(newShow)
  }

  const team = [
    {
      img: EWainman,
      name: 'Elliot Wainman',
      position: 'Co-fondateur de Superfarm -  Co-fondateur CEO Super Studio',
      description: `Elliot est un influenceur bien connu de l’écosystème web3, avec une base de plus de 1,2 million d’abonnés sur YouTube & Twitter. Avant de se consacrer à SuperFarm, il a co-fondé DApp Evolution, un écosystème de dApps construit sur Tron, ainsi que son produit phare TronChat, une dApp de médias sociaux. DApp Evolution et TronChat n'ont pas reçu le succès escompté, mais cela démontre et renforce la présence d’Elliot dans le milieu, et cela depuis 2018.`,
      linkedin: 'https://www.linkedin.com/in/elliot-wainman-67451484/'
    },
    {
      img: TClancy,
      name: 'Tim Clancy',
      position: 'Lead Developper chez SuperFarm',
      description: `Tim a débuté très tôt dans le monde du web3 (Ethereum, NFT & gaming). Avant SuperFarm, Tim a co-fondé VINCI VR, une plateforme de formation en réalité virtuelle. Il a 8 ans d'expérience en développement de logiciels, y compris des stages de 4 mois chez Amazon Robotics et EA.`,
      linkedin: 'https://www.linkedin.com/in/tim-clancy/'
    },
    {
      img: MCaplan,
      name: 'Marty Capla',
      position: 'Chef du secteur de jeux blockchain chez Amber',
      description: `Chez Amber, Marty a aidé à intégrer de nombreux développeurs jeux vidéos à l'équipe Impostors.  Avec plus de 20 ans d'expérience dans l'industrie du jeu, il a livré de nombreux titres. Avant Amber, il a travaillé chez SEGA (producteur), EA (producteur), Playstudios (producteur senior), Zynga (producteur senior) et plus encore.`,
      linkedin: 'https://www.linkedin.com/in/martinhuntercaplan/'
    },
    {
      img: DPrate,
      name: 'Daniel Prat',
      position: 'Directeur de jeu à Amber',
      description: `Vétéran de l'industrie du jeu de plus de 10 ans. Il a travaillé pour JumpStart Games pendant 8 ans à différents postes, du développeur de jeux jusqu'au directeur de production. JumpStart Games est la société derrière NeoPets, un site d’animaux virtuels qui a eu des dizaines de millions d'utilisateurs au début des années 2000.`,
      linkedin: 'https://www.linkedin.com/in/daniel-prate-3b347391/'
    },
  ]

  return (
    <div className='max-w-6xl mx-12 mt-24 md:mt-16 md:mt-8 lg:mt-8 '>

      <div className="text-gray-100 space-y-6">

        <div className="text-gray-100 text-justify text-xl mx-auto ">

            <p className='md:leading-7 lg:leading-9'>
              Certains des 30 membres de l'équipe sont doxxés. Cette équipe d'ingénieurs et de builders a de l'expérience dans ce domaine car certains de ses membres ont travaillé dans des studios AAA tels qu'Epic Games, Roblox, Pixar et d’autres. L'équipe de SuperFarm utilise les services d’un studio de jeux vidéos appelé Amber Studio pour aider à développer IMPOSTORS.
            </p>

        </div>

        <div className="md:flex flex-wrap" data-aos-id-team>

        { team.map((p, i) => {
          const { img, name, position, description, linkedin } = p;
          return (
            <div key={i} className={`py-4 sm:py-8 sm:px-3 w:7/12 md:w-5/12 mx-auto`} data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">

              <img className={`rounded-full mb-4 mx-auto border-solid border-2 border-blue-100 ${showDescr[i] && 'hidden'}`} src={img} width="200" height="200" alt={name} />

              <div className={`flex flex-col space-y-4 text-justify`} >

              <p className={`text-xl mx-auto`}>{name}</p>

              <div className={`text-sm text-blue-100 mx-auto text-center`} >{position.toUpperCase()}</div>        
                <AiOutlinePlus size={30} onClick={() => toggleDesciption(i)} className={`${showDescr[i]  && 'hidden'} mx-auto text-blue-100`} />
              </div>

              <div className={`flex flex-col text-center ${ !showDescr[i] && 'hidden'}`} >

                <div className={`text-base text-gray-100 mb-1 px-8 pt-4`}>
                  {description}
                </div>
                <a href={linkedin} className={`mx-auto`}  target="_blank" >
                  <GrLinkedin className='mx-auto hidden lg:flex' size={25}/>
                </a>
                <AiOutlineMinus className={`mx-auto text-blue-100`} size={30} onClick={() => toggleDesciption(i)} />
              </div>
                  
            </div>
        )})}
        </div>
      </div>
    </div>
  );
}

export default Team;
