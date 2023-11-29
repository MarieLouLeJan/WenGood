import { AiOutlineArrowRight } from 'react-icons/ai'

function BreadCrumbs({ rapport, title }) {
  return (
    <div className='hidden md:flex max-w-8xl md:max-w-6xl mx-4 md:mx-12 mt-8 md:mt-0 md:my-12'>

      <div className='space-y-4 md:flex justify-between'>

        <p className='text-blue-100 flex flex-row items-center space-x-4 border border-blue-100 rounded-lg p-4 '>
          <span className="h4">{ rapport }</span> 
          <AiOutlineArrowRight size={25}/> 
          <span className='text-gray-100 h4'>{title}</span>
        </p>

      </div>
    </div>
  );
}

export default BreadCrumbs;
