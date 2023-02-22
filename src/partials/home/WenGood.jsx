import team from '../../images/wenGood/team_landing.png'

function wenGood() {

  return (
    <section className='bg-back-bg'>
      <div className="max-w-8xl mx-auto px-10 relative">

          <div className="max-w-8/12 mx-auto mt-20 text-center md:mt-24 md:mb-40" data-aos="fade-up" data-aos-delay="200">
            <img src={team} className='w-8/12 md:w-7/12 lg:w-6/12 mx-auto pb-12' alt="wenGood" data-aos="fade-up" data-aos-delay="500"/>
            <h2 className="h2 font-normal mb-4">Votre équipe personnelle de recherche project web3</h2>
            <p className="text-xl">
              Wen good project est une entreprise spécialisée 
            </p>
            <p className="text-xl mb-4">
              dans la recherche de projets crypto
            </p>
            <p className="text-blue-100"> INFRASTRUCTURE - GAMING - NFT </p>
          </div>

      </div>
    </section>
  );
}

export default wenGood;

