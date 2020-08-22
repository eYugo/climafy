import React, { useState, useEffect } from 'react';

function PlaylistsLists({ weatherName, dayPeriod }) {

    useEffect(() => {
        getPlaylists(weatherName, dayPeriod)
    }, [])

    const [playlists, setPlaylists] = useState(false);

    function getPlaylists(weatherName, dayPeriod) {
        switch (true) {
            case weatherName === "clear" && dayPeriod === "morning":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/37i9dQZF1DXc5e2bJhV6pu",
                    playlist2: "https://open.spotify.com/embed/playlist/37i9dQZF1DX47UHGK8zGt8",
                    playlist3: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdd3gw5QVjt9",
                    playlist4: "https://open.spotify.com/embed/playlist/37i9dQZF1DX9OZisIoJQhG",
                })
                break;
            case weatherName === "clear" && dayPeriod === "noon":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/37i9dQZF1DWSRkJG9UvIz1",
                    playlist2: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb",
                    playlist3: "https://open.spotify.com/embed/playlist/37i9dQZF1DWYBO1MoTDhZI",
                    playlist4: "https://open.spotify.com/embed/playlist/37i9dQZF1DXbtuVQL4zoey",
                })
                break;
            case weatherName === "clear" && dayPeriod === "afternoon":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/37i9dQZF1DX889U0CL85jj",
                    playlist2: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4E3UdUs7fUx",
                    playlist3: "https://open.spotify.com/embed/playlist/3ByXZPrQzwZEXoSRAb8PRE",
                    playlist4: "https://open.spotify.com/embed/playlist/7ozIozDp260fjNOZy1yzRG",
                })
                break;
            case weatherName === "clear" && dayPeriod === "night":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdipfKDeMPTE",
                    playlist2: "https://open.spotify.com/embed/playlist/37i9dQZF1DWTjLfR5thd2p",
                    playlist3: "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1eVE7l",
                    playlist4: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZd79rJ6a7lp",
                })
                break;
            case weatherName === "cloud" && dayPeriod === "morning":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/37i9dQZF1DXb5Mq0JeBbIw",
                    playlist2: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2MyUCsl25eb",
                    playlist3: "https://open.spotify.com/embed/playlist/7aRkIB2UvssMbJyzOH8nST",
                    playlist4: "https://open.spotify.com/embed/playlist/4E1Lsq0dUQJMx2SxhrAMnz",
                })
                break;
            case weatherName === "cloud" && dayPeriod === "noon":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/37i9dQZF1DWTSPqolnbHgK",
                    playlist2: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdCsscAsbRNz",
                    playlist3: "https://open.spotify.com/embed/playlist/37i9dQZF1DWSRkJG9UvIz1",
                    playlist4: "https://open.spotify.com/embed/playlist/3oh3NmpgHy2leLcu7oobAr",
                })
                break;
            case weatherName === "cloud" && dayPeriod === "afternoon":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/5tOffZXVBFTMS7mkKQ3tpX",
                    playlist2: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM0LYsmbMT",
                    playlist3: "https://open.spotify.com/embed/playlist/7K3scENpOi7ZPZUHfnfic3",
                    playlist4: "https://open.spotify.com/embed/playlist/37i9dQZF1DX889U0CL85jj",
                })
                break;
            case weatherName === "cloud" && dayPeriod === "night":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/37i9dQZF1DX692WcMwL2yW",
                    playlist2: "https://open.spotify.com/embed/playlist/6hDHKvybgzgz0ksuLctFcZ",
                    playlist3: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdbizRAR17Ui",
                    playlist4: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4wta20PHgwo",
                })
                break;
            case weatherName === "rain" && dayPeriod === "morning":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/4K8t01Vqafvf7tXQ2mE2rz",
                    playlist2: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2mFmJUZg4Mp",
                    playlist3: "https://open.spotify.com/embed/playlist/3Cytl3oVEC2xV8YQ3YlSxO",
                    playlist4: "https://open.spotify.com/embed/playlist/37i9dQZF1DXb5Mq0JeBbIw",
                })
                break;
            case weatherName === "rain" && dayPeriod === "noon":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/37i9dQZF1DWULHbs82dshJ",
                    playlist2: "https://open.spotify.com/embed/playlist/37i9dQZF1DXbvABJXBIyiY",
                    playlist3: "https://open.spotify.com/embed/playlist/1IKhql2JHesEuS9q8UESfo",
                    playlist4: "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl",
                })
                break;
            case weatherName === "rain" && dayPeriod === "afternoon":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl",
                    playlist2: "https://open.spotify.com/embed/playlist/3r82Jvzw3SSGKKiKf3dXMM",
                    playlist3: "https://open.spotify.com/embed/playlist/4eWBwGl0c5wtp6k5Krp6My",
                    playlist4: "https://open.spotify.com/embed/playlist/7f24KaDrATReBg45esAgX8",
                })
                break;
            case weatherName === "rain" && dayPeriod === "night":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4wta20PHgwo",
                    playlist2: "https://open.spotify.com/embed/playlist/4SFVHvEb3ZLTcoeHatpAEV",
                    playlist3: "https://open.spotify.com/embed/playlist/37i9dQZF1DX692WcMwL2yW",
                    playlist4: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZd79rJ6a7lp",
                })
                break;
            case weatherName === "snow" && dayPeriod === "morning":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/0p2artexV0DHdLbtTlnYo3",
                    playlist2: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4H7FFUM2osB",
                    playlist3: "https://open.spotify.com/embed/playlist/6Lg4jEaljcSf0rrXQVsMYD",
                    playlist4: "https://open.spotify.com/embed/playlist/37i9dQZF1DXb5Mq0JeBbIw",
                })
                break;
            case weatherName === "snow" && dayPeriod === "noon":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/04N8ZBCaYSJmODS9M9S2tz",
                    playlist2: "https://open.spotify.com/embed/playlist/6Lg4jEaljcSf0rrXQVsMYD",
                    playlist3: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4H7FFUM2osB",
                    playlist4: "https://open.spotify.com/embed/playlist/0p2artexV0DHdLbtTlnYo3",
                })
                break;
            case weatherName === "snow" && dayPeriod === "afternoon":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/6jFLqIVlhUsE4vV8wOJRK3",
                    playlist2: "https://open.spotify.com/embed/playlist/37i9dQZF1DWWmb7Ur0aIYk",
                    playlist3: "https://open.spotify.com/embed/playlist/1bdGGME8qWlqMGdollbQjZ",
                    playlist4: "https://open.spotify.com/embed/playlist/1GAzKZhh7QiqIQH9Y3stOA",

                })
                break;
            case weatherName === "snow" && dayPeriod === "night":
                setPlaylists({
                    playlist1: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5tKipVBa9Hc",
                    playlist2: "https://open.spotify.com/embed/playlist/1LYzALDICgPYFWfjhzL647",
                    playlist3: "https://open.spotify.com/embed/playlist/7orAWQDfHhNJzoRHfVJjBi",
                    playlist4: "https://open.spotify.com/embed/playlist/5xSlv7U4VdzDksPpGnwS9U",
                })
                break;
            default:
                setPlaylists('default')
        };
    }

    return (
        <>
            <h2 className="mt-4">Playlists recomendadas:</h2>
            <div className="row mt-5 text-center">
                <div className="col-md m-2">
                    <iframe title="Spotify Playlist" className="iframe" src={playlists.playlist1} width="100%" height="600" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="col-md m-2">
                    <iframe title="Spotify Playlist" className="iframe" src={playlists.playlist2} width="100%" height="600" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                <div className="col-md m-2">
                    <iframe title="Spotify Playlist" className="iframe" src={playlists.playlist3} width="100%" height="600" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="col-md m-2">
                    <iframe title="Spotify Playlist" className="iframe" src={playlists.playlist4} width="100%" height="600" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
        </>
    );

}

export default PlaylistsLists;