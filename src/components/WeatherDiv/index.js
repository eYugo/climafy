import React, { useState, useEffect } from 'react';
import "weather-icons/css/weather-icons.css";
import './index.css'

function WeatherDiv({ weather }) {



    const [icon, setIcon] = useState();

    useEffect(() => {
        const weatherIcon = {
            Thunderstorm: "wi-thunderstorm",
            Drizzle: "wi-sleet",
            Rain: "wi-storm-showers",
            Snow: "wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-day-sunny",
            Clouds: "wi-day-fog"
        };
        get_WeatherIcon(weatherIcon, weather.weather["0"].id);
    }, [])

    function get_WeatherIcon(icons, rangeId) {
        switch (true) {
            case rangeId >= 200 && rangeId < 232:
                setIcon(icons.Thunderstorm);
                break;
            case rangeId >= 300 && rangeId <= 321:
                setIcon(icons.Drizzle);
                break;
            case rangeId >= 500 && rangeId <= 521:
                setIcon(icons.Rain);
                break;
            case rangeId >= 600 && rangeId <= 622:
                setIcon(icons.Snow);
                break;
            case rangeId >= 701 && rangeId <= 781:
                setIcon(icons.Atmosphere);
                break;
            case rangeId === 800:
                setIcon(icons.Clear);
                break;
            case rangeId >= 801 && rangeId <= 804:
                setIcon(icons.Clouds);
                break;
            default:
                setIcon(icons.Clouds);
        };
    }

    return (
        <div className="text-center">
            <h2>Clima em {weather.name}:</h2>
            <div className="row w-content">
                <div className="col mx-auto">
                    <i className={`wi ${icon} display-1 m-3`} />
                    <p className="description">{weather.weather["0"]["description"]}</p>
                </div>
                <div className="col mx-auto mt-4">
                    <p className="temp align-middle">{weather.main.temp}°C</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherDiv;