import React from 'react';

const NavItem = ({link, children}) => {
    return (
        <li className="nav-item mx-3">
            <a className="nav-link text-white"
               href={link}>
                {children}
            </a>
        </li>
    );
};

export default NavItem;