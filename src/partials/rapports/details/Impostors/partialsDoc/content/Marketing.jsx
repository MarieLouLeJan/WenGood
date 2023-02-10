import React, { useEffect, useState } from 'react';
import impostors1 from '../../../../../../images/rapports/impostors/impostors1.png'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { AiFillMediumSquare } from 'react-icons/ai'
import YoutubeEmbed from '../../../../../../utils/YoutubeEnbeded';
import { useRef } from 'react';


function Marketing() {

  // const windowWidth = useRef(window.innerWidth);

  // const [ width, setWidth ] = useState('')
  // const [ height, setHeight ] = useState('')

  // useEffect(() => {

  //   const handleWindowResize = () => {
  //     if (windowWidth.current > 1250) {
  //       setWidth('853') 
  //       setHeight('480')
  //     } else if (windowWidth.current < 1250 && windowWidth.current > 999) {
  //       console.log('coucou')
  //       setWidth('569') 
  //       setHeight('320')
  //     }
  //     console.log(windowWidth.current)
  //   };
  //   window.addEventListener('resize', handleWindowResize);

  // })



  return (
    <div className='max-w-6xl ml-24'>
      
      {/* <p className="text-5xl text-gray-100 mb-4">Impostors</p> */}

      <header className="mb-12">
        <p className="text-4xl text-gray-100 text-center">Marketing & Réseaux sociaux</p>
      </header>

      <div className="text-gray-100 space-y-6">
        {/* Article section */}

        <div className="space-y-6 text-justify text-xl">
          <div className="space-x-8 flex">
            <p className='basis-1/2'>
              Pour le moment, la majeure partie du marketing a été effectuée par le chef du projet, Elliot Wainman, qui est un des principaux influenceurs dans le domaine des jeux blockchain/NFT. Il est à l’avant-garde depuis 2018 et a fait croitre son auditoire à plus de 1,2 million d’abonnés sur YouTube et Twitter confondus. ( youtube <span className='font-semibold	'>576K</span>, twitter <span className='font-semibold	'>698.6K</span>)
              <br />
              IMPOSTORS fait partie de l’écosystème SuperFarm et est commercialisés auprès de cette communauté (leur token $SUPER compte plus de 37 000 détenteurs répartis dans trois chaînes différentes) ainsi que la communauté EllioTrades sur discord (11 000 membres). La communauté Impostors/Superfarm/EllioTrades est active sur Twitter et dans Discord. 
            </p>
            <p className='basis-1/2'>
              L’équipe est sensible aux commentaires et retours de ses communautés. Il n’est pas rare de croiser Ellio sur les différents discords pour parler pendant des heures de ses différents projets directement avec ses membres, plus particulièrement sur IMPOSTORS.
              <br />
              Jusqu’à présent, presque aucun marketing n’a été fait en dehors des communautés SuperFarm/EllioTrades, ce qui est vue comme un problème au sein de la communauté. Il semble que le plan est de stratégiquement conserver la majeure partie du marketing externe pour le lancement bêta ouvert. Certains créateurs de contenu populaire s’investissent dans Impostors/SuperFarm, et aurons un impact précieux au moment du lancement des différentes campagnes de marketing.
            </p>
          </div>
          <div className="pt-8 space-y-4">
            <p>
              On peut retrouver entre autres, la célèbre chaine “Crypto Banter” et ses 600K abonnés ainsi que “cryptoStache” et ses 93k abonnés.
              Cela inclut des joueurs et des streamers avec un large public web2, ce qui présage une adoption de cet écosystème par des “normies” (gens ne connaissant pas ou très peu le monde de la blockchain). Le jeu prendra une approche saisonnière, donc chaque nouvelle saison devrait être lancée avec une nouvelle vague de marketing.
            </p>
            <YoutubeEmbed embedId="U2GAR8Xfuow"/>
            <YoutubeEmbed embedId="i7TAPu3wb90"/>
            <p>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
