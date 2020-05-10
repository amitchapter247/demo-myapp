import React from 'react';
import './Loader.scss';
// import birdloader from '../../assets/images/fullpageloader.gif'

const FullPageLoader = () => {
  return (
    <div className={'main-loader'}>
      <div className={'loader'}>
        <svg className={'circular-loader'} viewBox='25 25 50 50'>
          <circle
            className={'loader-path'}
            cx='50'
            cy='50'
            r='20'
            fill='none'
            stroke='#f18d42'
            strokeWidth='2.5'
          />
        </svg>
        {/* <img src={birdloader} /> */}
      </div>
    </div>
  );
};

export default FullPageLoader;
