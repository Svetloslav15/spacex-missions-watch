import React, {useState, useEffect} from 'react';
import LaunchService from '../../services/LaunchService';
import ImageCarousel from "./ImageCarousel";

const LaunchDetails = (props) => {
    const [launch, setLaunch] = useState(null);
    const [rocket, setRocket] = useState(null);

    useEffect(() => {
        LaunchService.getLaunchById(props.match.params.id)
            .then(data => {
                setLaunch(data);
                LaunchService.getRocketById(data.rocket)
                    .then(rocketData => setRocket(rocketData));
            });
    }, []);

    return (
        <div className="bg-none container h-200vh jumbotron mt-5 position-relative">
            <div className="home-container"/>
            {launch ? <div className="front-container">
                {launch.links.patch.small && <img className="patch-image" src={launch.links.patch.small} alt="Patch"/>}
                <h2 className="pb-4 py-2">{launch.name}</h2>
                {
                    launch.links.youtube_id ?
                        <iframe className="w-80 mx-auto h-50vh" allowFullScreen="0"
                                src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}>
                        </iframe> :
                        <h4 className='text-center text-shadow my-4'>Video will come soon...</h4>
                }

                <div className="bg-purple">
                    {
                        launch.details ?
                            <p className="text-shadow paragraph-l">{launch.details}</p>
                            :
                            <h4 className='text-center text-shadow my-4'>More information will come soon...</h4>
                    }
                    {
                        rocket ?
                            <div className="paragraph-l">
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
                            </div>
                            :
                            <h4>No infomation about the rocket</h4>
                    }
                </div>

            </div> : ''}

        </div>
    );
};

export default LaunchDetails;