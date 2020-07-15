import React, {useState, useEffect} from "react";
import axios from 'axios';


const Convert = ({text, language}) => {
    const [translated, setTranslated] = useState('')

    //ползваме debouncedText, за да задържим промяната на текста за
    //определено време, преди да го подадем на doTranslate()
    //в Search.js задържахме цялата ф-я, преди да се изпълни
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(()=>{
        const timeoutID = setTimeout(() => {
            if(!text){
                return;
            }
            setDebouncedText(text)

        }, 1000)

        return () => {
            clearTimeout(timeoutID)
        };

    }, [text])


    useEffect(() => {
        const doTranslate = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.text,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        }
            doTranslate()


    }, [debouncedText, language])
    return (
        <div>
            <p>{translated}</p>
            {/*<p>{lang}</p>*/}
        </div>
    )
}

export default Convert;
