import React from 'react';

const Smurf = ({ smurf }) => {
  return (
    <>
      <h3>{smurf.name}</h3>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
    </>
  );
};

export default Smurf;
