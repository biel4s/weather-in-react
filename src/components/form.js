import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/fontawesome-free-solid';

const Form = props => {

    const [isActive, setActive] = useState("");

    const handleClick = () => {
        setActive(!isActive);  
    };

    return (
        <form className="pt-5" onSubmit={props.submit}>
            <h1 className="display-4 text-white pb-2">Weather in</h1>
            <div className={`search ${isActive ? "active" : ""}`}>
                <input
                    type="text"
                    value={props.value}
                    onChange={props.change}
                    placeholder="Enter city name"
                    className="input visible border-0"
                />
                
                <button type="button" onClick={handleClick} className="btn1 border-0"><FontAwesomeIcon icon={ faSearch } /><FontAwesomeIcon icon={ faPlus } className="position-absolute"/></button>
            </div>
        </form>
    )
}

export default Form;