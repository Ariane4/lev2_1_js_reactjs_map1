import React from 'react';
import WeatherData from './WeatherData';
import WeatherItems from './WeatherItems';

const Weather = WeatherData.map(WeatherList =>
    <WeatherItems weekDay={WeatherList.weekDay} urlImage={WeatherList.urlImage} tempTop={WeatherList.tempTop} tempLow={WeatherList.tempLow} />)

const WeatherList = () => {
    return (
        <section className="Weather" >{Weather}</section>
    )
}
export default WeatherList



//Version Georg Component: Weather.js
//---------------------------------------
// import React from 'react';
// import WeatherItem from './WeatherItem'
// import data from './data'

// const Weather = () => {
//     const allItems = data.map((element, i) => <WeatherItem key={i}
//         day={element.day}
//         img={element.img}
//         tempMin={element.tempMin}
//         tempMax={element.tempMax}
//     />)
//     return (
//         <div className="weather">
//             {allItems}
//         </div>);
// }

// export default Weather;