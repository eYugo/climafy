import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import TemplateBaseBG from './TemplateBaseBG';

function TemplateBase({ children, weather, time }) {

    if (weather === false || time === false) {
        return (
            <div className={`bg-default-default corpo`} >
                <div className="container text-dark">
                    <header className="header-css text-center">
                        <div className="container pt-3 mb-4">
                            <h1>Climafy</h1>
                            <p className="mb-4 ">Veja estas playlist baseadas no clima de agora!</p>
                            <Link className="btn btn-md btn-outline-dark" to="/">Minha Região</Link>
                            <Link className="btn btn-md btn-outline-dark ml-1" to="/other/region">Outra região</Link>
                        </div>
                    </header>
                    <hr className="linha1" />
                    {children}
                </div>
            </div>
        );
    }
    else {
        return (
            <TemplateBaseBG weather={weather} time={time} >
                {children}
            </TemplateBaseBG>
        );
    }
}

export default TemplateBase;