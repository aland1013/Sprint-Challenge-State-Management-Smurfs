import React, { useContext } from 'react';
import styled from 'styled-components';
import { SmurfsContext } from '../contexts/SmurfsContext';

const Div = styled.div`
  box-sizing: border-box;
  padding-bottom: 15px;
  width: 20%;
  margin: 20px auto;
  border: 1px solid black;
  border-radius: 8px;
`;

const Smurf = ({ smurf }) => {
  const { deleteSmurf, editSmurf } = useContext(SmurfsContext);
  return (
    <Div>
      <h3>{smurf.name}</h3>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
      <button onClick={() => deleteSmurf(smurf.id)}>delete</button>
      <button onClick={() => editSmurf(smurf)}>edit</button>
    </Div>
  );
};

export default Smurf;
