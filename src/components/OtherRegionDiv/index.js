import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TemplateBase from '../../components/TemplateBase';
import WeatherDiv from '../../components/WeatherDiv';
import PlaylistsDiv from '../../components/PlaylistsDiv';


function OtherRegionDiv({ weather, onClick }) {

    useEffect(() => {
        getTime(weather.coord.lat, weather.coord.lon)
    }, [])

    const [time, setTime] = useState(false);

    let getTime = async (lat, lon) => {
        let response = await axios.get("https://api.timezonedb.com/v2.1/get-time-zone", {
            params: {
                key: process.env.REACT_APP_OPEN_TIMEZONE_KEY,
                by: 'position',
                format: 'json',
                lat: lat,
                lng: lon,
            }
        });
        const time = (function (response) {
            const time = response.data.formatted.split(' ')[1];
            return time.split(':');
        })(response)

        setTime(time);
    }

    if (time === false) {
        return (
            <TemplateBase weather={weather} time={time} >
                <div className="text-center">
                    <h1>Carregando ...</h1>
                </div>
            </TemplateBase >
        )
    }
    else {

        return (
            <TemplateBase weather={weather} time={time} >
                <div className="text-center">
                    <WeatherDiv weather={weather} />
                    <h2>Horário: </h2>
                    <div className="time">{time[0]}:{time[1]}</div>
                    <PlaylistsDiv weather={weather} time={time} />
                    <button className="btn btn-lg btn-dark mt-4 mb-5 pl-5 pr-5" onClick={onClick}>Voltar</button>
                </div>
            </TemplateBase >
        );
    }
}

export default OtherRegionDiv;