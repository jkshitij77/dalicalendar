import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default class Calendar extends Component {

    render() {
        return (
            <FullCalendar 
            defaultView="dayGridWeek" 
            plugins={[ dayGridPlugin ]}
            events={[
                {title: 'event 1', date: '2020-04-24'},
                {title: 'event 2', date: '2020-04-25'}
            ]}
            />
        )
    }

    handleDateClick = (arg) => {
        alert(arg.dateStr);
    }

}