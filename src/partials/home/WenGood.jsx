import team from '../../images/wenGood/team_landing.png'

function wenGood() {

  return (
    <section>
      <div className="max-w-8xl mx-auto px-4 md:px-10">

          <div className="md:max-w-8/12 mx-auto mt-64 text-center md:mt-32 md:mb-32" data-aos="fade-up" data-aos-delay="200">

            <img src={team} className='hidden md:flex w-8/12 md:w-7/12 lg:w-6/12 mx-auto pb-12' alt="wenGood" data-aos="fade-up" data-aos-delay="500"/>
            <h2 className="h2 mb-4">Votre équipe personnelle de recherche project web3</h2>
            <p className="text-lg md:text-xl">
              Wen Good Project est une entreprise spécialisée 
            </p>
            <p className="text-lg md:text-xl mb-4">
              dans la recherche de projets crypto
            </p>
            <p className="text-blue-100"> INFRASTRUCTURE - GAMING - NFT </p>

          </div>

      </div>
    </section>
  );
}

export default wenGood;

