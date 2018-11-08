import React from 'react';
import './styles.css';

import RickAndMortyCharacters from './containers/RickAndMortyCharacters';
import Stepper from './components/Stepper/Stepper';

function App() {
  return (
    <div className="container">
      <RickAndMortyCharacters
        render={({ characters }) => <Stepper data={characters} />}
      />
    </div>
  );
}

export default App;
