import React, { useContext } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';

const Smurf = ({ smurf }) => {
  const { deleteSmurf } = useContext(SmurfsContext);
  return (
    <>
      <h3>{smurf.name}</h3>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
      <button onClick={() => deleteSmurf(smurf.id)}>delete</button>
    </>
  );
};

export default Smurf;
