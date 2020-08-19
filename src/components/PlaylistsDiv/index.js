import React, { useState, useEffect } from 'react';
import './index.css';
import PlaylistsLists from './PlaylistsList';

function PlaylistsDiv({ weather, time }) {

    useEffect(() => {
        console.log(weather, time)
        getWeatherName(weather.weather["0"].id);
        getDayPeriod(time[0]);
    }, [])

    const [dayPeriod, setDayPeriod] = useState(false);
    const [weatherName, setWeatherName] = useState(false);


    function getWeatherName(rangeId) {
        switch (true) {
            case rangeId >= 200 && rangeId < 232:
                setWeatherName('rain')
                break;
            case rangeId >= 300 && rangeId <= 321:
                setWeatherName('rain')
                break;
            case rangeId >= 500 && rangeId <= 521:
                setWeatherName('rain')
                break;
            case rangeId >= 600 && rangeId <= 622:
                setWeatherName('snow')
                break;
            case rangeId >= 701 && rangeId <= 781:
                setWeatherName('atmosphere')
                break;
            case rangeId === 800:
                setWeatherName('clear')
                break;
            case rangeId >= 801 && rangeId <= 804:
                setWeatherName('cloud')
                break;
            default:
                setWeatherName('default')
        };
    }

    function getDayPeriod(hour) {
        switch (true) {
            case hour >= 6 && hour < 11:
                setDayPeriod('morning');
                break;
            case hour >= 11 && hour < 15:
                setDayPeriod('noon');
                break;
            case hour >= 15 && hour < 19:
                setDayPeriod('afternoon');
                break;
            case hour >= 19 || hour < 6:
                setDayPeriod('night');
                break;
            default:
                setDayPeriod('default');
        };
    }


    if ((weatherName === false) && (dayPeriod === false)) {
        return (
            <>
                <h1>Loading ...</h1>
            </>
        )
    }
    else {
        return (
            <>
                <PlaylistsLists weatherName={weatherName} dayPeriod={dayPeriod} />
            </>
        );
    }
}

export default PlaylistsDiv;