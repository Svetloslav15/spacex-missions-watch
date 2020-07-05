import React from 'react';

const Ship = ({ship}) => {
    return (
        <div className='row my-3'>
            <div className='col-md-6'>
                <h4>{ship.name}</h4>
                <img className='w-100' src={ship.image} alt={ship.name}/>
            </div>
            <div className='col-md-5 offset-md-1 text-left mt-4'>
                <p>Home Port: {ship.home_port}</p>
                <p>Type: {ship.type}</p>
                <p>Mass: {ship.mass_kg} kg</p>
                <p>Year Built: {ship.year_built}</p>
                <p>Is Active: {ship.active.toString().toUpperCase()}</p>
            </div>
        </div>
    );
};

export default Ship;