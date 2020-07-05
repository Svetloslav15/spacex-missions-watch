import React from 'react';
import ImageCarousel from './ImageCarousel';

const Rocket = ({rocket}) => {
    return (
       <React.Fragment>
           <h3 className='mb-4'>Rocket: {rocket.name}</h3>
           <div className='row'>
               <div className='col-md-6'>
                   <ImageCarousel images={rocket.flickr_images}/>
               </div>
               <div className='col-md-6 text-left'>
                   <div className='row col-md-12'>
                       <div className='col-md-6 text-left'>
                           <p>Height: {rocket.height.meters} m</p>
                           <p>Diameter: {rocket.diameter.meters} m</p>
                           <p>Mass: {rocket.mass.kg} kg</p>
                       </div>
                       <div className='col-md-6 text-left'>
                           <p>Success Rate: {rocket.success_rate_pct}</p>
                           <p>Cost per launch: $ {rocket.cost_per_launch}</p>
                           <p>First Flight: {rocket.first_flight}</p>
                       </div>
                   </div>
                   <p>{rocket.description}</p>
               </div>
           </div>
       </React.Fragment>
    );
};

export default Rocket;