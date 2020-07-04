import React from 'react';
const logo = require('../../assets/images/logo.png');

const LogoImage = () => {
    return(
        <a className="navbar-brand" href="#">
            <img src={logo} className="logo-image" alt="SpaceX"/>
        </a>
    );
};

export default LogoImage;