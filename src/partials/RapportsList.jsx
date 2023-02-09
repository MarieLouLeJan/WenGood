import React from 'react';
import { Link } from 'react-router-dom';

import impostors from '../images/rapports/impostors/impostors-main.png';
import NewsAuthor01 from '../images/news-author-01.jpg';
import Badges from './Badges'

function RapportsList() {

  const rapports = [
    {
      type: [
        'play2earn',
        'JcJ'
      ],
      title: 'Impostors',
      content: 'Un jeu de détection sociale comme Among Us, mais avec une qualité graphique AAA et des mécanismes de P&E. Premier jeux dans un “social metaverse” qui comprendra aussi des mini jeux, comme “courses d’OVNI” “bataille d’animaux” et des modes de jeux créés par les utilisateurs.',
      date: 'Mars 2023',
      image: impostors
    }
  ]


  return (
    <section className='mt-28'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">NOS RAPPORTS</h2>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

              {
                rapports.map((rapport, i) => {
                  const { type, title, content, date, image } = rapport;
                  return (
                    <article key={i} className="flex flex-col h-full" data-aos="fade-up">
                  <header>
                  <Link className="block mb-6" to="/blog-post">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-lg">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={image} width="352" height="198" alt="News 01" />
                    </figure>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      {type.map((t, i) => {
                        return (
                          <Badges key={i} type={t}/>
                        )
                      })}
                    </ul>
                  </div>
                  <h3 className="h4 mb-2">
                    <Link className="h3 hover:text-gray-100 transition duration-150 ease-in-out" to="/blog-post">{title}</Link>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 grow">{content}</p>
                <footer className=" text-right mt-4">
                  {/* <a href="#0">
                    <img className="rounded-full shrink-0 mr-4" src={NewsAuthor01} width="40" height="40" alt="Author 01" />
                  </a> */}
                  <div className="font-medium ">
                    {/* <a className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Anastasia Dan</a>
                    <span className="text-gray-700"> - </span> */}
                    <span className="text-gray-500">{date}</span>
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
