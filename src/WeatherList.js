import React from 'react';
import { WeatherData } from './WeatherData';
import WeatherItems from './WeatherItems';

const Weather = WeatherData.map(WeatherList =>
    <WeatherItems weekDay={WeatherList.weekDay} urlImage={WeatherList.urlImage} tempTop={WeatherList.tempTop} tempLow={WeatherList.tempLow} />)

const WeatherList = () => {
    return (
        <section className="Weather" ></section>
    )
}