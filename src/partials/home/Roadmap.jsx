import { useState, useRef } from 'react';
import roadmap from '../../images/wenGood/roadmap.png'

function Roadmap() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  return (
    <section className='mb-8' data-aos="fade-up" data-aos-delay="500">

      <div className="max-w-3xl mx-auto mb-4 text-blue-100 text-center md:hidden">
        <h2 className="h4" data-aos="fade-up">Roadmap</h2>
      </div>

      <div className="max-w-8xl mx-auto md:px-4 sm:px-6">

          <img src={roadmap} alt="roadmap" className='w-full md:w-7/12 lg:w-6/12 mx-auto' />
          
      </div>
        
    </section>
  );
}

export default Roadmap;