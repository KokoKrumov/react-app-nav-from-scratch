import React , { useState } from "react";
import "./Accordion.css"

export default ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const list = items.map((item, index) => {

        const {title, text} = item

        const toggleContent = (index) => {
            setActiveIndex(index)
        }

        const active = index === activeIndex ? 'active' : ''

        return (
            <React.Fragment key={title}>
                <div className={`${active} title`}
                     onClick={() => toggleContent(index)}
                >
                    <i className="dropdown icon"/>
                    {title}
                </div>
                <div className={`${active} content`}>
                    <p className="">
                        {text}
                    </p>
                </div>
            </React.Fragment>
        )
    })

    return <div className="ui styled accordion accordion__wrap">{list}</div>
}
