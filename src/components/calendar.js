import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Filter from './filter';
import * as db from '../datastore.js';
import Event from './event';
import '../App.css'
import firebase from 'firebase';
import './calendar.css'
import NavBar from './navbar'

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            events: [],
            unshownEvents: [],


            //showAthletics: true,
            showMusic: false,
            showDance: false,
            showArt: false,
            showGreekLife: false,
            // showProgramming: false,
            showClub: false,
            // showGuestSpeaker: false,
            showHealth: false,
            showProfessional: false,
            showReligious: false,
            // showFoodProvided: false,
            showOther: false,

            isOpen: false,

            allEventsPage: true
        };
    }
    calendarRef = React.createRef();


    async componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({authenticated: true});
                this.setState({email: user.email});
                // Do we even need this email and ID thing?
                this.setState({userID: user.uid});
            }
        });
        db.fetchNewPost(this.fetchedNewPosts); //fetchedNewPosts is equivalent to callback
    }
    fetchedNewPosts = (allEvents) => {
        console.log("HERE");
        if(allEvents!=null) {
            var array = []
            for (let i = 0; i < Object.keys(allEvents).length; i+=1) {
                const currKey = Object.keys(allEvents)[i];
                // console.log(currKey);
                const currItem = allEvents[currKey];
                // console.log(currItem);
                // console.log("Event in item"+currItem.event);
                array.push(currItem.event);
            }
            // console.log("Array");
            // console.log(array);
            this.setState({events: array});
        }
        // this.setState({events: allEvents});
    }

    addMyEvent=()=> {
        //do something
    }

    closeModal=()=>{
        this.setState({isOpen:false})
    }

    openModal=(allEvents)=>{

        var title = allEvents.event.title;
        console.log("")
        var oneEvent = null;
        for (let i = 0; i < Object.keys(allEvents).length; i+=1) {
            const currKey = Object.keys(allEvents)[i];
            const currItem = allEvents[currKey];
            console.log(currItem.EventTitle)
            // if (currItem.EventTitle.localeCompare(title)==0){
            //     oneEvent=currItem;
            // }
        }
        console.log(oneEvent)

        this.setState({isOpen: true})
        return oneEvent;
        // console.log("isOpen: "+this.state.isOpen)
    };


    changeToAllEvents=()=>{
        if (!this.state.allEventsPage){
            this.setState({allEventsPage:true})
        }
    }
    changeToMyEvents=()=>{
        if (this.state.allEventsPage){
            this.setState({allEventsPage:false})
        }
    }

    musicClicked=()=>{
        console.log(this.state.showMusic)
        // console.log("musicClicked running")
        // this.setState({showMusic: !this.state.showMusic})
        // console.log(this.state.showMusic)
        //might reverse boolean?

        if (this.state.showMusic===false){ //about to be turned to true so show Music
            console.log("show music")
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                // console.log("className: "+currItem.className)
                if(currItem.className==="eventMusic") {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
            // console.log(this.state.events)

            // this.setState({showMusic: true})
            // console.log("state: "+this.state.showMusic)
        }
        else {
            console.log("stop showing music")
            var array = Array.from(this.state.events)
            // console.log(Object.keys(this.state.unshownEvents).length)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                // console.log("className: "+currItem.className)
                if(currItem.className==="eventMusic") {
                    // console.log("match: "+currItem)
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
            // console.log("events: "+this.state.events)
            console.log("unshown "+this.state.unshownEvents)

            // this.setState({showMusic: false})
            // console.log("state: "+this.state.showMusic)
        }
        this.setState({showMusic: !this.state.showMusic})
    }



    danceClicked=()=>{
        if (this.state.showDance===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className==="eventDance") {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className==="eventDance") {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showDance: !this.state.showDance})
    }


    artClicked=()=>{
        if (this.state.showArt===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className==="eventArt") {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className==="eventArt") {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showArt: !this.state.showArt})
    }


    greekClicked=()=>{
        if (this.state.showGreekLife===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className==="eventGreek") {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className==="eventGreek") {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showGreekLife: !this.state.showGreekLife})
    }


    clubClicked=()=>{
        if (this.state.showClub===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className==="eventClub") {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className==="eventClub") {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showClub: !this.state.showClub})
    }


    healthClicked=()=>{
        if (this.state.showHealth===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className==="eventHealth") {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className==="eventHealth") {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showHealth: !this.state.showHealth})
    }

    professionalClicked=()=>{
        if (this.state.showProfessional===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className==="eventProfessional") {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className==="eventProfessional") {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showProfessional: !this.state.showProfessional})
    }

    religiousClicked=()=>{
        if (this.state.showReligious===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className==="eventReligious") {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className==="eventReligious") {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showReligious: !this.state.showReligious})
    }


    otherClicked=()=>{
        if (this.state.showOther===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className==="eventOther") {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className==="eventOther") {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showOther: !this.state.showOther})
    }


    render() {
 
        // var hardEvents = [{title: 'Wrong 1', date: '2020-05-08'},
        // {title: 'event 2', start:'2020-05-07T13:00:00', end: '2020-05-07T14:00:00'}];
        // // var calendar = <FullCalendar
        // ref={this.calendarRef}
        // defaultView="dayGridMonth"
        // // Or dayGridMonth timeGridWeek
        // plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
        // events = {hardEvents}
        // />
        var calendar = null;
        // console.log(hardEvents);
        // console.log("I am not null!!! Events next");
        // console.log(this.state.events);
        // console.log("Length " + this.state.events.length);
        // if (this.state.events != null && this.state.events.length !== 0) {
            calendar =
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
                    events={this.state.events}
                    eventClick={this.openModal}
            />
        // }
        let pageTitle = "All Events"
        if (!this.state.allEventsPage) {
            pageTitle = "My Events"
        }

        return (
            <div>
                <NavBar myevents={this.changeToMyEvents} allevents={this.changeToAllEvents}/>
                <div className="bluebox">
                    <p className="pageTitle">{pageTitle}</p>
                </div>
                <div className = "calAndFilterContainer">
                    <div><Filter
                    musicClicked={this.musicClicked}
                    danceClicked={this.danceClicked}
                    artClicked={this.artClicked}
                    greekClicked={this.greekClicked}
                    clubClicked={this.clubClicked}
                    healthClicked={this.healthClicked}
                    professionalClicked={this.professionalClicked}
                    religiousClicked={this.religiousClicked}
                    // foodClicked={this.foodClicked}
                    otherClicked={this.otherClicked}

                    /></div>
                    <div>
                    {calendar}

                    <div className="eventmodal">
                        <Event show={this.state.isOpen} onClose={this.closeModal} addMyEvent={this.addMyEvent}>
                        <div className="eventInfo">
                            hello
                        </div>
                        </Event>
                    </div>

                        {/* <FullCalendar
                        defaultView="timeGridWeek"
                        plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
                        // events={this.state.events}
                        /> */}
                    </div>
                </div>
            </div>
        )
    }
    // handleDateClick = (arg) => {
    //     alert(arg.dateStr);
    // }
    // handleEventClick = (arg) => {
    // }
}
export default Calendar;
