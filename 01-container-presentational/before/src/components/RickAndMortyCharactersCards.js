import React from 'react';
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';
const UNKNOWN_AVATAR_URL = `${
  process.env.PUBLIC_URL
}/images/unknown-avatar.png`;

class RickAndMortyCharactersCards extends React.Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    axios.get(API_URL).then(({ data: { results } }) => {
      this.setState({ characters: results });
    });
  }

  renderCards = () =>
    this.state.characters.map(
      ({ name, image = UNKNOWN_AVATAR_URL, species, gender }) => (
        <div className="id-card-wrapper" key={name}>
          <div className="id-card">
            <div className="profile-row">
              <div className="profile-row__avatar">
                <img
                  className="avatar__image"
                  src={image}
                  alt={`${name}'s avatar`}
                />
              </div>
              <div className="profile-row__desc">
                <h1 className="desc__name">{name}</h1>
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
              </div>
            </div>
          </div>
        </div>
      ),
    );

  render() {
    return this.renderCards();
  }
}

export default RickAndMortyCharactersCards;
