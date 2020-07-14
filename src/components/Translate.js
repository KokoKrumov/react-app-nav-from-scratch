import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";


const options = [
    {
        title: 'African',
        text: 'Af'
    },
    {
        title: 'Arabic',
        text: 'Ar'
    },
    {
        title: 'Hindi',
        text: 'Hi'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <form className="ui segment form">
                <div className="field">
                    <label>First Name</label>
                    <input
                        value={text}
                        placeholder="Search..."
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                        type="text"/>
                </div>
                <Dropdown
                    label='Languages'
                    selected={language}
                    onChangeSelected={setLanguage}
                    items={options}/>
            </form>

            <div className="ui segment">
                <Convert text={text} language={language}/>
            </div>
        </div>
    )
}

export default Translate;
