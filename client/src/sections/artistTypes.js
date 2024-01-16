import React from 'react';
import Home from './Home.js';
import html2canvas from 'html2canvas';
import FileSaver from 'file-saver';

import SelectOptions from "../components/Options.js";
import { timeRangeFilters } from "../constants/filter.js";
import { getTopArtists } from "../helper/spotify.js";
import PokemonTeam  from "../components/DisplayModal.js";
import Ivysaur from "../assets/images/ivysaur_icon.png";


export default class ArtistTypes extends React.Component {
    constructor() {
        super();
        this.state = {
            timeRange: '',
            artistsInfo: [],
            displayModal: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.setTopArtists = this.setTopArtists.bind(this);
        this.onClose = this.onClose.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    handleClick(value) {
        this.setState({ timeRange: value, displayModal: true }, () => {
            this.setTopArtists(this.state.timeRange);
        });
        // once clicked we will take the value (timeframe) and make API call
    }
    async setTopArtists(timeRange) {
        // Checks if we have the artists saved in cookies
        const cachedArtists = sessionStorage.getItem(`artists[${timeRange}]`);
        // If we do, we will set the current state to that cache
        if (cachedArtists) {
            this.setState({ artistsInfo: JSON.parse(cachedArtists) });
            return;
        }
        // else we will call API 
        const response = await getTopArtists(this.props.token, timeRange);
        const { data: { items } } = response;
        this.setState({
            artistsInfo: items.map(item => ({
                name: item.name,
                genre: item.genres[0] ? item.genres[0] : null,
                imgURI: item.images[0].url,
                type: ""
            }))
        }, () => {
            sessionStorage.setItem(`artists[${timeRange}]`, JSON.stringify(this.state.artistsInfo));
        });
    }

    async getImage() {
        html2canvas(document.getElementById("poketeam"), {
            useCORS: true
        }).then(function(canvas) {
            canvas.toBlob(function(blob) {
                window.saveAs(blob, "yourpokify.png");
            });
        });
        
    }
    onClose () {
        this.setState({displayModal: false});
    }
    render() {
        const {
            artistsInfo,
            displayModal
        } = this.state;

        const { token } = this.props;
        // If we don't have a token, return to home
        if (token.token === undefined || token.token === '') { return <Home /> }
        // Proceed to ArtistTypes
        else {
            console.log(token.token);
            return (
                <div>
                    <div className="selectionheader">
                    <h1>Select your team!</h1>
                    <h2>Select from one of the following timelines to discover your top Spotify Artists and Pokemon.</h2>
                    </div>
                    {/* Displays the time range buttons */}
                    <div className='timerangediv'>
                        {Object.keys(timeRangeFilters).map(key => {
                            return <SelectOptions
                                key={key}
                                value={key}
                                clickHandler={this.handleClick}
                            >
                                {timeRangeFilters[key]}
                            </SelectOptions>
                        })
                        }
                        
                    </div>
                    <div className='ivysaurimg'>
                        <img src={Ivysaur} alt="Ivysaur"></img>
                    </div>
                    {
                        displayModal ?
                            <div className='pokemonteamcontainer'>
                                <button className='close'onClick={this.onClose}>X</button>
                                <PokemonTeam artistsInfo={artistsInfo}/>
                                <button className='download' onClick={this.getImage}>DOWNLOAD</button>
                            </div>
                            :
                            null
                    }
                </div>
            )
        }
    }
}
