import React from 'react';
import Header from "./components/header";
import Main from "./components/main";

function App() {
    return (
        <div className="App">
        <Header />
        <div className="vimeo-wrapper">
        <iframe title="Iter Trailer"
    src="https://player.vimeo.com/video/373800754?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0"
    frameBorder="0" allow="autoplay; fullscreen"></iframe>
        </div>
        <Main />
        <div className="border"></div>
        </div>
);
}

export default App;
