import React from 'react';
import oops from '../images/oops.png'
import Footer from '../partials/Footer';
import Header from '../partials/Header';

const PageNotFound = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-bg-200">

      <Header />

      <main className="grow">

        <section className="max-w-6xl mx-auto mt-40 space-y-8">

              <img src={oops} alt="Oops" className='w-5/12 mx-auto' />

              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h3 mb-4" data-aos="fade-up">Désolé, cette page n'existe pas !</h1>
              </div>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default PageNotFound
