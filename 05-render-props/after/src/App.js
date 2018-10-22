import React from "react";
import { compose } from "recompose";
import "./styles.css";

import RickAndMortyCharacters from "./containers/RickAndMortyCharacters";
import CharactersCards from "./components/CharactersCards/CharactersCards";
import withLoading from "./components/shared/hoc/withLoading";
import withHandleError from "./components/shared/hoc/withHandleError";
import CharactersTable from "./components/CharactersTable";

const CharactersCardsWithLoadingAndHandleError = compose(
  withHandleError,
  withLoading
)(CharactersCards);

function App() {
  return (
    <div className="container">
      <RickAndMortyCharacters
        render={({ characters, loading, error }) => (
          <React.Fragment>
            <CharactersCardsWithLoadingAndHandleError
              characters={characters}
              loading={loading}
              error={error}
            />
            <CharactersTable characters={characters}/>
          </React.Fragment>
        )}
      />
    </div>
  );
}

export default App;
