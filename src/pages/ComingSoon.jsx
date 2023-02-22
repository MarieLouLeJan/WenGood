import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'

const ComingSoon = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-bg-200">

      <Header />

      <main className="grow">

        <section className="max-w-6xl mx-auto">

              <div className="mt-80 mx-auto">
                <h1 className="h1 text-center" data-aos="fade-up">Coming soon !</h1>
              </div>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default ComingSoon
