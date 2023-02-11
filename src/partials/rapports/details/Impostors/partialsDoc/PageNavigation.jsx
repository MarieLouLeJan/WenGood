import React from 'react';
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
    <div className="sm:flex items-center justify-between py-8 space-y-6 sm:space-y-0 sm:space-x-4">
      {/* Prev link */}
      {prev &&
        <button className="sm:w-1/2 sm:flex space-x-2 items-center items-start" onClick={() => handlePrev(prev)}>
          <div className='my-auto'>
            <AiOutlineArrowLeft size={30} className='text-blue-100'/>
          </div>
          <span className='my-auto hover:text-blue-100'>{prev}</span>
        </button>
      }
      {/* Next link */}
      {next &&
        <button className="sm:w-1/2 sm:flex flex flex-row space-x-2 items-center ml-auto justify-end" onClick={() => handleNext(next)}>
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
