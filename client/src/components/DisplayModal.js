import React, { Component } from 'react';
import { genreTypes } from "../constants/pokemonTypes.js"


export default class PokemonTeam extends Component {

    // Function that adds the corresponding types to each artists
    pairGenreTypes(artistsInfo) {
        artistsInfo.forEach((artist) => {
            if (artist.genre == null) {
                artist.type = "Normal"
            }
            else {
                // O(n) maybe binary search for O(logn)?
                Object.keys(genreTypes).forEach(genre => {
                    if (artist.genre === genre) artist.type = genreTypes[genre];
                })
            }
        })
    }

    getBackgroundColor(type) {
        switch(type) {
            case "Normal": return "#A8A77A";
            case "Fire": return "EE8130";
            case "Water": return "6390F0";
            case "Electric": return "F7D02C";
            case "Grass": return "7AC74C";
            case "Ice": return "96D9D6";
            case "Fighting": return "C22E28";
            case "Poison": return "A33EA1";
            case "Ground": return "E2BF65";
            case "Flying": return "A98FF3";
            case "Psychic": return "F95587";
            case "Bug": return "A6B91A";
            case "Rock": return "B6A136";
            case "Ghost": return "735797";
            case "Dragon": return "6F35FC";
            case "Dark": return "705746";
            case "Steel": return "B7B7CE";
            case "Fairy": return "D685AD";
            default: return "#white";
        }
    }

    render() {
        // artistsInfo contains genre, name, and img
        const { artistsInfo } = this.props;
        this.pairGenreTypes(artistsInfo);

        return (
            <div className='pokemonteam'>
                {
                    artistsInfo.map((artist) => {
                        return <div className='team'
                            style="background-color:white;"
                        
                        >
                            <h1>{artist.name}</h1>
                            <img className="artistimg" src={artist.imgURI} alt="artist img"></img>
                            <h1>{artist.type} Type</h1>
                        </div>
                    })
                }
            </div>
        )
    }
}
