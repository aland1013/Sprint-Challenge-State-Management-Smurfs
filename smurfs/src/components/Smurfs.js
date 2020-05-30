import React, { useContext } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';
import Smurf from './Smurf';

const Smurfs = () => {
  const { smurfs } = useContext(SmurfsContext);
  console.log('smurfs', smurfs);

  return (
    <>
      {smurfs.map((smurf) => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </>
  );
};

export default Smurfs;
