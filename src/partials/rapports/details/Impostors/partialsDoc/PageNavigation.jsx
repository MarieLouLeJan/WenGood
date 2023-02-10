import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function PageNavigation({
  prev,
  next
}) {



  return (
    <div className="sm:flex items-center justify-between py-8 space-y-6 sm:space-y-0 sm:space-x-4">
      {/* Prev link */}
      {prev &&
        <button className="sm:w-1/2 sm:flex space-x-2 items-center items-start">
          <div className='my-auto'>
            <AiOutlineArrowLeft size={30} className='text-blue-100'/>
          </div>
          <span className='my-auto hover:text-blue-100'>{prev}</span>
        </button>
      }
      {/* Next link */}
      {next &&
        <button className="sm:w-1/2 sm:flex flex flex-row space-x-2 items-center ml-auto justify-end">
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
