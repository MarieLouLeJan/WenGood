import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import impostors from '../../../images/rapports/impostors/impostors-main.png';
import rapport3 from '../../../images/rapports/rapport3/rapport3.png';
import rapport4 from '../../../images/rapports/rapport4/rapport4.png';
import rapport2 from '../../../images/rapports/rapport2/rapport2.png';
import rapport5 from '../../../images/rapports/rapport5/rapport5.png';
import rapport6 from '../../../images/rapports/rapport6/rapport6.png';

function RapportsList() {

  const initialRapports = [
    {
        title: 'Impostors',
        content: `Un jeu de détection sociale comme Among Us, mais avec une qualité graphique AAA et des mécanismes de P&E. Premier jeux dans un “social metaverse” qui comprendra aussi des mini jeux, comme “courses d’OVNI” “bataille d’animaux” et des modes de jeux créés par les utilisateurs.`,
        date: 'Mars 2023',
        image: impostors,
        open: true
    },
    {
        title: 'Loremipsss',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam vitae, amet explicabo commodi molestias a alias facilis cumque temporibus cum possimus autem esse nobis omnis maxime id officia soluta velit impedit illo natus tempore illum! Soluta dolorum impedit porro aliquam.',
        date: 'Mars 2023',
        image: rapport2,
        open: false
    },
    {
        title: 'Loremipsss',
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam vitae, amet explicabo commodi molestias a alias facilis cumque temporibus cum possimus autem esse nobis omnis maxime id officia soluta velit impedit illo natus tempore illum! Soluta dolorum impedit porro aliquam.`,
        date: 'Mars 2023',
        image: rapport3,
        open: false
    },
    {
        title: 'LoremIpssss',
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam vitae, amet explicabo commodi molestias a alias facilis cumque temporibus cum possimus autem esse nobis omnis maxime id officia soluta velit impedit illo natus tempore illum! Soluta dolorum impedit porro aliquam.`,
        date: 'Mars 2023',
        image: rapport4,
        open: false
    },
    {
        title: 'Loremipsss',
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam vitae, amet explicabo commodi molestias a alias facilis cumque temporibus cum possimus autem esse nobis omnis maxime id officia soluta velit impedit illo natus tempore illum! Soluta dolorum impedit porro aliquam.`,
        date: 'Mars 2023',
        image: rapport5,
        open: false
    },
    {
        title: 'Loremipsss',
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam vitae, amet explicabo commodi molestias a alias facilis cumque temporibus cum possimus autem esse nobis omnis maxime id officia soluta velit impedit illo natus tempore illum! Soluta dolorum impedit porro aliquam.`,
        date: 'Mars 2023',
        image: rapport6,
        open: false
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
        <div className="flex flex-col py-8 md:py-32 ">

          <div className='flex justify-center mb-12'>
            <input type="text" className="hidden form-input text-blue-100 border-2 border-blue-100 rounded-full text-center px-12 text-xl" placeholder="Chercher un rapport" value={search} onChange={(e) => handleInputChange(e)}/>
          </div>

          <div className="max-w-full md:max-w-none">
            <div className="grid gap-x-4 gap-y-12 grid-cols-2 md:grid-cols-3 md:gap-x-6 md:gap-y-24 items-start">

              {
                rapports.map((rapport, i) => {
                  const { title, content, date, image, open } = rapport;
                  return (
                  <article key={i} className={`flex flex-col h-full mx-4 ${(title !== 'Impostors') && 'blur-md'}`} data-aos="fade-up">
                    <header>
                    <Link className="block mb-6 drop-shadow-2xl" to={open ? (`/rapports/${title}`) : (`/rapports/comingSoon`)}>
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
