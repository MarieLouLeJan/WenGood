import React from 'react';

import Feedback01 from '../../../../../images/nonused/feedback-01.svg';
import Feedback02 from '../../../../../images/nonused/feedback-02.svg';
import Feedback03 from '../../../../../images/nonused/feedback-03.svg';
import Feedback04 from '../../../../../images/nonused/feedback-04.svg';

function Feedback() {
  return (
    <div className="flex items-center justify-between py-8 border-b border-slate-200 space-x-6">
      <div className="text-lg font-bold text-gray-100">Was this helpful?</div>
      <div className="flex items-center space-x-4">
        <button className="opacity-30">
          <span className="sr-only">No, it didn't help</span>
          <img src={Feedback01} width="21" height="21" alt="No, it didn't help" />
        </button>
        <button className="opacity-30">
          <span className="sr-only">Still feel confused</span>
          <img src={Feedback02} width="21" height="21" alt="Still feel confused" />
        </button>
        <button>
          <span className="sr-only">Sounds good!</span>
          <img src={Feedback03} width="21" height="21" alt="Sounds good!" />
        </button>
        <button className="opacity-30">
          <span className="sr-only">Excellent article</span>
          <img src={Feedback04} width="21" height="21" alt="Excellent article" />
        </button>
      </div>
    </div>
  );
}

export default Feedback;
