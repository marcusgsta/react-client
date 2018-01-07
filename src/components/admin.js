import React from 'react';
import { Link } from 'react-router-dom';
const FontAwesome = require('react-fontawesome');

const Admin = () => (
    <div className="admin">
        <h2>Admin</h2>
        <div>
            <div className="adminLink">
                <Link to="/update">Uppdatera</Link>
                <FontAwesome
                    name='fas fa-edit'
                    size='2x'/>
            </div>
            <div className="adminLink">
                <Link to="/remove">Radera</Link>
                <FontAwesome
                    name='fas fa-trash'
                    size='2x'/>
            </div>
        </div>
    </div>
);

export default Admin;
