import React, {useEffect, useState} from "react";
import axios from 'axios';
import './Search.css'

export default () => {
    // the value from the input
    const [term, setTerm] = useState('wiki');

    //the value from the request
    const [results, setResult] = useState([]);

    const onInput = (e) => {
        setTerm(e.target.value);
    }

    useEffect(() => {
        const search = async () => {
            // тук,за да вземем response-a, задължително трябва да е с data
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: "query",
                    list: "search",
                    origin: '*',
                    srsearch: term,
                    format: "json"
                }
            })

            // set the response date to the 'result' hook
            setResult(data.query.search);
        }

        if (term && !results.length) {
            //ако имаме default търсене, и нямаме списък с резултати, т.е. това да се случи при първо зареждане
            search();
        } else {
            //в противен случай - при всеки input change стартираме изчакваща функция, която да не trigger-ва request-a веднага при натискане на клавиш
            //всеки setTimeout връща id. Това id  ни позволява да го нулираме.
            const timeoutID = setTimeout(() => {
                if (term) {
                    search();
                }

            }, 1000)

            return () => {
                clearTimeout(timeoutID)
            };
        }

    }, [term])

    const renderedResults = results.map((result) => {
        const {title, snippet, pageid} = result;
        return (

            <div key={pageid} className="item">

                <div className="header">
                    <a className="link" href={`https://en.wikipedia.org/wiki/${title}`} target=""
                       rel="noopener nofollow noreferrer">
                        {title}
                    </a>
                </div>
                {/*DON'T use dangerouslySetInnerHTML in a production*/}
                <span dangerouslySetInnerHTML={{__html: snippet}}></span>
            </div>

        )
    })

    return (
        <div>
            <div className="ui form">
                <div className='field'>
                    <label htmlFor="search-wiki">Search</label>
                    {/*при onChange ще ъпдейтваме useState, за да следим за ст-та в input-a*/}
                    <input
                        type="text"
                        id='search-wiki'
                        className='input'
                        value={term}
                        onChange={(e) => onInput(e)}
                        placeholder="Search..."/>
                </div>
            </div>

            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}
