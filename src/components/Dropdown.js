import React, {useEffect, useRef, useState} from "react";
// import './Search.css'

export default ({items, selected, onChangeSelected}) => {

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setIsOpen(false)
        }

        document.body.addEventListener('click', onBodyClick);

        //cleanup function
        //we set this so we remove click event on the body when this component is removed from the dom
        //(ex. toggle btn or smth else )
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }

    }, [])

    const toggleSelected = (item) => {
        onChangeSelected(item)
    }

    const renderedTitles = items.map((item) => {
        const {title} = item;

        //if item title is already selected, then don't show it in the dropdown list
        if (title === selected.title) {
            return null;
        }

        return (

            <div className="item" key={title} data-value={title} onClick={() => {
                toggleSelected(item)
            }}>
                {title}
            </div>

        )
    })

    return (
        //with ref we get the top level reference of this component
        //and access it with ref.current
        // so now we should check if we click on it
        // if (re.current.contain(e.target))
        <div ref={ref}>
            <div className="ui form segment">
                <div className="field">
                    <label>Titles</label>
                    <div
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                        className={`ui dropdown selection ${isOpen ? 'active visible' : ''}`}>
                        <input type="hidden" name="title"/>
                        <div className="text">{selected.title}</div>
                        <i className="dropdown icon"></i>
                        <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
                            {renderedTitles}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
