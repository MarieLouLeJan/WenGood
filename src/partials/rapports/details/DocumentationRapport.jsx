import { useState, useEffect, useRef } from 'react';

import Sidebar from './partials/Sidebar';
import MenuButton from './partials/MenuButton';
import PageNavigation from './partials/PageNavigation';
import BreadCrumbs from './BreadCrumbs';

// IMPOSTORS
import ResumeImp from './Impostors/Resume';
import MarketingImp from './Impostors/Marketing';
import GameplayImp from './Impostors/Gameplay';
import TokenomicsImp from './Impostors/Tokenomics';
import RoadmapImp from './Impostors/Roadmap';
import TeamImp from './Impostors/Team';
import LeveFondImp from './Impostors/LeveFond';
import ConcurrenceImp from './Impostors/Concurrence';
import AnalyseImp from './Impostors/Analyse';

// BIG TIME
import ResumeBT from './BigTime/Resume';
import MarketingBT from './BigTime/Marketing';
// import GameplayBT from './BigTime/Gameplay';
// import TokenomicsBT from './BigTime/Tokenomics';
// import RoadmapBT from './BigTime/Roadmap';
// import TeamBT from './BigTime/Team';
// import LeveFondBT from './BigTime/LeveFond';
// import ConcurrenceBT from './BigTime/Concurrence';
// import AnalyseBT from './BigTime/Analyse';

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

  const currentRapport = window.location.href;

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

          <div className="max-w-8xl mx-auto px-2 md:px-4">
            <div>
              <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} title={title} setTitle={setTitle} categories={categories}/>

              <div className="md:grow md:pl-64 lg:pr-6">
                <div className=" md:pt-16 pb-8 md:pl-6 lg:pl-12">

                  <article className="flex xl:space-x-12">

                    <div className="min-w-0">

                      {/* Mobile hamburger + breadcrumbs */}
                      <div className="md:hidden flex fixed top-10 items-center pt-12 pb-4 w-11/12 bg-bg-200">
                        {/* Hamburger button */}
                        <MenuButton sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        {/* Breadcrumbs */}
                        <div className="flex items-center text-lg whitespace-nowrap min-w-0 ml-3">
                          <span className="text-blue-100">{title}</span>
                        </div>
                      </div>

                      {
                        currentRapport.includes('Impostors') && (
                          <div>
                            <BreadCrumbs rapport={'Impostors'} title={title} />
                            { title === 'Résumé' && <ResumeImp /> }
                            { title === 'Marketing' && <MarketingImp /> }
                            { title === 'Gameplay & Assets' && <GameplayImp /> }
                            { title === 'Items & Tokenomics' && <TokenomicsImp /> }
                            { title === 'Roadmap' && <RoadmapImp /> }
                            { title === 'Equipe' && <TeamImp /> }
                            { title === 'Levé de fond' && <LeveFondImp /> }
                            { title === 'Concurrence' && <ConcurrenceImp /> }
                            { title === 'Notre analyse' && <AnalyseImp /> }
                          </div>
                        )
                      }

                      {
                        currentRapport.includes('BigTime') && (
                          <div>
                            { title === 'Résumé' && <ResumeBT /> }
                            { title === 'Marketing' && <MarketingBT /> }
                            {/* { title === 'Gameplay & Assets' && <GameplayImp /> } */}
                            {/* { title === 'Items & Tokenomics' && <TokenomicsImp /> } */}
                            {/* { title === 'Roadmap' && <RoadmapImp /> } */}
                            {/* { title === 'Equipe' && <TeamImp /> } */}
                            {/* { title === 'Levé de fond' && <LeveFondImp /> } */}
                            {/* { title === 'Concurrence' && <ConcurrenceImp /> } */}
                            {/* { title === 'Notre analyse' && <AnalyseImp /> } */}
                          </div>
                        )
                      }



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
