import React from 'react';
import selfie from '../img/portrett_small.jpg';

const Home = () => (
    <div>
        <h1>Min app</h1>
        <p>Detta är startsidan för det som är tänkt att bli någon form av app. Jag använder tre routes, home, about och users. I users finns exempel på JSON-data som hämtas från servern i Express.</p>
        <img id="portrait" alt="marcus" src={selfie} />
    </div>
);

export default Home;
