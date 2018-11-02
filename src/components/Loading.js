import React from 'react';
import ReactLoading from 'react-loading';

export default () => {
  return (
    <div className="loading-wrapper">
      <ReactLoading type="spin" color="#badc58" className="loading" />
      <span style={{ color: '#badc58' }}>Loading</span>
    </div>
  );
};
