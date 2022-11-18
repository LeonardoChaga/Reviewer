import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import './HeaderComponent.css';
import logo from '../../Assets/reviewer-logo.png';

function HeaderComponent() {
    const history = useHistory();

    let matchTendencies = useRouteMatch('/');
    let matchMovies = useRouteMatch('/movies');
    
    return (
        <div className="headerContainer">
            <a href="http://localhost:3000/"><img 
                
                src={logo}
                alt=""
                className="logo"
            /></a>

            <div className="buttonContainer">
                <button className={`${matchTendencies?.isExact ? "button-selected" : "button"} button-left`} onClick={() => { history.push('/') }}>
                    Tendências
                </button>
                <button className={`${matchMovies?.isExact ? "button-selected" : "button"} button-center`} onClick={() => { history.push('/movies') }}>
                    Filmes
                </button>
            </div>
        </div>
    );
}

export default HeaderComponent;
