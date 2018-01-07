import React from 'react';
import expressLogo from '../img/express_icon.png';
import reactLogo from '../img/react_logo.svg';
import socketIo from '../img/socket.io.png';
import jwtLogo from '../img/jwt.png';
const FontAwesome = require('react-fontawesome');

const About = () => (
    <div className="about-page">
        <h2>Om React Chat</h2>
        <p>Jag som kodat React Chat heter Marcus Gustafsson. Appen är slutprojektet för kursen Ramverk2, i utbildningen Webbprogrammering vid Blekinge Tekniska Högskola.</p>

        <div className="wrap">
            <section>
                <h3>Express.js</h3>
                <img alt="Express and Node" src={expressLogo}/>
                <p>Servern startas av <a href="https://expressjs.com/">Express.js</a>.</p>
            </section>

            <section>
                <img id="reactLogo" alt="React Logo" src={reactLogo}/>
                <h3>React.js</h3>

                <p>Användargränssnittet är gjort i <a href="https://reactjs.org/">React.js</a>.</p>
            </section>

            <section>
                <h3>socket.io</h3>
                <img id="socketio" alt="Socket.io Logo" src={socketIo}/>
                <p>Realtidschatten använder <a href="https://socket.io/">socket.io</a>.</p>
            </section>

            <section>
                <h3>JWT</h3>
                <img id="jwt" alt="JWT Logo" src={jwtLogo}/>
                <p><a href="https://jwt.io/">JSON Web Token</a> tar hand om autentificering och inloggning av användare och administratör.</p>
            </section>

        </div>

        <p>Koden finns på Github. Där finns också instruktioner för hur man kan ladda ner och köra projektet på sin egen dator.</p>

        <div className="githubLink">
            <a href="https://github.com/marcusgsta/ramverk2-app">Server</a>
            <FontAwesome
                name='fab fa-github'
                size='2x'/>
        </div>

        <div className="githubLink">
            <a href="https://github.com/marcusgsta/react-client">Klient</a>
            <FontAwesome
                name='fab fa-github'
                size='2x'/>
        </div>
    </div>
);

export default About;
