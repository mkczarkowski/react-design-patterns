import React from 'react';
import './styles.css';

import RickAndMortyCharacters from './containers/RickAndMortyCharacters';
import Stepper from './components/Stepper/Stepper';

function App() {
  return (
    <div className="container">
      <RickAndMortyCharacters
        render={({ characters }) => (
          <Stepper data={characters}>
            <Stepper.Label />
            <Stepper.Label type="status" />
            <Stepper.Image />
            <Stepper.Progress />
          </Stepper>
        )}
      />
    </div>
  );
}

export default App;
