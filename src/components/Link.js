import React from "react";

const Link = ({className, href, children}) => {

    const onClick = (e) => {
        if(e.metaKey || e.ctrlKey){
            return;
        }

        e.preventDefault();
        window.history.pushState({}, '', href);

        //това комуникира около компонентите, когато url-a се променя
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
        //в route трябва да сложим метод, който да слуша за този event
        //route handler, което е useEffect hook

    }

    return (
        <a onClick={onClick} className={ `${className} link`} href={href} target="" rel="noopener nofollow noreferrer">
            {children}
        </a>

    )
}

export default Link;
