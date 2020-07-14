import React, {useState} from 'react';
import Navigation from "./components/Navigation";
import Accordion from "./components/Accordion";
import Route from "./components/Route";
import EventsList from "./components/EventsList";

import './App.css';
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

//задаваме default state на селект меню
    const [selected, setSelected] = useState(items[0]);
    const [showDropdown, setShowDropdown] = useState(true)

    return (
        <div className="app ui container">
            <Navigation/>

            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/search'>
                <Search/>
            </Route>
            <Route path='/dropdown'>
                <button onClick={() => {
                    setShowDropdown(!showDropdown)
                }}>
                    Toggle Dropdown
                </button>
                {showDropdown ?
                    <Dropdown
                        selected={selected}
                        onChangeSelected={setSelected}
                        items={items}/> :
                    null
                }
            </Route>
        </div>
    )
};
