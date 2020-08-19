import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function TemplateBaseBG({ children, weather, time }) {

    useEffect(() => {
        console.log(weather, time)
        getWeatherName(weather.weather["0"].id);
        getDayPeriod(time[0]);
    }, [])

    const [dayPeriod, setDayPeriod] = useState(false);
    const [weatherName, setWeatherName] = useState(false);
    const [txtColor, setTxtColor] = useState(false);

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
                setTxtColor('dark');
                break;
            case hour >= 11 && hour < 15:
                setDayPeriod('noon');
                setTxtColor('dark');
                break;
            case hour >= 15 && hour < 19:
                setDayPeriod('afternoon');
                setTxtColor('dark');
                break;
            case hour >= 19 || hour < 6:
                setDayPeriod('night');
                setTxtColor('light');
                break;
            default:
                setDayPeriod('default');
                setTxtColor('dark');
        };
    }

    return (
        <div className={`bg-${weatherName}-${dayPeriod} corpo`} >
            <div className={`container text-${txtColor}`}>
                <header className="header-css text-center">
                    <div className="container pt-3 mb-4">
                        <h1>Climafy</h1>
                        <p className="mb-4 ">Veja estas playlist baseadas no clima de agora!</p>
                        <Link className={`btn btn-md btn-outline-${txtColor}`} to="/">Minha Região</Link>
                        <Link className={`btn btn-md btn-outline-${txtColor} ml-1`} to="/other/region">Outra região</Link>
                    </div>
                </header>
                <hr className="linha1" />
                {children}
            </div>
        </div>
    );
}

export default TemplateBaseBG;