import React, { useRef, useState } from 'react';

import AChevaugeon from '../images/team/Team-AChevaugeon.png';
import BSoucy from '../images/team/Team-BSoucy.png';
import JRMabille from '../images/team/Team-JRMabille.png';
import KWon from '../images/team/Team-KWon.png';
import Lourimax from '../images/team/Team-Lourimax.png';
import MBouchard from '../images/team/Team-MBouchard.png';
import { GrLinkedin } from 'react-icons/gr'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import config from '../css/tailwind.config';


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

  const getCurrentBreakpoints = () => {
    return Object.keys(config.theme.extend.screens).find((key) => `${window.innerWidth}px` > config.theme.extend.screens[key]);
  }

  const showDesciption = (i) => {
    if(window.innerWidth > 1100) {
      let newShow = [ ...showDescr];
      newShow[i] = true;
      console.log(window.innerWidth)
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
      console.log(i)
      let newShow = [ ...showDescrM];
      newShow[i] = !newShow[i];
      console.log(newShow)
      setShowDescrM(newShow)
    } else return;
  }

  const team = [
    {
      img: AChevaugeon,
      name: 'Arthur CHEVAUGEON',
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
      name: 'Kim WON',
      position: 'Project Adviser',
      description: `Professeur d'MBA expérimenté en Marketing et Blockchain. Kim aime enseigner l'Innovation et les nouvelles technologies, le Marketing digital et la pensée créative. Docteur en Philosophie (Ph.D.)esthétique et arts de l'Université Paris 8.`,
      show: 1,
      twitter: 'https://www.linkedin.com/in/kimwon/'
    },
    {
      img: MBouchard,
      name: 'Marine BOUCHARD',
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
                <div key={i} className={`sm:w-1/2 md:w-1/3 lg:w-1/3 py-4 sm:py-8 sm:px-3 `} data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" onMouseEnter={() => showDesciption(show)} onMouseLeave={() => hideDescription(show)}>
                  
                  <img className={`rounded-full mb-4 mx-auto `} src={img} width="200" height="200" alt={name} />
                  <div className={`flex flex-col`} >

                    <h4 className={`h4 font-medium mx-auto `}>{name}</h4>

                    <div className={`text-2xl text-gray-500 mx-auto ${
                      (( showDescr[show] && window.innerWidth > 1100) 
                      || (showDescrM[i] && window.innerWidth < 1100)) 
                      && 'hidden'}`} >{position}</div>

                    <AiOutlinePlus onClick={() => toggleDesciptionMobile(i)} className={`${showDescrM[i] && 'hidden'} mx-auto lg:hidden md:hidden`} />
                    <AiOutlineMinus onClick={() => toggleDesciptionMobile(i)} className={`${!showDescrM[i] && 'hidden'} mx-auto lg:hidden md:hidden`} />
                    <a href={twitter} target="_blank" ><GrLinkedin className='mx-auto my-2 lg:hidden md:hidden' size={25}/></a>

                  </div>
                  <div className={`flex flex-col text-center ${
                      (( !showDescr[show] && window.innerWidth > 1100) 
                      || (!showDescrM[i] && window.innerWidth < 1100)) 
                      && 'hidden'}`} >
                    <div className={`text-2xl text-gray-500 mb-1 `}>
                      {description}
                    </div>
                    <a href={twitter} target="_blank" ><GrLinkedin className='mx-auto hidden lg:flex' size={25}/></a>
                  </div>
                </div>
              )})}
{/* 
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/6 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={AChevaugeon} width="140" height="140" alt="AChevaugeon" />
                <h4 className="text-xl font-medium mb-1">Arthur CHEVAUGEON</h4>
                <div className="text-lg text-gray-500 mb-1">Fondateur</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@laraamprecht</a>
              </div>
            </div>

            <div className="sm:w-1/2 md:w-1/3 lg:w-1/6 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={JRMabille} width="140" height="140" alt="Team member 02" />
                <h4 className="text-xl font-medium mb-1">JR MABILLE</h4>
                <div className="text-lg text-gray-500 mb-1">Head Of Partnerships</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@marie_moon</a>
              </div>
            </div>
            
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/6 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={KWon} width="140" height="140" alt="Team member 03" />
                <h4 className="text-xl font-medium mb-1">Kim WON</h4>
                <div className="text-lg text-gray-500 mb-1">Project Adviser</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@mr_sebastian</a>
              </div>
            </div>

            <div className="sm:w-1/2 md:w-1/3 lg:w-1/6 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={MBouchard} width="140" height="140" alt="Team member 04" />
                <h4 className="text-xl font-medium mb-1">Lourimax</h4>
                <div className="text-lg text-gray-500 mb-1">Lead Developper</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@timothychandran</a>
              </div>
            </div>

            <div className="sm:w-1/2 md:w-1/3 lg:w-1/6 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={Lourimax} width="140" height="140" alt="Team member 05" />
                <h4 className="text-xl font-medium mb-1">Marine BOUCHARD</h4>
                <div className="text-lg text-gray-500 mb-1">Directrice Artistique</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@dominikprasad</a>
              </div>
            </div>

            <div className="sm:w-1/2 md:w-1/3 lg:w-1/6 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={BSoucy} width="140" height="140" alt="Team member 06" />
                <h4 className="text-xl font-medium mb-1">Bastien SOUCY</h4>
                <div className="text-lg text-gray-500 mb-1">Community Manager</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@daryamagic</a>
              </div>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;