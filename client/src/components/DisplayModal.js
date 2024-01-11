import React, { Component } from 'react';
import { genreTypes } from "../constants/pokemonTypes.js";
import Bug from "../assets/modal/modal_group_bug.png";
import Dark from "../assets/modal/modal_group_dark.png";
import Dragon from "../assets/modal/modal_group_dragon.png";
import Electric from "../assets/modal/modal_group_electric.png";
import Fairy from "../assets/modal/modal_group_fairy.png";
import Fighting from "../assets/modal/modal_group_fighting.png";
import Fire from "../assets/modal/modal_group_fire.png";
import Flying from "../assets/modal/modal_group_flying.png";
import Ghost from "../assets/modal/modal_group_ghost.png";
import Grass from "../assets/modal/modal_group_grass.png";
import Ground from "../assets/modal/modal_group_ground.png";
import Ice from "../assets/modal/modal_group_ice.png";
import Normal from "../assets/modal/modal_group_normal.png";
import Poison from "../assets/modal/modal_group_poison.png";
import Psychic from "../assets/modal/modal_group_psychic.png";
import Rock from "../assets/modal/modal_group_rock.png";
import Steel from "../assets/modal/modal_group_steel.png";
import Water from "../assets/modal/modal_group_water.png";

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

    setBackgroundColor(type) {
        switch(type) {
            case 'Normal': return "#A8A77A";
            case 'Fire': return '#EE8130';
            case "Water": return "#6390F0";
            case "Electric": return "#F7D02C";
            case "Grass": return "#7AC74C";
            case "Ice": return "#96D9D6";
            case "Fighting": return "#C22E28";
            case "Poison": return "#A33EA1";
            case "Ground": return "#E2BF65";
            case "Flying": return "#A98FF3";
            case 'Psychic': return "#F95587";
            case "Bug": return "#A6B91A";
            case "Rock": return "#B6A136";
            case "Ghost": return "#735797";
            case "Dragon": return "#6F35FC";
            case "Dark": return "#705746";
            case "Steel": return "#B7B7CE";
            case "Fairy": return "#D685AD";
            default: return "#white";
        }
    }
    setPokemonBackground(type) {
        console.log("HELLO");
        switch (type) {
            case 'Normal': return Normal;
            case 'Fire': return Fire; 
            case "Water": return Water;
            case "Electric": return Electric;
            case "Grass": return Grass;
            case "Ice": return Ice;
            case "Fighting": return Fighting;
            case "Poison": return Poison;
            case "Ground": return Ground;
            case "Flying": return Flying;
            case 'Psychic': return Psychic;
            case "Bug": return Bug;
            case "Rock": return Rock;
            case "Ghost": return Ghost;
            case "Dragon": return Dragon;
            case "Dark": return Dark;
            case "Steel": return Steel;
            case "Fairy": return Fairy;
            default: return "";
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
                            style={{backgroundColor: this.setBackgroundColor(artist.type)}}>
                                <h1>{artist.name}</h1>
                                <img 
                                    className="pokeimg"
                                    src={this.setPokemonBackground(artist.type)} 
                                    alt="Poke Modal"/>
                                <img 
                                    className="artistimg" 
                                    src={artist.imgURI} 
                                    alt="artist img"></img>
                                <h2>{artist.type} Type</h2>
                        </div>
                    })
                }
                
            </div>
        )
    }
}
