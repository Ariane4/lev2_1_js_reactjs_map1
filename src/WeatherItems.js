import React from 'react'

const WeatherItems = (props) => {
    console.log(props.urlImage)
    return (
        <article className="WeatherItems">
            <p>{props.weekDay}</p>
            <img src={props.urlImage} alt=" "></img>
            <p className="tempTop">{props.tempTop}</p>
            <p className="tempLow">{props.tempLow}</p>
        </article>
    )
}

export default WeatherItems

// Version Georg - Component: WeatherItem.js
//----------------------------------------------
// import React from 'react';
// import './weatherItem.css'

// const WeatherItem = (props) => {
//     return (
//         <div className="weather-item">
//             <h4>{props.day}</h4>
//             <img src={props.img} alt="" />
//             <p>{props.tempMax}°C <span>{props.tempMin}°C</span></p>
//         </div>
//     );
// }

// export default WeatherItem;