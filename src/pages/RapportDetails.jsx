import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import DocumentationRapport from '../partials/rapports/details/DocumentationRapport'

const RapportDetails = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-bg-200">

        <Header />

        <main className="grow flex-1 pt-32">

            <DocumentationRapport/>

        </main>

    </div>
  )
}

export default RapportDetails
