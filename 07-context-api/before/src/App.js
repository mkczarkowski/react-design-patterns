import React from 'react';
import './styles.css';

import RickAndMortyCharacters from './containers/RickAndMortyCharacters';
import Stepper from './components/Stepper/Stepper';
import StepperProvider from './components/Stepper/StepperProvider';

function App() {
  return (
    <div className="container">
      <RickAndMortyCharacters
        render={({ characters }) => (
          <StepperProvider data={characters}>
            <Stepper>
              <div className="block__element">
                <Stepper.Label />
                <Stepper.Image />
                <Stepper.Progress />
              </div>
            </Stepper>
          </StepperProvider>
        )}
      />
    </div>
  );
}

export default App;
