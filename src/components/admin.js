import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => (
    <div className="admin">
        <h2>Admin</h2>
        <li><Link to="/update">ikon Uppdatera</Link></li>
        <li><Link to="/remove">ikon Radera</Link></li>
    </div>
);

export default Admin;
