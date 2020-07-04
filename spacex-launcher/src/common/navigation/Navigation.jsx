import React from 'react';
import NavItem from "./NavItem";
import LogoImage from "./LogoImage";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg py-0 box-shadow-none">
            <LogoImage/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse mr-5" id="basicExampleNav">

                <ul className="navbar-nav ml-auto">
                    <NavItem link='/home'>Home</NavItem>
                    <NavItem link='/upcoming'>Upcoming Launches</NavItem>
                    <NavItem link='/past'>Past Launches</NavItem>
                    <NavItem link='/about'>Abouts</NavItem>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;