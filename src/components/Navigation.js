import React from 'react';
import Link from "./Link";
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="ui four item menu">
                <Link href='/' className="item">List</Link>
                <Link href='/search' className="item">Search</Link>
                <Link href='/dropdown' className="item">Dropdown</Link>
                <Link href='/translate' className="item">Translate</Link>
            </div>
        </div>
    );
}

export default Navigation;
