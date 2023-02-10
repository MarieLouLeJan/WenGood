import React, { useState, useEffect } from 'react';

import Sidebar from './partialsDoc/Sidebar';
import MenuButton from './partialsDoc/MenuButton';
import PageContent from './partialsDoc/DocumentationContent';
import Feedback from './partialsDoc/Feedback';
import PageNavigation from './partialsDoc/PageNavigation';
import SecondaryNav from './partialsDoc/DocumentationNav';

function DocumentationRapport() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ title, setTitle ] = useState('')
  const [ prev, setPrev ] = useState('') 
  const [ next, setNext ] = useState('')

  const categories = [
    'Résumé',
    'Maketing',
    'Gameplay & Assets',
    'Items & Tokenomics',
    'Roadmap',
    'Equipe',
    'Levé de fond',
    'Concurrence',
    'Notre analyse'
  ]

  useEffect(() => {
    const index = categories.indexOf(title)

    if(index === 0) {
      setPrev('')
      setNext(categories[index + 1])
    } else if (index === 8) {
      setNext('')
      console.log(categories[index - 1])
      setPrev(categories[index - 1])
    } else if (index > 0 && index < 8) {
      console.log('salut')
      setPrev(categories[index - 1])
      setNext(categories[index + 1])
    }
  })

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-bg-200 via-bg-100 to-bg-200">

      {/*  Page content */}
      <main className="grow">
        <section className="">

          <div className="max-w-8xl mx-auto px-4 sm:px-6">
            <div>
              <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} title={title} setTitle={setTitle} categories={categories}/>

              <div className="md:grow md:pl-64 lg:pr-6 xl:pr-0">
                <div className="pt-24 md:pt-16 pb-8 md:pl-6 lg:pl-12">

                  <article className="flex xl:space-x-12">

                    {/* Main area */}
                    <div className="min-w-0">

                      {/* Mobile hamburger + breadcrumbs */}
                      <div className="md:hidden flex items-center mb-8">
                        {/* Hamburger button */}
                        <MenuButton sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        {/* Breadcrumbs */}
                        <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
                          <span className="text-gray-100">{title}</span>
                        </div>
                      </div>

                      {/* Article content */}
                      <PageContent />
      
                      {/* Feedback */}
                      {/* <Feedback /> */}
      
                      {/* Page navigation */}
                      <PageNavigation prev={prev} next={next} />                 

                    </div>

                    {/* Secondary navigation */}
                    {/* <SecondaryNav />                     */}

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
