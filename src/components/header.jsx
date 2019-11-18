import React from "react"
import logo from '../media/github.png';

const Header = () => {
    return(
        <div className="header-container">
            <h1 className="game-title">ITER</h1>
            <a className="github-button" href="https://github.com/MartinJohnH/iter" target="_blank" rel="noopener noreferrer">
                <img className="github-logo" src={logo} alt="Logo" />
            </a>
            <a className="play-button" href="https://martinjohnh.github.io/iter/" target="_blank" rel="noopener noreferrer">
                <h2 className="play-title">Play Game</h2>
            </a>
        </div>
    )
};

export default Header