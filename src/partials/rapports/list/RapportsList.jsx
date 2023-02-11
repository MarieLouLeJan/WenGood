import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import impostors from '../../../images/rapports/impostors/impostors-main.png';
import sidus from '../../../images/rapports/sidus/sidus.png';
import treeverse from '../../../images/rapports/treeverse/treeverse.png';
import rooniverse from '../../../images/rapports/rooniverse/rooniverse.png';
import stables from '../../../images/rapports/stables/stables.png';
import bigTime from '../../../images/rapports/big-time/big-time.png';
import { useDispatch } from 'react-redux';


function RapportsList() {

  const dispatch = useDispatch()

  const initialRapports = [
    {
        title: 'Impostors',
        content: `Un jeu de détection sociale comme Among Us, mais avec une qualité graphique AAA et des mécanismes de P&E. Premier jeux dans un “social metaverse” qui comprendra aussi des mini jeux, comme “courses d’OVNI” “bataille d’animaux” et des modes de jeux créés par les utilisateurs.`,
        date: 'Mars 2023',
        image: impostors
    },
    {
        title: 'Sidus Heroes',
        content: 'Sidus Heroes est un métaverse sous la forme d’un univers de planètes qui représentent plusieurs genres de game plays comme “battle arena, FPS, tower defender et autres. Avec ses mécaniques P2E ce titre de qualité AAA avec une impressionnante équipe, à toutes les qualités pour s’imposer comme un des titres les plus innovateurs du cryptogaming.',
        date: 'Mars 2023',
        image: sidus
    },
    {
        title: 'Treeverse',
        content: `Treeverse est un MMORPG en monde ouvert en vue de dessus ( Top down )  créé pour  mobiles avec des fonctionnalités d’intéractions sociales et une accentuation sur le jeu coopératif. Le titre a été révélé il y a un peu plus d'un an par la personnalité Loopify, très populaire dans le milieux NFT, qui se trouve aussi être à la tête du studio de développement de jeux Endless Clouds.`,
        date: 'Mars 2023',
        image: treeverse
    },
    {
        title: 'Rooniverse',
        content: `Entrez dans le monde sauvage et tribal des Roos qui se battent à mort pour la gloire! Recueillez des ressources dans les différentes Lands, combattez avec vos amis et construisez votre propre localité dans le Rooniverse! Rooniverse est jouable sur iOS, Android, PC et Mac. Développé par XP Foundry.`,
        date: 'Mars 2023',
        image: rooniverse
    },
    {
        title: 'Stables',
        content: `Rejoignez un jeu de fantasy équestre passionnant et prouvez que vous avez ce qu'il faut pour sortir du lot. Adoptez votre propre cheval de course virtuel, affrontez d'autres joueurs et gagnez des récompenses pour devenir le meilleur performeur de la communauté. Un model à la DERACE, fait par une équipe principalement Française.`,
        date: 'Mars 2023',
        image: stables
    },
    {
        title: 'Big Time',
        content: `Big Time est un jeu d'action-RPG multijoueur gratuit à jouer qui combine un combat rapide et une aventure à travers le temps et l'espace. Explorez les mystères antiques et les civilisations futuristes tout en vous battant à travers l'histoire. Ramassez des objets de collection digitaux rares et des token pendant que vous combattez et vainquez les ennemis.`,
        date: 'Mars 2023',
        image: bigTime
    },
  ]

  const [ search, setSearch ] = useState('');
  const [ rapports, setRapports ] = useState(initialRapports)

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    const valueSearch = e.target.value
    const rapportFiltered = initialRapports.filter(rap => rap.title.toLowerCase().includes(valueSearch.toLowerCase()))
    setRapports(rapportFiltered)
  }

  return (
    <section className='mt-28'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col py-8 md:py-20 ">

          <div className='flex justify-center mb-12'>
            <input type="text" className="form-input text-blue-100 border-2 border-blue-100 rounded-full text-center px-12 text-xl" placeholder="Chercher un rapport" value={search} onChange={(e) => handleInputChange(e)}/>
          </div>
          <div className="max-w-full md:max-w-none">
            <div className="grid gap-x-4 gap-y-12 grid-cols-2 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

              {
                rapports.map((rapport, i) => {
                  const { type, title, content, date, image } = rapport;
                  return (
                  <article key={i} className="flex flex-col h-full mx-4" data-aos="fade-up">
                    <header>
                    <Link className="block mb-6 drop-shadow-2xl" to={`/rapports/${title}`}>
                      <figure className="relative h-0 pb-9/16 overflow-hidden rounded-lg">
                        <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={image} width="352" height="198" alt={title} />
                      </figure>
                    </Link>
                    <h3 className="h4 mb-2">
                      <Link className="h3 hover:text-gray-100 transition duration-150 ease-in-out" to="/blog-post">{title}</Link>
                    </h3>
                  </header>
                <p className="text-lg text-gray-400 grow">{content}</p>
                <footer className=" text-right mt-4">
                  <div className="font-medium ">
                    <span className="text-gray-400">{date}</span>
                  </div>
                </footer>
              </article>
                  )
                })
              }

              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default RapportsList;
