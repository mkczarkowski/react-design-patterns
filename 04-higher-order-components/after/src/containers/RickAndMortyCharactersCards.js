import React from 'react';
import axios from 'axios';
import { compose } from 'recompose';

import CharactersCards from '../components/CharactersCards/CharactersCards';
import withLoading from '../components/shared/hoc/withLoading';
import withHandleError from '../components/shared/hoc/withHandleError';

const API_URL = 'https://rickandmortyapi.com/api/character/';

const CharactersCardsWithLoadingAndHandleError = compose(
  withLoading,
  withHandleError,
)(CharactersCards);

class RickAndMortyCharactersCards extends React.Component {
  state = {
    characters: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then(({ data: { results } }) => {
        setTimeout(() => {
          this.setState({ characters: results, loading: false });
        }, 5000);
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { characters, loading, error } = this.state;

    return (
      <CharactersCardsWithLoadingAndHandleError
        characters={characters}
        loading={loading}
        error={error}
      />
    );
  }
}

export default RickAndMortyCharactersCards;
