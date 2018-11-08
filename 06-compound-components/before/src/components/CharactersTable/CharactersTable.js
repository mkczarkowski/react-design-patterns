import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class CharactersTable extends Component {
  render() {
    const { characters } = this.props;
    const filteredCharacters = characters.map(character => {
      const { name, species, gender } = character;

      return { name, species, gender };
    });

    const charactersKeys =
      filteredCharacters.length > 0 ? Object.keys(filteredCharacters[0]) : [];

    const columns = charactersKeys.map(key => {
      return {
        Header: key,
        accessor: key,
      };
    });

    return characters ? (
      <ReactTable
        className="characters-table characters-table--light"
        data={filteredCharacters}
        columns={columns}
      />
    ) : null;
  }
}

CharactersTable.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharactersTable;
