import React from 'react';
import Typed from "react-typed";
import Particles from "react-particles-js";
import "../App.css";
const Header = () => {
    return (
        
        <div className="header-wrapper">
            <Particles
                params={{
                    particles: {
                    number: {
                        value: 30,
                        density: {
                        enable: true,
                        value_area:700
                        }
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                        width: 7,
                        color: "#fff"
                        }
                    }
                    }
                }}
            />
            <div className="main-info">
                <h1>Arpita Mohanty</h1>
                <Typed
                  className="typed-text"
                  strings={["HTML", "CSS", "React JS", "Web Development"]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                />
                <a href="./contactMe" className="btn-main-offer">Contact Me</a>
            </div>
        </div>

    )
}

export default Header
