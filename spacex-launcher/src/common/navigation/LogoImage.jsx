import React from 'react';
import {Link} from 'react-router-dom';
const logo = require('../../assets/images/logo.png');

const LogoImage = () => {
    return(
        <Link className="navbar-brand" to="/">
            <img src={logo} className="logo-image" alt="SpaceX"/>
        </Link>
    );
};

export default LogoImage;