import React from 'react'

const WeatherItems = (props) => {
    console.log(props.urlImage)
    return (
        <article>
            <p>{props.weekDay}</p>
            <img src={props.urlImage} alt=" "></img>
            <p className="tempTop">{props.tempTop}</p>
            <p className="tempLow">{props.tempLow}</p>
        </article>
    )
}

export default WeatherItems