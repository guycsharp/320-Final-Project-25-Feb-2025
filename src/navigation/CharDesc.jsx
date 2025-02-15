import React from 'react';
import PropTypes from 'prop-types';

import '../css/CharDesc.css'


const characterImages = {
    'default': 'https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg',
    'Luke Skywalker': 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop16x9.1920w.jpg',
    'Darth Vader': 'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720',
    'Leia Organa': 'https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786',
    'C-3PO': 'https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536',
    'R2-D2': 'https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536',
    'Owen Lars': 'https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593',
    'Beru Whitesun lars': 'https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527',
    'R5-D4': 'https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666',
    'Biggs Darklighter': 'https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878',
    'Obi-Wan Kenobi': 'https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721'
};

const CharDesc = ({ character }) => {
    const characterImage = characterImages[character.name] || characterImages['default'];

    console.log(characterImage)
    if (character.name == 'default') {
        return (
        <div className="character-description">
            <img src={characterImage}
             alt={character.name} className="img-fluid mb-3" 
             width='600' height='400'
             />
        </div>
        )
    }

    return (
        <div className="character-description">
            <img src={characterImage} alt={character.name} className="img-fluid mb-3" width='600' height='400'/>
            <h2>{character.name}</h2>
            <p><strong>Height:</strong> {character.height} cm</p>
            <p><strong>Mass:</strong> {character.mass} kg</p>
            <p><strong>Hair Color:</strong> {character.hair_color}</p>
            <p><strong>Skin Color:</strong> {character.skin_color}</p>
            <p><strong>Eye Color:</strong> {character.eye_color}</p>
            <p><strong>Birth Year:</strong> {character.birth_year}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
        </div>
    );
};

CharDesc.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        mass: PropTypes.string.isRequired,
        hair_color: PropTypes.string.isRequired,
        skin_color: PropTypes.string.isRequired,
        eye_color: PropTypes.string.isRequired,
        birth_year: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired
    }).isRequired
};

export default CharDesc;
