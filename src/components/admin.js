import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => (
    <div>
        <h2>Admin</h2>
        <li><Link to="/update">Uppdatera</Link></li>
        <li><Link to="/remove">Radera</Link></li>
    </div>
);

export default Admin;
