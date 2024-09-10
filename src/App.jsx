// import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './PlayersLists.jsx';
import React from 'react';

function App() {
  
  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center', margin: '20px 0'}}>Player Profiles</h1>
      <PlayerList />
    </div>
  )
}

export default App;
