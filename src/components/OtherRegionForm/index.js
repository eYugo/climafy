import React from 'react';
import './index.css';

function OtherRegionForm({ handleChange, handleSubmit, location }) {
    return (
        <>
            <div className="container-sm text-center">
                <form onSubmit={handleSubmit} className=" mx-auto">
                    <h2>Outra Região</h2>
                    <div className="search-box m-5">
                        <input
                            type="text"
                            className="search-bar mb-3"
                            placeholder="Nome da cidade..."
                            name="cidade" value={location.cidade} onChange={handleChange} required
                        />
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="Sigla do país..."
                            name="pais" value={location.pais} onChange={handleChange} required
                        />
                    </div>
                    <button className="btn btn-lg btn-outline-dark mt-3" type="submit">Procurar</button>
                </form>
            </div>
        </>
    )
}

export default OtherRegionForm;