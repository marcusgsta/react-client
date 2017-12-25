import React from 'react';
import expressNode from '../img/express.jpg';

const About = () => (
    <div>
        <h2>Om</h2>
        <p>Den här sidan har gjorts med hjälp av Express.js,
             vilket skapar en server för back-end tillsammans
             med React.js som sköter om front-end.</p>
        <img id="express" alt="Express and Node" src={expressNode}/>
        <p>Koden finns på Github</p>
        <a href="https://github.com/marcusgsta/ramverk2-app">Ramverk2-app</a>
    </div>
);

export default About;
