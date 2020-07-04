import React from 'react';
import {Link} from 'react-router-dom';

const NavItem = ({link, children}) => {
    return (
        <li className="nav-item mx-3">
            <Link className="nav-link text-white"
               to={link}>
                {children}
            </Link>
        </li>
    );
};

export default NavItem;