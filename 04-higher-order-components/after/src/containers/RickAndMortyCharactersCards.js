import React from 'react';
import axios from 'axios';
import CharactersCards from '../components/CharactersCards/CharactersCards';

const API_URL = 'https://rickandmortyapi.com/api/character/';

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
      <CharactersCards
        characters={characters}
        loading={loading}
        error={error}
      />
    );
  }
}

export default RickAndMortyCharactersCards;
