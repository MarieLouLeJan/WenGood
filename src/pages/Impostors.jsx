import React from 'react'
import Header from '../partials/Header'
import DocumentationRapport from '../partials/rapports/details/Impostors/DocumentationRapport'

const Impostors = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-r to-bg-200 via-bg-100 to-bg-200">

        <Header />

        <main className="grow flex-1 mt-32">

            <DocumentationRapport/>

        </main>

    </div>
  )
}

export default Impostors
