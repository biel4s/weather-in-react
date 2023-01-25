import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/fontawesome-free-solid';

const Result = props => {

    const {
        city,
        icon,
        country,
        temperature,
        description,
        lowTemp,
        highTemp,
        feels,
        humidity,
        error
    } = props.weather

    let content = null;
    let unfound = null;

    const capitalize = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    if (!error && city) {
        content = (
            <div className="date m-auto">
                <h1 className="pt-3">{city}, {country}</h1>
                <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
                
                <h1 className="display-3"> {Math.round(temperature)}&deg;C</h1>
                <div className="d-flex justify-content-evenly">
                    <p className="highest"><FontAwesomeIcon icon={ faArrowUp } className="px-2"/>{Math.round(highTemp)}&deg;C</p>
                    <p className="lowest"><FontAwesomeIcon icon={faArrowDown} className="px-2"/>{Math.round(lowTemp)}&deg;C</p>
                </div>
                <p className="description p-3">{capitalize(description)}</p>     
                <div className="row justify-content-evenly pb-3">
                    <div className="col-6">
                        <p className="feels">{Math.round(feels)}&deg;C</p>
                        <p className="feels-text">Feels like</p>
                    </div>
                    <div className="col-6">
                        <p className="humidity">{humidity}%</p>
                        <p className="humidity-text">Humidity</p>
                    </div>
                </div>
            </div>
        )
    }
    else {
        unfound = (
            <p className="unfound pt-5 mt-5">{`Didn't find ${city} city. Try again!`}</p>   
        )
    }

    return (
        <div className="result pt-5 text-white">
            {error ? unfound : content}
        </div>        
    )    
}

export default Result;