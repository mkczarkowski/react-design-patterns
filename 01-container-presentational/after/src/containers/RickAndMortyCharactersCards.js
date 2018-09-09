import React from 'react';
import axios from 'axios';
import CharactersCards from '../components/CharactersCards';

const API_URL = 'https://rickandmortyapi.com/api/character/';

class RickAndMortyCharactersCards extends React.Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    axios.get(API_URL).then(({ data: { results } }) => {
      this.setState({ characters: results });
    });
  }

  render() {
    return <CharactersCards characters={this.state.characters} />;
  }
}

export default RickAndMortyCharactersCards;
