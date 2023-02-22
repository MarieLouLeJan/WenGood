import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Scroll from 'react-scroll'

function PageNavigation({
  prev,
  next,
  setTitle
}) {

  const scroll = Scroll.animateScroll;

  const handlePrev = (prev) => {
    setTitle(prev);
    scroll.scrollToTop()
  };

  const handleNext = (next) => {
    setTitle(next);
    scroll.scrollToTop()
  }

  return (
    <div className="flex items-center justify-between space-y-0 sm:space-x-4 content-between">
        <button className="flex items-center justify-between pt-16 space-x-4" onClick={() => handlePrev(prev)}>
          <div className={`${!prev && 'hidden'}`}>
            <AiOutlineArrowLeft size={30} className='text-blue-100'/>
          </div>
          <span className=' hover:text-blue-100'>{prev}</span>
        </button>

      {next &&
        <button className="flex items-center justify-between pt-16 space-x-4" onClick={() => handleNext(next)}>
          <span className='my-auto hover:text-blue-100'>{next}</span>
          <div className='my-auto'>
            <AiOutlineArrowRight size={30} className='text-blue-100'/>
          </div>
        </button>
      }
    </div>
  );
}

export default PageNavigation;
