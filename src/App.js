import React from 'react';
import Navigation from "./components/Navigation";
import Accordion from "./components/Accordion";
import Route from "./components/Route";
import EventsList from "./components/EventsList";

import './App.css';
import Search from "./components/Search";

const items = [
    {
        title: '1 Lorem ipsum',
        text: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'
    },
    {
        title: '2 Lorem ipsum',
        text: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'
    },
    {
        title: '3 Lorem ipsum',
        text: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'
    }
]

export default () => {
    return (
        <div className="app ui container">
            <Navigation/>

            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/search'>
                <Search/>
            </Route>
            <Route path='/events'>
                <EventsList/>
            </Route>
        </div>
    )
};
