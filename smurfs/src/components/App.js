import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SmurfsContext } from '../contexts/SmurfsContext';
import SmurfForm from '../components/SmurfForm';
import Smurfs from '../components/Smurfs';

import './App.css';

const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const addSmurf = (smurf) => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then((res) => {
        console.log('res from addSmurf', res.data);
        setSmurfs(res.data);
      })
      .catch((err) => console.log('err', err));
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

  useEffect(() => {
    setIsFetching(true);

    axios
      .get('http://localhost:3333/smurfs')
      .then((res) => {
        console.log('res', res.data);
        setSmurfs(res.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log('err', err);
        setIsFetching(false);
      });
  }, []);

  return (
    <div className='App'>
      <SmurfsContext.Provider
        value={{ smurfs, isFetching, addSmurf, deleteSmurf }}
      >
        <SmurfForm />
        <Smurfs />
      </SmurfsContext.Provider>
    </div>
  );
};

export default App;
