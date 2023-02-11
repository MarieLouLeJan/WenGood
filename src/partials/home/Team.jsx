import React, { useState } from 'react';

import AChevaugeon from '../../images/team/Team-AChevaugeon.png';
import BSoucy from '../../images/team/Team-BSoucy.png';
import JRMabille from '../../images/team/Team-JRMabille.png';
import KWon from '../../images/team/Team-KWon.png';
import Lourimax from '../../images/team/Team-Lourimax.png';
import MBouchard from '../../images/team/Team-MBouchard.png';
import { GrLinkedin } from 'react-icons/gr'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


function Team() {

  const [ showDescr, setShowDescr ] = useState([
    false,
    false,
  ])

  const [ showDescrM, setShowDescrM ] = useState([
    false,
    false,
    false,
    false,
    false,
    false
  ])


  const showDesciption = (i) => {
    if(window.innerWidth > 1100) {
      let newShow = [ ...showDescr];
      newShow[i] = true;
      setShowDescr(newShow)
    } else return;

  }

  const hideDescription = (i) => {
    if(window.innerWidth > 1100) {
      let newShow = [ ...showDescr];
      newShow[i] = false;
      setShowDescr(newShow)
    } else return;
  }

  const toggleDesciptionMobile = (i) => {
    if(window.innerWidth < 1100) {
      let newShow = [ ...showDescrM];
      newShow[i] = !newShow[i];
      setShowDescrM(newShow)
    } else {
      let newShow = [ ...showDescr];
      newShow[show] = !newShow[show];
      setShowDescr(newShow)
    };
  }

  const team = [
    {
      img: AChevaugeon,
      name: 'Arthur Chevaugeon',
      position: 'Fondateur',
      description: `Projet NFT advisor sur ARTIES, chercheur de projets pour société anonyme, Arthur est un crypto enthusiast depuis 2019, spécialisé dans la recherche. Son expertise lui a permis d’accéder aux sphères les plus privées de l'écosystème web3 international et de mettre en place une équipe de recherche expérimentée.`,
      show: 1,
      twitter: 'https://www.linkedin.com/in/arthur-chevaugeon-749a6490/'
    },
    {
      img: JRMabille,
      name: 'Jean-Romain Mabille',
      position: 'Head of Partnership',
      description: `Jean-Romain est spécialisé dans la production et la gestion de projets dans l'industrie de l’Entertainment depuis 10 ans, passionné de web3, il nous apporte son expertise afin d'établir des liens B2b ciblés et durables entre les différents acteurs de cet écosystème.`,
      show: 1,
      twitter: 'https://www.linkedin.com/in/jean-romain-mabille-035a9199/'
    },
    {
      img: KWon,
      name: 'Kim Won',
      position: 'Project Adviser',
      description: `Professeur d'MBA expérimenté en Marketing et Blockchain. Kim aime enseigner l'Innovation et les nouvelles technologies, le Marketing digital et la pensée créative. Docteur en Philosophie (Ph.D.)esthétique et arts de l'Université Paris 8.`,
      show: 1,
      twitter: 'https://www.linkedin.com/in/kimwon/'
    },
    {
      img: MBouchard,
      name: 'Marine Bouchard',
      position: 'Directrice Artistique',
      description: `Web 3 enthousiaste, graphiste et conseillère en communication et identité visuelle.`,
      show: 2,
      twitter: 'https://www.linkedin.com/in/marine-bouchard-9227b285/'
    },
    {
      img: Lourimax,
      name: 'Lourimax',
      position: 'Lead Developper',
      description: `Grande fan de Sidus NFT Heroes, de mangas & de Web 3. Heureuse propriétaire d’un chihuahua.`,
      show: 2,
      twitter: ''
    },
    {
      img: BSoucy,
      name: 'Bastien Soucy',
      position: 'Community Manager',
      description: `Community Manager Web3, plus de 20 projets NFT/crypto accompagnés.`,
      show: 2,
      twitter: 'https://www.linkedin.com/in/bastien-soucy/'
    },
  ]

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 ">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4"></h2>
            {/* <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consequat.</p> */}
          </div>

          <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>
            
            { team.map((p, i) => {
              const { img, name, position, description, show, twitter } = p;
              return (
                <div key={i} className={`sm:w-1/2 md:w-1/3 lg:w-1/3 py-4 sm:py-8 sm:px-3 `} data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
                  
                  <img className='rounded-full mb-4 mx-auto border-solid border-2 border-blue-100' src={img} width="200" height="200" alt={name}  onMouseEnter={() => showDesciption(show)} onMouseLeave={() => hideDescription(show)} />
                  <div className={`flex flex-col`} >

                    <p className={`text-xl mx-auto text-blue-100`}>{name}</p>

                    <div className={`text-sm text-blue-100 mx-auto `} >
                        {position.toUpperCase()}
                    </div>
                    <div className=''>  
                    <a href={twitter} target="_blank" ><
                      GrLinkedin className='mx-auto my-2 ' size={25}/>
                    </a>
                    <AiOutlinePlus size={30} onClick={() => toggleDesciptionMobile(i, show)} className={`${(showDescrM[i] || showDescr[show]) && 'hidden'} mx-auto text-blue-100`} />
                    </div>
                  </div>
                  <div className={`flex flex-col text-center ${
                      (( !showDescr[show] && window.innerWidth > 1100) 
                      || (!showDescrM[i] && window.innerWidth < 1100)) 
                      && 'hidden'}`} >
                    <div className={`text-base text-gray-100 mb-1 px-8 pt-4`}>
                      {description}
                    </div>
                    <a href={twitter} className={`${!showDescrM[i] && 'hidden'} mx-auto lg:hidden md:hidden `}  target="_blank" >
                      <GrLinkedin className='mx-auto hidden lg:flex' size={25}/>
                    </a>
                    <AiOutlineMinus className={`mx-auto text-blue-100 ${!showDescrM[i] && 'hidden'}`} size={30} onClick={() => toggleDesciptionMobile(i)} />

                  </div>
                </div>
              )})}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;