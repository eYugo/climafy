import React, { useState } from 'react';
import TemplateBase from '../../components/TemplateBase';
import axios from 'axios';
import OtherRegionDiv from '../../components/OtherRegionDiv';
import OtherRegionForm from '../../components/OtherRegionForm';

function OtherRegionPage() {

    const initialLocation = {
        cidade: '',
        pais: '',
    }

    const [location, setLocation] = useState(initialLocation);
    const [weather, setWeather] = useState(false);


    function setLoc(key, value) {
        setLocation({
            ...location,
            [key]: value,
        });
    }

    function handleChange(event) {
        setLoc(
            event.target.getAttribute('name'),
            event.target.value,
        );
    }

    function handleSubmit(event) {
        event.preventDefault();
        getWeather(location.cidade, location.pais)
    }

    let getWeather = async (cidade, pais) => {
        let res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: cidade, pais,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang: 'pt',
                units: 'metric'
            }
        });
        setWeather(res.data);
    }

    if (weather === false) {
        return (
            <TemplateBase weather={weather} time={false}>
                <OtherRegionForm handleChange={handleChange} handleSubmit={handleSubmit} location={location} />
            </TemplateBase >
        )
    }
    else {

        return (
            <OtherRegionDiv weather={weather} onClick={() => { setWeather(false); }} />
        );
    }
}

export default OtherRegionPage;