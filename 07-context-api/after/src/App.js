import React from 'react';
import './styles.css';

import RickAndMortyCharacters from './containers/RickAndMortyCharacters';
import StepperProvider from './components/Stepper/StepperProvider';
import Stepper from './components/Stepper/Stepper';

function App() {
  return (
    <div className="container">
      <RickAndMortyCharacters
        render={({ characters }) => (
          <StepperProvider data={characters}>
            <Stepper>
              <Stepper.Label />
              <Stepper.Image />
              <Stepper.Progress />
            </Stepper>
          </StepperProvider>
        )}
      />
    </div>
  );
}

export default App;
