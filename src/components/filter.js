import React, {Component} from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //make a list variable here?
            athletics: true,
            music: true,
            dance: true,
            art: true,
            greek: true,
            programming: true,
            club: true,
            speaker: true,
            health: true,
            professional: true,
            religious: true,
            food: true,
            other: true
        }
    }

    athleticsClicked = () => {
        this.setState({athletics: !this.state.athlectics})
        console.log("athletics: "+this.state.athletics)
    }
    musicClicked = () => {
        this.setState({music: !this.state.music})
        console.log("music: "+this.state.music)
    }
    danceClicked = () => {
        this.setState({dance: !this.state.dance})
        console.log("dance: "+this.state.dance)
    }
    artClicked = () => {
        this.setState({art: !this.state.art})
        console.log("art: "+this.state.art)
    }
    greekClicked = () => {
        this.setState({greek: !this.state.greek})
        console.log("greek: "+this.state.greek)
    }
    programmingClicked = () => {
        this.setState({programming: !this.state.programming})
        console.log("programming: "+this.state.programming)
    }
    clubClicked = () => {
        this.setState({club: !this.state.club})
        console.log("club: "+this.state.club)
    }
    speakerClicked = () => {
        this.setState({speaker: !this.state.speaker})
        console.log("speaker: "+this.state.speaker)
    }
    healthClicked = () => {
        this.setState({health: !this.state.health})
        console.log("health: "+this.state.health)
    }
    professionalClicked = () => {
        this.setState({professional: !this.state.professional})
        console.log("professional: "+this.state.professional)
    }
    religiousClicked = () => {
        this.setState({religious: !this.state.religious})
        console.log("religious: "+this.state.religious)
    }
    foodClicked = () => {
        this.setState({food: !this.state.food})
        console.log("food: "+this.state.food)
    }
    otherClicked = () => {
        this.setState({other: !this.state.other})
        console.log("other: "+this.state.other)
    }

    render() {
        return (
            <div>
                <p>I'm the filter component</p>
                <input type="checkbox" id="athletics" name="category" onClick={this.athleticsClicked}></input>
                <label for="athletics">Athletics</label>  
                <input type="checkbox" id="music" name="category" onClick={this.musicClicked}></input>
                <label for="music">Music</label> 
                <input type="checkbox" id="dance" name="category" onClick={this.danceClicked}></input>
                <label for="dance">Dance</label> 
                <input type="checkbox" id="art" name="category" onClick={this.artClicked}></input>
                <label for="art">Art</label>
                <input type="checkbox" id="greek" name="category" onClick={this.greekClicked}></input>
                <label for="greek">Greek Life</label> 
                <input type="checkbox" id="programming" name="category" onClick={this.programmingClicked}></input>
                <label for="programming">Programming</label> 
                <input type="checkbox" id="club" name="category" onClick={this.clubClicked}></input>
                <label for="club">Club</label> 
                <input type="checkbox" id="speaker" name="category" onClick={this.speakerClicked}></input>
                <label for="speaker">Guest Speaker</label> 
                <input type="checkbox" id="health" name="category" onClick={this.healthClicked}></input>
                <label for="health">Health</label> 
                <input type="checkbox" id="professional" name="category" onClick={this.professionalClicked}></input>
                <label for="professional">Professional</label> 
                <input type="checkbox" id="religious" name="category" onClick={this.religiousClicked}></input>
                <label for="religious">Religious</label> 
                <input type="checkbox" id="food" name="category" onClick={this.foodClicked}></input>
                <label for="food">Food Provided</label> 
                <input type="checkbox" id="other" name="category" onClick={this.otherClicked}></input>
                <label for="other">Other</label> 
            </div>
        );
    }
}

export default Filter;