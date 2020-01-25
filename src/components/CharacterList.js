import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Button } from "reactstrap";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState('');
  const [filterCharacters, setFilterCharacters] = useState('');

  const apiUrl = 'https://rickandmortyapi.com/api/character/';
 
  useEffect(() => {
    // TODO: Add API Request here - must run in useEffect
    //  Important: verify the 2nd useEffect parameter: the dependancies array!
    charactersApi(apiUrl);
  }, []);

  const charactersApi = (apiUrl) => {
    axios
        .get(apiUrl)
        // Which we then set to state
        .then(res => {
          
          setFilterCharacters(res.data.results);
          setCharacters(res.data);
        })
        // Always include error handling
        .catch(err => console.log(err));
  };

  let showCharacters = function(){};
  let nextCharacters = function(){};
  let previousCharacters = function(){};
  
  if(characters !== '')
  {
    showCharacters = () => {
      let charactersList = [];
      filterCharacters.map(character => {
        charactersList.push(<CharacterCard key={character.id} character={character} />);
        return null;
      });
      return charactersList;
    }

  
  }

  return (
    <section className="character-list">
    <div>
      
      { characters !== '' &&
       <SearchForm characters={characters} setFilterCharacters={setFilterCharacters}  />
      }
       <Container>
       <Row>
        {showCharacters()}
       </Row>
      </Container>
    </div>
    </section>
  );
}

export default CharacterList;