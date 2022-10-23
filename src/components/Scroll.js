import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ border: '2px solid black', height: '40%', borderRadius: '20px' }}>
      {props.children}
    </div>
  );
};

export default Scroll;