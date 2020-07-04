import React from 'react';
import NavItem from "./NavItem";
import LogoImage from "./LogoImage";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg py-0 box-shadow-none">
            <LogoImage/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"/>
            </button>

            <div className="collapse navbar-collapse mr-5" id="basicExampleNav">

                <ul className="navbar-nav ml-auto">
                    <NavItem link='/'>Home</NavItem>
                    <NavItem link='/upcoming'>Upcoming Launches</NavItem>
                    <NavItem link='/past'>Past Launches</NavItem>
                    <NavItem link='/about'>About</NavItem>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;