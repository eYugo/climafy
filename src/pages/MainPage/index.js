import React, { useState, useEffect } from 'react';
import TemplateBase from '../../components/TemplateBase';
import './index.css';
import axios from 'axios';

import "weather-icons/css/weather-icons.css";
import WeatherDiv from '../../components/WeatherDiv';
import PlaylistsDiv from '../../components/PlaylistsDiv';

function Main() {

    const today = new Date();

    const time = [today.getHours(), today.getMinutes()]

    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);


    let getWeather = async (lat, long) => {
        let response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang: 'pt',
                units: 'metric'
            }
        });
        setWeather(response.data);
        console.log(response.data);

    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, [])



    if (location === false) {
        return (
            <TemplateBase weather={false} time={time}>
                <div className="text-center">
                    <h4>
                        Para mostrar sua região você precisa habilitar a localização no browser
                    </h4>
                    <br />
                    <h4>
                        Se a localização no browser ja estiver habilitada aguarde um momento
                    </h4>
                </div>
            </TemplateBase>
        )
    }
    else if (weather === false) {
        return (
            <TemplateBase weather={weather} time={time}>
                <div className="text-center">
                    <h1>
                        Carregando o clima...
                    </h1>
                </div>
            </TemplateBase>
        )
    }
    else {
        return (
            <TemplateBase weather={weather} time={time}>
                <div className="text-center" >
                    <WeatherDiv weather={weather} />
                    <h2>Horário: </h2>
                    <div className="time">{time[0]}:{time[1]}</div>
                    <PlaylistsDiv weather={weather} time={time} />
                </div>
            </TemplateBase>
        );
    }
}

export default Main;
