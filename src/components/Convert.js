import React, {useState, useEffect} from "react";


const Convert = ({text, language}) => {
    const [texting, setText] = useState('')
    const [lang, setLang] = useState('')


    useEffect(() => {
        console.log(language)
        // setText(text)
        // setLang(language)
    }, [text, language])
    return (
        <div>
            <p>{texting}</p>
            <p>{lang}</p>
        </div>
    )
}

export default Convert;
