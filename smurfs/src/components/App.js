import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SmurfsContext } from '../contexts/SmurfsContext';
import SmurfForm from '../components/SmurfForm';
import Smurfs from '../components/Smurfs';

import './App.css';

const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  const [smurfToEdit, setSmurfToEdit] = useState({});

  const addSmurf = (smurf) => {
    if (smurf.id) {
      axios
        .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
        .then((res) => {
          console.log('res from addSmurf', res.data);
          setSmurfs(res.data);
        })
        .catch((err) => console.log('err', err));
    } else {
      axios
        .post('http://localhost:3333/smurfs', smurf)
        .then((res) => {
          console.log('res from addSmurf', res.data);
          setSmurfs(res.data);
        })
        .catch((err) => console.log('err', err));
    }
  };

  const deleteSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then((res) => {
        console.log('res from deleteSmurf', res.data);
        setSmurfs(res.data);
      })
      .catch((err) => console.log('err', err));
  };

  const editSmurf = (smurf) => {
    setSmurfToEdit(smurf);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then((res) => {
        console.log('res', res.data);
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);

  return (
    <div className='App'>
      <SmurfsContext.Provider
        value={{ smurfs, smurfToEdit, addSmurf, deleteSmurf, editSmurf }}
      >
        <SmurfForm />
        <Smurfs />
      </SmurfsContext.Provider>
    </div>
  );
};

export default App;
