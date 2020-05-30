import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SmurfsContext } from '../contexts/SmurfsContext';
import Smurfs from '../components/Smurfs';

import './App.css';

const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

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
      <SmurfsContext.Provider value={{ smurfs, isFetching }}>
        <Smurfs />
      </SmurfsContext.Provider>
    </div>
  );
};

export default App;
