import React from 'react';
import Link from "./Link";
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="ui three item menu">
                <Link href='/' className="item">List</Link>
                <Link href='/search' className="item">Search</Link>
                <Link href='/events' className="item">Upcoming Events</Link>
            </div>
        </div>
    );
}

export default Navigation;
