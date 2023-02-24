import React, { useEffect, useState } from 'react';
import AChevaugeon from '../../images/wenGood/team/AChevaugeon.jpg';
import BSoucy from '../../images/wenGood/team/BSoucy.jpg';
import JRMabille from '../../images/wenGood/team/JRMabille.jpg';
import KWon from '../../images/wenGood/team/KWon.jpg';
import Lourimax from '../../images/wenGood/team/Lourimax.jpg';
import MBouchard from '../../images/wenGood/team/MBouchard.jpg';
import { GrLinkedin } from 'react-icons/gr'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function Team() {

  useEffect(() => {
    console.log(window.innerWidth)
  })



  const [ showDescr, setShowDescr ] = useState([
    false,
    false,
    false,
    false,
    false,
    false
  ])

  const toggleDesciption = (i) => {
    if(window.innerWidth <= 1000 ) return
    else {
      let newShow = [ ...showDescr];
      newShow[i] = !newShow[i];
      setShowDescr(newShow)
    }
  }

  const team = [
    {
      img: AChevaugeon,
      name: 'Arthur Chevaugeon',
      position: 'Fondateur',
      description: `Projet NFT advisor sur ARTIES, chercheur de projets pour société anonyme, Arthur est un crypto enthusiast depuis 2019, spécialisé dans la recherche. Son expertise lui a permis d’accéder aux sphères les plus privées de l'écosystème web3 international et de mettre en place une équipe de recherche expérimentée.`,
      linkedin: 'https://www.linkedin.com/in/arthur-chevaugeon-749a6490/'
    },
    {
      img: JRMabille,
      name: 'Jean-Romain Mabille',
      position: 'Head of Partnership',
      description: `Jean-Romain est spécialisé dans la production et la gestion de projets dans l'industrie de l’Entertainment depuis 10 ans, passionné de web3, il nous apporte son expertise afin d'établir des liens B2b ciblés et durables entre les différents acteurs de cet écosystème.`,
      linkedin: 'https://www.linkedin.com/in/jean-romain-mabille-035a9199/'
    },
    {
      img: KWon,
      name: 'Kim Won',
      position: 'Project Adviser',
      description: `Professeur d'MBA expérimenté en Marketing et Blockchain. Kim aime enseigner l'Innovation et les nouvelles technologies, le Marketing digital et la pensée créative. Docteur en Philosophie (Ph.D.)esthétique et arts de l'Université Paris 8.`,
      linkedin: 'https://www.linkedin.com/in/kimwon/'
    },
    {
      img: MBouchard,
      name: 'Marine Bouchard',
      position: 'Directrice Artistique',
      description: `Web 3 enthousiaste, graphiste et conseillère en communication et identité visuelle.`,
      linkedin: 'https://www.linkedin.com/in/marine-bouchard-9227b285/'
    },
    {
      img: Lourimax,
      name: 'Lourimax',
      position: 'Lead Developper',
      description: `Grande fan de Sidus NFT Heroes, de mangas & de Web 3. Heureuse propriétaire d’un chihuahua.`,
      linkedin: ''
    },
    {
      img: BSoucy,
      name: 'Bastien Soucy',
      position: 'Community Manager',
      description: `Community Manager Web3, plus de 20 projets NFT/crypto accompagnés.`,
      linkedin: 'https://www.linkedin.com/in/bastien-soucy/'
    },
  ]

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-4 md:py-16 ">

          <div className="max-w-3xl mx-auto mb-8 text-blue-100 text-center md:hidden">
            <h2 className="h4" data-aos="fade-up">Team</h2>
          </div>

          <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" >
            { team.map((t, i) => {

              const { img, name, position, description, linkedin } = t;

              return (

                <div key={i} className={`pb-8 mx-auto w-full md:w-1/3 py-4 md:cursor-pointer ${showDescr[i]  && 'md:my-auto'}`}  onClick={() => toggleDesciption(i)} >

                  <img className={`rounded-full mb-4 mx-auto border-solid border-2 border-blue-100 ${showDescr[i] && 'md:hidden'}`} src={img} width="200" height="200" alt={name}/>

                  <div className='flex flex-col space-y-1' data-aos="fade-up" data-aos-delay="200">
                    <p className='text-xl mx-auto'>{name}</p>
                    <div className='text-sm text-blue-100 mx-auto'>
                        {position.toUpperCase()}
                    </div>
                    <AiOutlinePlus size={30} className={`hidden ${!showDescr[i]  && 'md:flex'}  mx-auto text-blue-100`} />
                  </div>

                  <div className={`flex flex-col text-center my-auto ${ !showDescr[i] && 'md:hidden'} space-y-2`} >
                    <div className='text-base md:text-lg mb-1 px-8 pt-4'>
                      {description}
                    </div>
                    <a href={linkedin} className='mx-auto' target="_blank" >
                      <GrLinkedin className='mx-auto' size={25}/>
                    </a>
                    <AiOutlineMinus className='hidden md:flex mx-auto text-blue-100' size={30} />
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