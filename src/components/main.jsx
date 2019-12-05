import React, { useRef } from 'react';
import kid from "../media/kid.png";
import dog from "../media/dog.png";
import ring1 from "../media/ring1.png";
import ring2 from "../media/ring2.png";
import tether from "../media/tether.gif";
import gravity from "../media/gravity.gif";

const Main = () => {
    const handlePageScroll = (e) => {
        let scrollLeft = window.pageXOffset;
        window.scrollTo({
            top: 0,
            left:  scrollLeft + e.deltaY,
            behaviour: 'smooth' //if you want smooth scrolling
        });
    };

    return(
        <div className="main-container" onWheel={handlePageScroll}>
            <div className="translucent-black-gradient">
                <div className="col-1">
                    <h2 className="subtitle">About</h2>
                    <p className="text">Take control of a dog who goes into the underworld to save the soul of his recently deceased friend and bring them back to the world of the living.</p>
                </div>
            </div>
            <div className="section-about">
                <div className="col-2">
                    <h2 className="subtitle"><br/></h2>
                    <p className="text">Puzzles designed to require collaboration between the dog and the child.</p>
                </div>
                <div className="col-3">
                    <h2 className="subtitle"><br/></h2>
                    <p className="text"> Child will follow the dog as long as they are tethered. The child’s spirit will begin to fade if left untethered for too long.</p>
                    <img className="gif" src={tether} alt="tether" />
                </div>
                <img className="image-right" src={kid} alt="Kid" />
                <div className="col-1">
                    <h2 className="subtitle">The Light</h2>
                    <p className="text">Traverse mausoleums, catacombs and tombs as you make your way to the surface. The closer you get to the surface, the more light leaks into the environment. The light damages your companion and dissolves their spirit.</p>
                </div>
            </div>
            <div className="section-about">
                <img className="image-left" src={dog} alt="Dog" />
                <div className="col-4">
                    <h2 className="subtitle">Gravity Manipulation</h2>
                    <p className="text">To aid your journey, you have the power to manipulate gravity in any of the six directions. Use gravity to move heavy objects, open pathways, and avoid light beams.</p>
                    <img className="gif" src={gravity} alt="gravity" />
                </div>
            </div>
            <div className="section-about-2">

            </div>
            <div className="section-about-3">

                <iframe className="video" width="70%" height="70%" src="https://www.youtube.com/embed/6NzYKCeno78" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
            <div className="section-about-4">

            </div>
        </div>
    )
};

export default Main