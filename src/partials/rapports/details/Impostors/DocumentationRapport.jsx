import { useState, useEffect } from 'react';

import Sidebar from './partialsDoc/Sidebar';
import MenuButton from './partialsDoc/MenuButton';
import Resume from './partialsDoc/content/Resume';
import PageNavigation from './partialsDoc/PageNavigation';
import Marketing from './partialsDoc/content/Marketing';
import Gameplay from './partialsDoc/content/Gameplay';
import Tokenomics from './partialsDoc/content/Tokenomics';
import Roadmap from './partialsDoc/content/Roadmap';
import Team from './partialsDoc/content/Team';
import LeveFond from './partialsDoc/content/LeveFond';
import Concurrence from './partialsDoc/content/Concurrence';
import Analyse from './partialsDoc/content/Analyse';
import { useRef } from 'react';


function DocumentationRapport() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ title, setTitle ] = useState('Résumé')
  const [ prev, setPrev ] = useState('') 
  const [ next, setNext ] = useState('')

  const categories = [
    'Résumé',
    'Marketing',
    'Gameplay & Assets',
    'Items & Tokenomics',
    'Roadmap',
    'Equipe',
    'Levé de fond',
    'Concurrence',
    'Notre analyse'
  ]

  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);

  useEffect(() => {
    const index = categories.indexOf(title)
    if(index === 0) {
      setPrev('')
      setNext(categories[index + 1])
    } else if (index === 8) {
      setNext('')
      setPrev(categories[index - 1])
    } else if (index > 0 && index < 8) {
      setPrev(categories[index - 1])
      setNext(categories[index + 1])
    }
  })

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-bg-200">

      <main className="grow ">
        <section className="">

          <div className="max-w-8xl mx-auto px-4 sm:px-6">
            <div>
              <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} title={title} setTitle={setTitle} categories={categories}/>

              <div className="md:grow md:pl-64 lg:pr-6 xl:pr-0">
                <div className=" md:pt-16 pb-8 md:pl-6 lg:pl-12">

                  <article className="flex xl:space-x-12">

                    <div className="min-w-0">

                      {/* Mobile hamburger + breadcrumbs */}
                      <div className="md:hidden flex fixed items-center py-4 w-11/12  bg-bg-200">
                        {/* Hamburger button */}
                        <MenuButton sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        {/* Breadcrumbs */}
                        <div className="flex items-center text-lg whitespace-nowrap min-w-0 ml-3">
                          <span className="text-blue-100">{title}</span>
                        </div>
                      </div>

                      { title === 'Résumé' && <Resume /> }
                      { title === 'Marketing' && <Marketing /> }
                      { title === 'Gameplay & Assets' && <Gameplay /> }
                      { title === 'Items & Tokenomics' && <Tokenomics /> }
                      { title === 'Roadmap' && <Roadmap /> }
                      { title === 'Equipe' && <Team /> }
                      { title === 'Levé de fond' && <LeveFond /> }
                      { title === 'Concurrence' && <Concurrence /> }
                      { title === 'Notre analyse' && <Analyse /> }

                      <PageNavigation prev={prev} next={next} setTitle={setTitle} />                 

                    </div>

                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default DocumentationRapport;
