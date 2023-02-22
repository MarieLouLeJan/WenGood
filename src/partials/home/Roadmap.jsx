import { useState, useRef } from 'react';
import roadmap from '../../images/wenGood/roadmap.png'

function Roadmap() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  return (
    <section className='mb-8' data-aos="fade-up">

      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">

          <img src={roadmap} alt="roadmap" className='w-full md:w-9/12 mx-auto' />
          
      </div>
        
    </section>
  );
}

export default Roadmap;